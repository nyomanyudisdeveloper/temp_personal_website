import fs from "fs";
import path from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = [
  { url: "/", priority: 1.0 },
];

async function generateSitemap() {
  const sitemap = new SitemapStream({ hostname: "https://temp-personal-website.vercel.app" });

  pages.forEach(page => sitemap.write(page));
  sitemap.end();

  const sitemapXML = await streamToPromise(sitemap).then(data => data.toString());

  fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), sitemapXML);
  console.log("✅ Sitemap generated successfully!");
}

generateSitemap();
