import express from "express";
import EmailRoutes from "./routes/email.routes.js";
import dotenv from "dotenv";
import path from "path";
import fs from "fs";
import { console as inspectorConsole } from "inspector";
import { fileURLToPath } from "url";

// Pour ESM (__dirname equivalent)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rawEnv = process.env.NODE_ENV;
const NODE_ENV = rawEnv ? rawEnv.trim() : "";

console.log("NODE_ENV =", NODE_ENV);

if (typeof PhusionPassenger !== "undefined") {
   PhusionPassenger.configure({ autoInstall: false });
}

const envFilePath =
   NODE_ENV === "dev"
      ? path.resolve(__dirname, "../.env.development")
      : path.resolve(__dirname, "../.env");
const result = dotenv.config({ path: envFilePath });

if (result.error) {
   console.error("❌ Erreur chargement .env :", result.error);
} else {
   console.log("✅ Variables chargées depuis :", envFilePath);
}

console.log("Variables d'environnement => ");
console.log("API_URL =", process.env.API_URL);
console.log("🔍 Fichier .env utilisé ", envFilePath);
console.log("ISPRODLOCAL =", process.env.ISPRODLOCAL);
console.log("SMTP_CONTACT_HOST =", process.env.SMTP_CONTACT_HOST);
console.log("SMTP_CONTACT_PORT =", process.env.SMTP_CONTACT_PORT);
console.log("EMAIL_CONTACT_USER =", process.env.EMAIL_CONTACT_USER);

const app = express();
const PORT = process.env.PORT || 3000;

import cors from "cors";

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
console.log("NODE_ENV =", process.env.NODE_ENV);

if (NODE_ENV === "dev") {
   inspectorConsole.log(
      "🛑 React n'est pas servi par Express en mode développement."
   );
} else {
   const isProdLocal = process.env.ISPRODLOCAL;

   if (isProdLocal) {
      // En production locale (http://localhost:3000/)
      frontendDistPath = path.resolve(__dirname, "../../build/frontend");
   } else {
      // En production sur l'hébergeur (https://horizonbienetre.fr/)
      frontendDistPath = path.resolve(__dirname, "../frontend");
   }

   if (fs.existsSync(frontendDistPath)) {
      app.use(express.static(frontendDistPath));
      inspectorConsole.log(
         `✅ Frontend React servi depuis : ${frontendDistPath}`
      );
   } else {
      inspectorConsole.warn(
         "⚠️ Le dossier dist est introuvable. Assurez-vous d'avoir exécuté `npm run build` pour le frontend."
      );
   }
}

const indexPath = path.join(frontendDistPath, "index.html");

app.use((req, res, next) => {
   res.setHeader("Cache-Control", "no-store");
   next();
});

app.get("/", (req, res) => {
   res.sendFile(indexPath, (err) => {
      if (err) {
         inspectorConsole.error(
            "Erreur lors de l'envoi du fichier index.html :",
            err
         );
         res.status(500).send("Erreur serveur lors du chargement de la page.");
      }
   });
});

app.get("/api/test", (req, res) => {
   res.json({
      test: `frontendDistPath :, ${indexPath}`,
      frontendDistPath,
      indexPath,
      filename: `${__filename}`,
      dirname: `${__dirname}`,
      existe: fs.existsSync(frontendDistPath),
      env: {
         NODE_ENV: NODE_ENV || "❌ non défini",
         API_URL: process.env.API_URL || "❌ non défini",
         SMTP_CONTACT_HOST: process.env.SMTP_CONTACT_HOST || "❌ non défini",
         SMTP_CONTACT_PORT: process.env.SMTP_CONTACT_PORT || "❌ non défini",
         EMAIL_CONTACT_USER: process.env.EMAIL_CONTACT_USER || "❌ non défini",
         EMAIL_CONTACT_PASS: process.env.EMAIL_CONTACT_PASS
            ? "✅ défini"
            : "❌ manquant",

         SMTP_AUTO_RESPONSE_HOST:
            process.env.SMTP_AUTO_RESPONSE_HOST || "❌ non défini",
         SMTP_AUTO_RESPONSE_PORT:
            process.env.SMTP_AUTO_RESPONSE_PORT || "❌ non défini",
         EMAIL_AUTO_RESPONSE_USER:
            process.env.EMAIL_AUTO_RESPONSE_USER || "❌ non défini",
         EMAIL_AUTO_RESPONSE_PASS: process.env.EMAIL_AUTO_RESPONSE_PASS
            ? "✅ défini"
            : "❌ manquant",
      },
   });
});

app.use("/api/email", EmailRoutes);

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
      inspectorConsole.log(
         `✅ Serveur backend démarré sur http://localhost:${PORT}`
      );
   });
}
