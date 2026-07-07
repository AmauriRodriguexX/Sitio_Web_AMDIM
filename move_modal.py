
html_path = 'D:/t2o carpet especial/Sitio_Web_AMDIM/Sitio_Web_AMDIM/index.html'
with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

start_marker = '            <!-- MODAL APLICACIÓN'
end_marker = '        </section>'
after_marker = '<!-- SECCIÓN: NOTICIAS -->'

idx_start = html.find(start_marker)
idx_end = html.find(after_marker, idx_start)

if idx_start != -1 and idx_end != -1:
    modal_block = html[idx_start:idx_end]
    html = html[:idx_start] + '        </section>\n\n        ' + html[idx_end:]
    
    # We extracted the modal + closing section tag.
    # We should clean it up:
    modal_block = modal_block.replace('        </section>\n\n        ', '')
    modal_block = modal_block.replace('        </section>\n', '')
    modal_block = modal_block.replace('        </section>', '')
    
    # Now place it before legal modal
    target_marker = '    <!-- MODAL DE DOCUMENTOS LEGALES'
    html = html.replace(target_marker, modal_block + '\n' + target_marker)
    
    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(html)
    print('Done moving modal')
else:
    print('Could not find markers')

