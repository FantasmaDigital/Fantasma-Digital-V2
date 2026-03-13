import { preview } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = __dirname;
const outDir = path.resolve(rootDir, 'dist');
const server = await preview({
  preview: { port: 3001 },
  build: { outDir },
  root: rootDir
});
console.log('Preview server started on ' + server.resolvedUrls.local[0]);
