// Generates Marco-Eribes-Resume.pdf from resume/index.html with a headless browser.
// resume/index.html is the source for the PDF only; the deploy workflow does not publish it as a page.
// Runs in GitHub Actions on every deploy, so the PDF always matches the web resume.
// Local use: npm i --no-save playwright && npx playwright install chromium && node scripts/make-pdf.mjs
import { chromium } from "playwright";
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";

const src = pathToFileURL(resolve("resume/index.html")).href;
const out = "Marco-Eribes-Resume.pdf";

const browser = await chromium.launch();
const page = await browser.newPage({ colorScheme: "light" });
await page.goto(src, { waitUntil: "load" });
await page.emulateMedia({ media: "print" });
const pdf = await page.pdf({ path: out, format: "Letter", printBackground: true, preferCSSPageSize: true });
await browser.close();

// Warn (without failing the deploy) if the resume no longer fits on one page
const pages = (pdf.toString("latin1").match(/\/Type\s*\/Page[^s]/g) || []).length;
if (pages > 1) console.log(`::warning::Resume PDF is ${pages} pages; trim content or spacing to keep it to one page.`);
console.log(`Wrote ${out} (${pages} page${pages === 1 ? "" : "s"}, ${(pdf.length / 1024).toFixed(1)} KB)`);
