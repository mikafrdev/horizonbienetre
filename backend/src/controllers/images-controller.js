import imageService from "../services/images.service.js";

export const imagesController = async (req, res) => {
   console.log('************** processAllImages ✅')
   try {
      const processedImages = await imageService.processAllImages();
      res.status(200).json({
         message: "Images processed successfully",
         processedImages, // Retourne les chemins des images traitées
      });
   } catch (error) {
      res.status(500).json({
         error: "Failed to process images",
         details: error.message,
      });
   }
};
