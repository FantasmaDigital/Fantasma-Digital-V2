import { preview } from 'vite';
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');

const routes = [
  '/',
  '/solutions',
  '/philosophy',
  '/ecosystem',
  '/stack',
  '/eng/dossier',
  '/intake',
  '/dossier/abono-viajes',
  '/dossier/music-center-pro',
  '/dossier/inkspire-studio',
  '/solutions/full-stack-development',
  '/solutions/api-ecosystems',
  '/solutions/elite-refactoring',
  '/solutions/database-architecture',
  '/solutions/ecommerce-solutions',
  '/solutions/mobile-development',
  '/solutions/ui-ux-design',
  '/solutions/cloud-devops',
  '/solutions/ai-automation',
  '/solutions/technical-audit',
  '/solutions/on-premise-infrastructure'
];

async function prerender() {
  console.log('Starting preview server for pre-rendering...');
  // Force Vite preview to serve from the outDir instead of the project root
  const outDir = path.resolve(rootDir, 'dist');
  const server = await preview({
    preview: { port: 3000, strictPort: false },
    build: { outDir },
    root: rootDir
  });
  
  const port = server.httpServer.address().port;

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();

  for (const route of routes) {
    const url = `http://localhost:${port}${route}`;
    console.log(`Pre-rendering ${route}...`);
    try {
      await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
      // Short delay to ensure React Helmet Async has applied the title/meta changes
      await new Promise(r => setTimeout(r, 500));
      let html = await page.content();
      
      // Remove Vite dev client injections if they somehow leak in
      html = html.replace(/<script type="module" src="\/@vite\/client"><\/script>/g, '');
      html = html.replace(/<script type="module">import \{ injectIntoGlobalHook \}.*?<\/script>/s, '');
      
      const filePath = path.join(rootDir, 'dist', route === '/' ? 'index.html' : `${route}/index.html`);
      fs.mkdirSync(path.dirname(filePath), { recursive: true });
      fs.writeFileSync(filePath, html);
    } catch (e) {
      console.error(`Failed to prerender ${route}`, e);
    }
  }

  console.log('Pre-rendering complete. Closing browser and server...');
  await browser.close();
  server.httpServer.close();
}

prerender().catch(e => {
  console.error(e);
  process.exit(1);
});
