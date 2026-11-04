// Preview de QA: somente leitura do build; não possui endpoints de submissão.
import http from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname } from 'node:path';
import assert from 'node:assert/strict';

const root = resolve('dist');
function transform(html, mode) {
  if (mode === 'text-200') return html.replace('</head>', '<style>html{font-size:200%!important}</style></head>');
  if (mode === 'no-scripts') return html.replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '').replace(/\son\w+="[^"]*"/gi, '').replace(/<noscript>([\s\S]*?)<\/noscript>/gi, '$1');
  return html;
}
assert.match(transform('<head></head>', 'text-200'), /font-size:200%/);
assert.equal(transform('<script>run()</script><p>Informações</p>', 'no-scripts'), '<p>Informações</p>');

const types = { '.html':'text/html; charset=utf-8', '.css':'text/css', '.js':'text/javascript', '.svg':'image/svg+xml', '.jpg':'image/jpeg', '.jpeg':'image/jpeg', '.png':'image/png', '.webp':'image/webp' };
http.createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) { response.writeHead(405).end(); return; }
  try {
    let pathname = decodeURIComponent(new URL(request.url, 'http://127.0.0.1').pathname);
    const fixture = pathname.match(/^\/__qa__\/(text-200|no-scripts)(\/.*)$/);
    if (fixture) pathname = fixture[2];
    let file = resolve(root, `.${pathname}`);
    if (!file.startsWith(`${root}/`) && file !== root) { response.writeHead(403).end(); return; }
    if ((await stat(file)).isDirectory()) file = resolve(file, 'index.html');
    let body = await readFile(file);
    if (fixture && extname(file) === '.html') body = Buffer.from(transform(body.toString(), fixture[1]));
    response.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control':'no-store' });
    response.end(request.method === 'HEAD' ? undefined : body);
  } catch { response.writeHead(404).end('Arquivo não encontrado'); }
}).listen(4322, '127.0.0.1', () => console.log('Preview de QA: http://127.0.0.1:4322'));
