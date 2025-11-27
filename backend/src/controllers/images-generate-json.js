import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Utilisation de fileURLToPath pour récupérer __dirname dans un environnement ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const imagesFolder = path.join(__dirname, "../../public/images/salon");
const outputFile = path.join(
   __dirname,
   "../../../frontend/src/data/images-salon.json"
);

export const generateImagesJson = async (req, res) => {
   try {
      console.log("Démarrage de la génération du JSON...");

      // Lire tous les fichiers du dossier images
      console.log(`Lecture des fichiers du dossier: ${imagesFolder}`);
      const files = await fs.readdir(imagesFolder);

      // Afficher les fichiers lus
      console.log(`Fichiers trouvés dans le dossier: ${files.length} fichiers`);
      console.log(files); // Affiche la liste des fichiers trouvés

      // Créer un tableau d'objets avec les informations des images
      const jsonData = files.map((file) => {
         const fileName = path.basename(file, path.extname(file));

         // Afficher le nom du fichier traité
         console.log(`Traitement du fichier: ${fileName}`);

         return {
            title: fileName,
            img: "/salon/" + fileName,
            text: `Description dynamique pour ${fileName}`,
            prix: "60 min - 50 €",
         };
      });

      // Afficher la taille de jsonData avant d'écrire dans le fichier
      console.log(`Nombre d'objets générés dans jsonData: ${jsonData.length}`);

      // Sauvegarder les données dans un fichier JSON
      console.log(`Écriture des données dans le fichier: ${outputFile}`);
      await fs.writeFile(
         outputFile,
         JSON.stringify(jsonData, null, 2),
         "utf-8"
      );

      console.log("Les données ont été écrites avec succès dans le fichier.");

      // Répondre à la requête avec les données générées
      res.json(jsonData);
   } catch (error) {
      console.error("Erreur lors de la génération du JSON", error);
      res.status(500).json({
         message: "Erreur serveur lors de la génération du JSON",
      });
   }
};
