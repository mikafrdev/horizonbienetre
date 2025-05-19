import { useEffect, useState } from "react";
import ContactInfos from "../../components/ContactInfos";
import FormContact from "../../components/FormContact";
import "./style.css";

export default function Tests() {
   /* const getUserdata = async () => {};  */
   /* let fetchUrl = "https://www.anapioficeandfire.com/api/books";
    fetchUrl = "http://localhost/phpmyadmin/";
    fetchUrl = "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=xml";
    */
   const [hello, setHello] = useState("");
   const [user, setUser] = useState("");
   const [test, setTest] = useState("");
   const [racine, setRacine] = useState("");
   const [contact, setContact] = useState("");
   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const API_URL = import.meta.env.VITE_API_URL;

   useEffect(() => {
      const fetchData = async () => {
         try {
            const res = await fetch(`${API_URL}/api/hello`);
            const data = await res.json();
            //console.log("*** TEST /api/hello data :", data);
            setHello(data.hello);
         } catch (error) {
            console.error("Erreur lors de la requête Hello :", error);
            setHello("🛑 Erreur api/hello");
         }
      };

      fetchData();

      const fetchUser = async () => {
         try {
            const res = await fetch(`${API_URL}/api/user`);
            const data = await res.json();
            //console.log("*** TEST /api/user data :", data);
            setUser(data);
         } catch (error) {
            console.error("Erreur lors de la requête user :", error);
            setUser("🛑Erreur api/user");
         }
      };

      fetchUser();

      const fetchTest = async () => {
         try {
            const res = await fetch(`${API_URL}/api/test`);
            const data = await res.json();
            console.log("*** TEST /api/test data :", data);
            setTest(data.test);
         } catch (error) {
            console.error("Erreur lors de la requête Test :", error);
            setTest("🛑 Erreur api/test");
         }
      };

      fetchTest();

      const fetchContact = async () => {
         try {
            const res = await fetch(`${API_URL}/api/contact`);
            const data = await res.json();
            console.log("*** TEST /api/contact data :", data);
            setContact(data);
         } catch (error) {
            console.error("Erreur lors de la requête Contact :", error);
            setContact("🛑 Erreur api/contact");
         }
      };

      fetchContact();

      const fetchRacine = async () => {
         try {
            const res = await fetch(`${API_URL}/`);
            const data = await res.json();
            console.log("*** TEST racine /:", data);
            setRacine(data.test);
         } catch (error) {
            console.error("Erreur lors de la requête Racine :", error);
            setTest("🛑 Erreur /");
         }
      };

      fetchRacine();
   }, []);

   if (!user) return <p>Chargement...</p>;

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = async (e) => {
      e.preventDefault();

      try {
         const response = await fetch("http://localhost:5000/send-email", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
         });

         const data = await response.json();
         if (data.success) {
            alert("Email envoyé !");
         } else {
            alert("Erreur : " + data.message);
         }
      } catch (err) {
         console.error("Erreur fetch :", err);
         alert("Erreur réseau ou serveur.");
      }
   };

   return (
      <main className="container_contact tests">
         <div className="illustration_contact">
            <h1>Nous contacter</h1>
         </div>

         <div>
            <p>{contact.success ? "Success" : "En attente api/contact ..."}</p>
            <p>{contact.message || "En attente api/contact ..."}</p>
         </div>

         <div className="container_light">
            <FormContact />
         </div>
         <div>
            <p className="">{racine || "En attente / ..."}</p>
            <p>{hello || "En attente api/hello ..."}</p>
            <div>
               <p>✅ Utilisateur</p>
               {user.error ? (
                  <p>{user.error}</p>
               ) : (
                  <>
                     <p>Nom : {user.name}</p>
                     <p>Email : {user.email}</p>
                  </>
               )}
            </div>
            <p>{test || "En attente api/test ..."}</p>
         </div>
      </main>
   );
}
