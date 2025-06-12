import express from 'express';
import EmailRoutes from './routes/email.routes.js';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';
import { console as inspectorConsole } from "inspector";
import { fileURLToPath } from 'url';

// Pour ESM (__dirname equivalent)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawEnv = process.env.NODE_ENV;
const NODE_ENV = rawEnv ? rawEnv.trim() : "";

if (typeof PhusionPassenger !== "undefined") {
   PhusionPassenger.configure({ autoInstall: false });
}

const envFilePath =
   NODE_ENV === "dev"
      ? path.resolve(__dirname, ".env.development")
      : path.resolve(__dirname, ".env");
dotenv.config({ path: envFilePath });

const app = express();
const PORT = process.env.PORT || 3000;

import cors from 'cors';

const allowedOrigins = [
   "http://localhost:5173",
   "http://localhost:3000",
   "https://dev.horizonbienetre.fr",
   "https://horizonbienetre.fr",
   "http://localhost:5000/send-email",
];

const corsOptions = {
   origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
         callback(null, true);
      } else {
         callback(new Error("Not allowed by CORS"));
      }
   },
   methods: "GET,POST,PUT,DELETE",
   allowedHeaders: "Content-Type,Authorization",
};

app.use(cors(corsOptions));
app.use(express.json());
let frontendDistPath = path.resolve(__dirname, "../../frontend/");

// 👉 Servir le frontend buildé si SERVE_REACT est activé
if (NODE_ENV === "dev") {
   inspectorConsole.log("🛑 React n'est pas servi par Express en mode développement.");
} else {
   frontendDistPath = path.resolve(__dirname, "../frontend");
   if (fs.existsSync(frontendDistPath)) {
      app.use(express.static(frontendDistPath));
      inspectorConsole.log(`✅ Frontend React servi depuis : ${frontendDistPath}`);
   } else {
      inspectorConsole.warn(
         "⚠️ Le dossier dist est introuvable. Assurez-vous d'avoir exécuté `npm run build` pour le frontend."
      );
   }
}

const indexPath = path.join(frontendDistPath, "index.html");
app.get("/", (req, res) => {
   res.sendFile(indexPath, (err) => {
      if (err) {
         inspectorConsole.error(
            "Erreur lors de l'envoi du fichier index.html :",
            err
         );
         res.status(500).send(
            "Erreur serveur lors du chargement de la page."
         );
      }
   });
});

app.get("/api/test", (req, res) => {
   res.json({
      test: `✅ backend /api/test - frontendDistPath, ${indexPath}`,
      frontendDistPath,
      indexPath,
      filename: `${__filename}`,
      dirname: `${__dirname}`,
      existe: fs.existsSync(frontendDistPath),
      
   });
});

app.use('/api/email', EmailRoutes);

if (NODE_ENV === "dev") {
   app.get("/*splat", (req, res) => {
      res.send("Route non trouvée : *");
   });
} else {
   app.get("/*splat", (req, res) => {
      res.sendFile(indexPath, (err) => {
         if (err) {
            inspectorConsole.error(
               "Erreur lors de l'envoi du fichier index.html :",
               err
            );
            res.status(500).send(
               "Erreur serveur lors du chargement de la page."
            );
         }
      });
   });
}

// Démarrage du serveur
if (typeof PhusionPassenger !== "undefined") {
   app.listen("passenger");
   inspectorConsole.log(`✅ Serveur backend démarré sur PhusionPassenger`);
} else {
   const PORT = process.env.PORT || 3000;
   app.listen(PORT, () => {
      inspectorConsole.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
   });
}
