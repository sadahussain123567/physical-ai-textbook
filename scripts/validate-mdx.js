#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Directory to scan for MDX files
const docsDir = path.join(__dirname, '..', 'docs');

// Function to check if a file is MDX
function isMdxFile(file) {
  return path.extname(file) === '.mdx' || path.extname(file) === '.md';
}

// Function to read frontmatter from MDX file
function extractFrontmatter(content) {
  const frontmatterRegex = /^---\s*\n([\s\S]*?)\n?---\s*\n/;
  const match = content.match(frontmatterRegex);
  if (match) {
    return match[1];
  }
  return null;
}

// Function to check if MDX file has visual elements (images, mermaid, etc.)
function hasVisualElements(content) {
  // Check for image tags
  const imageRegex = /!\[.*\]\(.*\)/g;
  // Check for image HTML tags
  const htmlImageRegex = /<img/gi;
  // Check for Mermaid code blocks
  const mermaidRegex = /```mermaid/g;
  // Check for other common visual indicators
  const visualIndicators = [imageRegex, htmlImageRegex, mermaidRegex];

  for (const regex of visualIndicators) {
    if (content.match(regex)) {
      return true;
    }
  }

  return false;
}

// Function to validate a single MDX file
function validateMdxFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const frontmatter = extractFrontmatter(content);

  const errors = [];

  // Check if frontmatter exists
  if (!frontmatter) {
    errors.push('Missing frontmatter (--- ... ---)');
  } else {
    // Check if id and slug exist in frontmatter
    if (!frontmatter.includes('id:')) {
      errors.push('Missing id in frontmatter');
    }
    if (!frontmatter.includes('slug:')) {
      errors.push('Missing slug in frontmatter');
    }
  }

  // Check if file has at least one visual element
  if (!hasVisualElements(content)) {
    errors.push('Missing visual element (image, mermaid diagram, etc.)');
  }

  return errors;
}

// Recursive function to get all MDX files in a directory
function getMdxFiles(dir) {
  let results = [];

  const items = fs.readdirSync(dir);

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      results = results.concat(getMdxFiles(fullPath));
    } else if (isMdxFile(item)) {
      results.push(fullPath);
    }
  }

  return results;
}

// Main validation function
function main() {
  console.log('Validating MDX files...\n');

  const mdxFiles = getMdxFiles(docsDir);
  let totalErrors = 0;

  for (const file of mdxFiles) {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const errors = validateMdxFile(file);

    if (errors.length > 0) {
      console.log(`❌ ${relativePath}`);
      for (const error of errors) {
        console.log(`   - ${error}`);
      }
      totalErrors += errors.length;
    } else {
      console.log(`✅ ${relativePath}`);
    }
  }

  console.log(`\nValidation complete. Found ${totalErrors} error(s) in ${mdxFiles.length} file(s).`);

  if (totalErrors > 0) {
    process.exit(1);
  } else {
    console.log('All MDX files passed validation!');
  }
}

// Run the validation
main();