import sharp from "sharp";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Fonction de redimensionnement et conversion pour une image spécifique
const resizeAndConvertImage = async (inputPath, imageName) => {
   console.log('************** resizeAndConvertImage ✅')
   const outputDir = path.join(__dirname, "../../public/images/converted");

   // Créer le dossier de sortie si nécessaire
   if (!fs.existsSync(outputDir)) {
      console.log("Création du dossier de sortie:", outputDir);
      fs.mkdirSync(outputDir, { recursive: true });
   }

   const sizes = [600, 800];
   const formats = ["jpg", "png", "webp"];

   const processedImages = [];

   // Pour chaque taille et format
   for (let size of sizes) {
      for (let format of formats) {
         const outputFileName = `${imageName}-${size}.${format}`;
         const outputPath = path.join(outputDir, outputFileName);

         try {
            console.log(`Traitement de l'image : ${inputPath} en ${size} px et format ${format}`);
            // Redimensionner l'image et convertir au format souhaité
            await sharp(inputPath)
               .resize(size)
               .toFormat(format, { quality: 80 })
               .toFile(outputPath);

            console.log(`Fichier généré : ${outputPath}`);
            processedImages.push(outputPath); // Ajoute le chemin de l'image traitée
         } catch (error) {
            console.error("Erreur lors du traitement de l'image :", error);
         }
      }
   }

   return processedImages;
};

// Traiter toutes les images dans le dossier public/images
const processAllImages = async () => {
   console.log('************** processAllImages ✅')
   const inputDir = path.join(__dirname, "../../public/images");
   const processedImages = [];

   // Lire tous les fichiers dans le dossier
   const files = fs.readdirSync(inputDir);

   // Parcourir chaque fichier du dossier
   for (let file of files) {
      console.log(`file : ${file}`);
      const filePath = path.join(inputDir, file);
      const fileExt = path.extname(file).toLowerCase();

      // Filtrer uniquement les fichiers d'images (jpg, jpeg, png, gif)
      if ([".jpg", ".jpeg", ".png", ".gif"].includes(fileExt)) {
         const imageName = path.basename(file, fileExt); // Nom de l'image sans extension
         try {
            const processed = await resizeAndConvertImage(filePath, imageName);
            processedImages.push(...processed); // Ajouter les images traitées à la liste
         } catch (error) {
            console.error("Erreur lors du traitement de l'image", file, ":", error);
         }
      }
   }

   return processedImages;
};

// Exporter la fonction pour l'utiliser dans d'autres fichiers
export default { processAllImages };
