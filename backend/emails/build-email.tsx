import React from 'react';
import { render } from '@react-email/render';
import { EmailAutoResponse } from './src/email-auto-response.js';
import fs from 'fs/promises';
import path from 'path';

async function buildEmail() {
  try {
    // Si render() renvoie une Promise, on await, sinon c’est direct.
    const html = await render(<EmailAutoResponse verificationCode="{{code}}" />);
    
    // Crée le dossier dist s'il n'existe pas
    await fs.mkdir(path.resolve('./emails/dist'), { recursive: true });
    
    // Écrit le fichier HTML généré
    await fs.writeFile(path.resolve('./emails/dist/email-auto-response.html'), html);
    
    console.log('Email généré dans emails/dist/email-auto-response.html');
  } catch (error) {
    console.error('Erreur lors de la génération de l’email :', error);
  }
}

buildEmail();
