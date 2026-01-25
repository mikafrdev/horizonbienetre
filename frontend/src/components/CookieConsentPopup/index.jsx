// src/App.jsx
import React from "react";
import CookieConsent from "react-cookie-consent";

const App = () => {
   const handleDecline = () => {
      localStorage.setItem("cookies_accepted", "false");
      console.log("Cookies refusés");
   };
   return (
      <div>
         <h1>Bienvenue sur Horizon Bien-être</h1>
         <p>Voici le contenu du site...</p>

         {/* Cookie consent banner */}
         <CookieConsent
            location="bottom"
            buttonText="J'accepte"
            cookieName="cookies_accepted"
            style={{ background: "#2B373B" }}
            buttonStyle={{
               background: "#4CAF50",
               color: "#fff",
               fontSize: "16px",
               borderRadius: "5px",
               padding: "10px 20px",
            }}
            expires={365} // 1 an d'expiration
            onAccept={() => console.log("Cookies acceptés")}
            onDecline={() => handleDecline()}
         >
            Ce site utilise des cookies pour améliorer votre expérience. En
            poursuivant votre navigation, vous acceptez l'utilisation des
            cookies.
         </CookieConsent>
      </div>
   );
};

export default App;
