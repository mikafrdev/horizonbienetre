import SEOMetaData from "../../components/SeoMetaData";
import metaData from "../../data/metadata.json";
import "../../styles/LegalPage.css";

export default function PolitiqueConfidentialite() {
   return (
      <>
         <SEOMetaData metadata={metaData.politique} />
         <main className="legal-page">
            <h1>Politique de confidentialité</h1>
            <h2>Utilisation des données</h2>
            <p>
               Ces données ne sont ni vendues, ni partagées à des tiers.
               <br />
               Elles sont conservées uniquement pendant le temps nécessaire au
               traitement de votre demande.
            </p>

            <h2>Collecte des données</h2>
            <p>
               Des données personnelles peuvent être collectées via : - les
               formulaires de contact et de prise de rendez-vous, - les cookies
               à des fins statistiques ou d’amélioration de l’expérience
               utilisateur. Les données ne sont utilisées que dans le cadre de
               la relation client, ne sont pas revendues, et sont traitées
               conformément au Règlement Général sur la Protection des Données
               (RGPD). Vous pouvez exercer vos droits (accès, rectification,
               suppression, opposition) en envoyant un email à :
               horizonbienetre5@gmail.com
            </p>

            <h2>Cookies</h2>
            <p>
               Le site peut utiliser des cookies pour améliorer l'expérience
               utilisateur (ex. : mesure d’audience). Vous pouvez les accepter
               ou les refuser via la bannière de consentement.
            </p>
         </main>
      </>
   );
}
