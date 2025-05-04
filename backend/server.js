const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const fs = require("fs");
const { console } = require("inspector");

const rawEnv = process.env.NODE_ENV;
const NODE_ENV = rawEnv ? rawEnv.trim() : "";

if (typeof PhusionPassenger !== "undefined") {
    PhusionPassenger.configure({ autoInstall: false });
}

const envFilePath =
    NODE_ENV === "dev"
        ? path.resolve(__dirname, ".env.development")
        : path.resolve(__dirname, ".env.production");
dotenv.config({ path: envFilePath });

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");

const allowedOrigins = [
    "http://localhost:5173",
    "http://localhost:3000",
    "https://dev.horizonbienetre.fr",
    "https://horizonbienetre.fr"
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

const frontendDistPath = path.resolve(__dirname, "dist");

const indexPath = path.join(frontendDistPath, "index.html");

// 👉 Servir le frontend buildé si SERVE_REACT est activé
if (NODE_ENV === "dev") {
    console.log("🛑 React n'est pas servi par Express en mode développement.");
} else {
    // Vérifier si le dossier de build existe
    if (fs.existsSync(frontendDistPath)) {
        app.use(express.static(frontendDistPath));
        console.log(`✅ Frontend React servi depuis : ${frontendDistPath}`);
    } else {
        console.warn(
            "⚠️ Le dossier dist est introuvable. Assurez-vous d'avoir exécuté `npm run build` pour le frontend."
        );
    }
}

app.get("/api/hello", (req, res) => {
    res.json({ hello: "✅ backend /api/hello" });
});

app.get("/api/user", (req, res) => {
    const fakeUser = {
        id: 1,
        name: "Jean Dupont",
        email: "jean.dupont@example.com",
    };
    res.json(fakeUser);
});

app.get("/api/test", (req, res) => {
    res.json({
        test: `✅ backend /api/hello - frontendDistPath, ${frontendDistPath}`,
    });
});

if (NODE_ENV === "dev") {
    app.get("/{*splat}", async (req, res) => {
        res.send("Route non trouvée : /{*splat}");
    });
} else {
    app.get("/{*splat}", async (req, res) => {
        res.sendFile(indexPath, (err) => {
            if (err) {
                console.error(
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
    console.log(`✅ Serveur backend démarré sur PhusionPassenger`);
} else {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`✅ Serveur backend démarré sur http://localhost:${PORT}`);
    });
}
