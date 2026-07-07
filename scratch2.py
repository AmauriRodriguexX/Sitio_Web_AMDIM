
html_path = 'D:/t2o carpet especial/Sitio_Web_AMDIM/Sitio_Web_AMDIM/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    lines = f.readlines()

start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if '<!-- MODAL APLICACIÓN' in line:
        start_idx = i
    if start_idx != -1 and '</div>' in line and i > start_idx + 35: # find the closing div of the modal
        # Actually it's just 39 lines long from 377 to 414
        pass

# It's safer to just exact match indices since I know them: 377 to 414
# But line numbers might have changed since I removed the icons.

