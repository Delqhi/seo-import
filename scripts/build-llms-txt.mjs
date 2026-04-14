import fs from 'fs';
import path from 'path';

// Usage: node scripts/build-llms-txt.mjs <sourceDir> <outDir> <baseUrl>
const sourceDir = process.argv[2] || './src';
const outDir = process.argv[3] || './public';
const baseUrl = process.argv[4] || 'https://opensin.ai';

console.log(`[SEO-IMPORT] Generating llms.txt and llms-full.txt from ${sourceDir} to ${outDir}`);

// A simple recursive file finder for markdown/content files
function getFiles(dir, files = []) {
  if (!fs.existsSync(dir)) return files;
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const name = dir + '/' + file;
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (name.endsWith('.md') || name.endsWith('.tsx') || name.endsWith('.ts')) {
        files.push(name);
      }
    }
  }
  return files;
}

const allFiles = getFiles(sourceDir);
let llmsTxt = `# OpenSIN LLM Integration File\n\n> This file provides AI agents and LLM crawlers with a roadmap to our technical documentation, architecture, and capabilities.\n\n## Core Resources\n`;
let llmsFullTxt = `# OpenSIN Full Knowledge Base\n\n`;

for (const file of allFiles) {
  const content = fs.readFileSync(file, 'utf-8');
  const relativePath = path.relative(sourceDir, file);
  const routePath = relativePath.replace(/\.tsx?$/, '').replace(/\.md$/, '').replace(/\/index$/, '');
  const url = `${baseUrl}/${routePath}`;
  
  llmsTxt += `- [${routePath}](${url}): Source file ${relativePath}\n`;
  
  llmsFullTxt += `\n\n---\n## File: ${relativePath}\nURL: ${url}\n\n\`\`\`\n${content}\n\`\`\`\n`;
}

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

fs.writeFileSync(path.join(outDir, 'llms.txt'), llmsTxt);
fs.writeFileSync(path.join(outDir, 'llms-full.txt'), llmsFullTxt);

console.log(`[SEO-IMPORT] ✅ Successfully generated llms.txt and llms-full.txt`);
