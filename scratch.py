
html_path = 'D:/t2o carpet especial/Sitio_Web_AMDIM/Sitio_Web_AMDIM/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

html = html.replace('<span class=\"material-symbols-outlined icon-align\">download</span> ', '')
html = html.replace('<span class=\"material-symbols-outlined icon-align\">my_location</span> ', '')

with open(html_path, 'w', encoding='utf-8') as f:
    f.write(html)

js_path = 'D:/t2o carpet especial/Sitio_Web_AMDIM/Sitio_Web_AMDIM/js/main.js'
with open(js_path, 'r', encoding='utf-8') as f:
    js = f.read()

js = js.replace('<span class=\"material-symbols-outlined icon-align\" style=\"font-size: 1rem;\">send</span> ', '')

with open(js_path, 'w', encoding='utf-8') as f:
    f.write(js)

