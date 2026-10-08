"""Siqilmagan (stored) fayllarni 4 baytga tekislaydi (zipalign o'rnini bosadi).
Ishlatish: python3 zipalign.py kirish.apk chiqish.apk"""
import struct
import sys
import zipfile

src, dst = sys.argv[1], sys.argv[2]
with zipfile.ZipFile(src) as zin, zipfile.ZipFile(dst, "w") as zout:
    for info in zin.infolist():
        data = zin.read(info.filename)
        out = zipfile.ZipInfo(info.filename, date_time=info.date_time)
        out.compress_type = info.compress_type
        out.external_attr = info.external_attr
        out.extra = b""
        if info.compress_type == zipfile.ZIP_STORED:
            name_len = len(info.filename.encode("utf-8"))
            start = zout.fp.tell() + 30 + name_len + 6  # 6 = 0xD935 yozuvining minimal hajmi
            pad = (-start) % 4
            out.extra = struct.pack("<HHH", 0xD935, 2 + pad, 4) + b"\0" * pad
        zout.writestr(out, data)
