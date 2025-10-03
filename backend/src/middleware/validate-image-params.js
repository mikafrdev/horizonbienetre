const validateImageParams = (req, res, next) => {
   const { imagePath, width, height, format } = req.query;

   if (!imagePath || !fs.existsSync(`./public/images/${imagePath}`)) {
      return res.status(400).json({ error: "Image not found" });
   }

   if (width && isNaN(width)) {
      return res.status(400).json({ error: "Width must be a number" });
   }

   if (height && isNaN(height)) {
      return res.status(400).json({ error: "Height must be a number" });
   }

   if (format && !["jpeg", "png", "webp"].includes(format)) {
      return res
         .status(400)
         .json({ error: "Invalid format. Allowed formats: jpeg, png, webp" });
   }

   next(); // Si tout est valide, passer à la logique du contrôleur
};

export default validateImageParams;
