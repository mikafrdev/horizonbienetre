import React from 'react';
import { render } from '@react-email/render';
import { EmailAutoResponse } from './src/email-auto-response.jsx';
import { writeFile, mkdir } from 'fs/promises';
import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

// 🔧 Résolution de chemin absolu compatible ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// 📄 Chemin de sortie du fichier HTML
const outputPath = resolve(__dirname, 'dist', 'email-auto-response.html');

// 💡 Génère le HTML depuis le composant React
const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
const html = render(<EmailAutoResponse verificationCode={verificationCode} />, {
  pretty: true, // optionnel : pour un HTML lisible
});

// 📁 Crée le dossier dist si nécessaire
await mkdir(dirname(outputPath), { recursive: true });

// 💾 Écrit le HTML dans un fichier
await writeFile(outputPath, html, 'utf-8');

console.log(`✅ Email HTML généré : ${outputPath} (code : ${verificationCode})`);