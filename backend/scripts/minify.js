import fs from "fs";
import path from "path";
import { minify } from "terser";

const distDir = path.resolve("dist");

async function minifyFile(filePath) {
  const code = fs.readFileSync(filePath, "utf-8");
  const result = await minify(code, {
    compress: true,
    mangle: true,
  });
  if (!result.code) {
    throw new Error(`Erreur lors de la minification de ${filePath}`);
  }

  const newFilePath = filePath.replace(/\.js$/, ".cjs");

  // Écrire le fichier minifié avec extension .cjs
  fs.writeFileSync(newFilePath, result.code);

  // Supprimer l’ancien fichier .js
  fs.unlinkSync(filePath);

  console.log(`Minified ${filePath} -> ${newFilePath}`);
}

function walk(dir) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      walk(fullPath);
    } else if (file.isFile() && fullPath.endsWith(".js")) {
      minifyFile(fullPath).catch(console.error);
    }
  }
}

walk(distDir);
