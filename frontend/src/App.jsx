import { useEffect, useState } from "react";

function App() {
   const [user, setUser] = useState("");
   const [test, setTest] = useState("");

   const API_URL = import.meta.env.VITE_API_URL;

   useEffect(() => {
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
   }, []);

   if (!user) return <p>Chargement...</p>;

   return (
      <>
         <h1>Test O2switch Frontend Backend</h1>
         <div>
            <p>{test || "En attente api/test ..."}</p>
         </div>
      </>
   );
}

export default App;
