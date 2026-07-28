import urllib.request
import re

models = ['xpander', 'xpander-cross', 'outlander-sport', 'l200', 'l200-gsr']

for key in models:
    url = f'https://www.mitsubishi-motors.mx/modelos/{key}'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    try:
        html = urllib.request.urlopen(req).read().decode('utf-8')
        imgs = re.findall(r'https://mitsubishi-motors\.mx/assets/[a-zA-Z0-9_\-]+\.avif', html)
        unique_imgs = sorted(list(set(imgs)))
        print(f"=== {key} ===")
        for img in unique_imgs:
            if any(c in img.lower() for c in ['red', 'orange', 'yellow', 'blue', 'sunrise', 'energetic', 'impulse', 'gsr']):
                print(img)
    except Exception as e:
        print(f"ERR {key}: {e}")
