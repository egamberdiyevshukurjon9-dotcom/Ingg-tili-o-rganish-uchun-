package uz.englishstart.app;

import android.Manifest;
import android.app.Activity;
import android.content.Intent;
import android.content.pm.PackageManager;
import android.graphics.Color;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.speech.RecognitionListener;
import android.speech.RecognizerIntent;
import android.speech.SpeechRecognizer;
import android.speech.tts.TextToSpeech;
import android.webkit.JavascriptInterface;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;

import org.json.JSONObject;

import java.util.ArrayList;
import java.util.Locale;

/**
 * Sayt fayllarini (assets/www) WebView'da ochadi va Android'ning ovoz xizmatlarini
 * (TextToSpeech va SpeechRecognizer) JavaScript'ga "AndroidBridge" nomi bilan beradi,
 * chunki WebView'da brauzerning speechSynthesis / SpeechRecognition API'lari yo'q.
 */
public class MainActivity extends Activity {
    private static final int REQ_MIC = 1;

    private WebView web;
    private TextToSpeech tts;
    private boolean ttsReady = false;
    private SpeechRecognizer recognizer;
    private boolean pendingListen = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        getWindow().setStatusBarColor(Color.parseColor("#1f5fbf"));

        web = new WebView(this);
        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);
        s.setDomStorageEnabled(true);
        s.setAllowFileAccess(true);
        s.setMediaPlaybackRequiresUserGesture(false);
        s.setTextZoom(100);
        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest req) {
                Uri u = req.getUrl();
                String scheme = u.getScheme();
                if ("http".equals(scheme) || "https".equals(scheme)) {
                    // Tashqi saytlar (BBC, British Council...) telefon brauzerida ochiladi
                    try { startActivity(new Intent(Intent.ACTION_VIEW, u)); } catch (Exception ignored) { }
                    return true;
                }
                return false;
            }
        });
        web.addJavascriptInterface(new Bridge(), "AndroidBridge");
        setContentView(web);

        tts = new TextToSpeech(this, new TextToSpeech.OnInitListener() { @Override public void onInit(int status) {
            if (status != TextToSpeech.SUCCESS) return;
            int r = tts.setLanguage(Locale.UK);
            if (r == TextToSpeech.LANG_MISSING_DATA || r == TextToSpeech.LANG_NOT_SUPPORTED) {
                r = tts.setLanguage(Locale.US);
            }
            ttsReady = r != TextToSpeech.LANG_MISSING_DATA && r != TextToSpeech.LANG_NOT_SUPPORTED;
        } });

        if (savedInstanceState != null) web.restoreState(savedInstanceState);
        else web.loadUrl("file:///android_asset/www/index.html");
    }

    @Override
    protected void onSaveInstanceState(Bundle out) {
        super.onSaveInstanceState(out);
        web.saveState(out);
    }

    @Override
    public void onBackPressed() {
        if (web.canGoBack()) web.goBack();
        else super.onBackPressed();
    }

    @Override
    protected void onPause() {
        super.onPause();
        if (tts != null) tts.stop();
        if (recognizer != null) recognizer.cancel();
    }

    @Override
    protected void onDestroy() {
        if (tts != null) tts.shutdown();
        if (recognizer != null) recognizer.destroy();
        web.destroy();
        super.onDestroy();
    }

    private void js(String fn, String arg) {
        final String code = "window.__androidSR && window.__androidSR." + fn + "(" + JSONObject.quote(arg == null ? "" : arg) + ")";
        runOnUiThread(new Runnable() { @Override public void run() { web.evaluateJavascript(code, null); } });
    }

    private void toast(String msg) {
        final String code = "window.__androidToast && window.__androidToast(" + JSONObject.quote(msg) + ")";
        runOnUiThread(new Runnable() { @Override public void run() { web.evaluateJavascript(code, null); } });
    }

    private boolean hasMic() {
        return Build.VERSION.SDK_INT < 23 || checkSelfPermission(Manifest.permission.RECORD_AUDIO) == PackageManager.PERMISSION_GRANTED;
    }

    private void startRecognizer() {
        if (!SpeechRecognizer.isRecognitionAvailable(this)) {
            toast("Telefoningizda ovozni tanish xizmati yo'q. Play Market'dan \"Google\" ilovasini o'rnating yoki yangilang.");
            js("end", "unavailable");
            return;
        }
        if (recognizer == null) {
            recognizer = SpeechRecognizer.createSpeechRecognizer(this);
            recognizer.setRecognitionListener(new RecognitionListener() {
                @Override public void onReadyForSpeech(Bundle b) { }
                @Override public void onBeginningOfSpeech() { }
                @Override public void onRmsChanged(float v) { }
                @Override public void onBufferReceived(byte[] bytes) { }
                @Override public void onEndOfSpeech() { }
                @Override public void onEvent(int i, Bundle b) { }

                @Override public void onPartialResults(Bundle b) {
                    String t = first(b);
                    if (t != null) js("partial", t);
                }

                @Override public void onResults(Bundle b) {
                    String t = first(b);
                    if (t != null) js("result", t);
                    js("end", "");
                }

                @Override public void onError(int code) {
                    if (code == SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS) js("end", "no-permission");
                    else if (code == SpeechRecognizer.ERROR_NETWORK || code == SpeechRecognizer.ERROR_NETWORK_TIMEOUT) {
                        toast("Ovozni tanish uchun internet kerak (yoki telefonda oflayn ingliz tili paketini yuklab oling).");
                        js("end", "network");
                    }
                    else js("end", "error-" + code);
                }
            });
        }
        Intent i = new Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM);
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-US");
        i.putExtra(RecognizerIntent.EXTRA_LANGUAGE_PREFERENCE, "en-US");
        i.putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true);
        i.putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1);
        recognizer.startListening(i);
    }

    private static String first(Bundle b) {
        ArrayList<String> r = b.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION);
        return (r == null || r.isEmpty()) ? null : r.get(0);
    }

    @Override
    public void onRequestPermissionsResult(int code, String[] perms, int[] res) {
        if (code != REQ_MIC) return;
        boolean ok = res.length > 0 && res[0] == PackageManager.PERMISSION_GRANTED;
        if (pendingListen && ok) startRecognizer();
        else if (pendingListen) {
            toast("Mikrofonga ruxsat berilmadi. Sozlamalar → Ilovalar → English Start → Ruxsatlar bo'limida yoqing.");
            js("end", "no-permission");
        }
        pendingListen = false;
    }

    /** JavaScript'dan chaqiriladigan usullar (WebView'ning alohida oqimida ishlaydi). */
    public class Bridge {
        @JavascriptInterface
        public boolean canSpeak() { return ttsReady; }

        @JavascriptInterface
        public boolean canListen() { return SpeechRecognizer.isRecognitionAvailable(MainActivity.this); }

        @JavascriptInterface
        public void speak(String text, float rate) {
            if (!ttsReady) {
                toast("Ingliz tilidagi ovoz topilmadi. Sozlamalar → Til → Matnni nutqqa aylantirish (Text-to-speech) bo'limida ingliz tilini yuklab oling.");
                return;
            }
            tts.setSpeechRate(rate > 0 ? rate : 0.9f);
            tts.speak(text, TextToSpeech.QUEUE_FLUSH, null, "u");
        }

        @JavascriptInterface
        public void stopSpeaking() { if (tts != null) tts.stop(); }

        @JavascriptInterface
        public void startListening() {
            runOnUiThread(new Runnable() { @Override public void run() {
                if (tts != null) tts.stop();
                if (hasMic()) startRecognizer();
                else {
                    pendingListen = true;
                    requestPermissions(new String[]{Manifest.permission.RECORD_AUDIO}, REQ_MIC);
                }
            } });
        }

        @JavascriptInterface
        public void stopListening() {
            runOnUiThread(new Runnable() { @Override public void run() { if (recognizer != null) recognizer.stopListening(); } });
        }
    }
}
