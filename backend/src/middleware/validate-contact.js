export default function validateContact(req, res, next) {
   const { firstName, lastName, email, message } = req.body;

   if (!firstName || !lastName || !email || !message) {
      return res.status(400).json({
         success: false,
         message: "Tous les champs sont requis.",
      });
   }

   next();
}
