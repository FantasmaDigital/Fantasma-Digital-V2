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
  '/solutions/ai-automation',
  '/solutions/visual-identity-systems',
  '/solutions/algorithmic-marketing-growth',
  '/solutions/cloud-devops',
  '/solutions/database-architecture',
  '/solutions/ecommerce-solutions',
  '/solutions/mobile-development',
  '/solutions/elite-refactoring',
  '/solutions/technical-audit',
  '/solutions/on-premise-infrastructure'
];

async function prerender() {
  // Force Vite preview to serve from the outDir instead of the project root
  const outDir = path.resolve(rootDir, 'dist');
  const server = await preview({
    preview: { port: 7744, strictPort: false },
    build: { outDir },
    root: rootDir
  });
  
  const port = server.httpServer.address().port;

  console.log('Launching browser...');
  const browser = await puppeteer.launch({ 
    headless: 'new',
    args: [
      '--no-sandbox', 
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-web-security',
      '--no-first-run',
      '--no-zygote',
      '--single-process'
    ]
  });
  
  const page = await browser.newPage();
  
  // Intercept requests and block heavy assets like images/fonts to save resources
  // We only need the HTML content and meta tags for SEO.
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const type = req.resourceType();
    if (['image', 'font', 'media'].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  for (const route of routes) {
    const url = `http://localhost:${port}${route}`;
    try {
      // Use longer timeout and wait for domcontentloaded which is enough for Meta tags
      await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 90000 });
      // Short delay to ensure React Helmet Async has applied the title/meta changes
      await new Promise(r => setTimeout(r, 1000));
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

  await browser.close();
  server.httpServer.close();
}

prerender().catch(e => {
  console.error(e);
  process.exit(1);
});
