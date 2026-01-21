import SEOMetaData from "../../components/SeoMetaData";
import metaData from "../../data/metadata.json";
import "../../styles/LegalPage.css";

export default function MentionsLegales() {
   return (
      <>
         <SEOMetaData metadata={metaData["mentions-legales"]} />
         <main className="legal-page">
            <h1>Mentions légales</h1>

            <section>
               <h2>Éditeur du site</h2>
               <p>
                  Nom de l'entreprise : Nom ou prénom si micro-entreprise
                  <br />
                  Statut : Micro-entreprise
                  <br />
                  SIRET : 123 456 789 00000
                  <br />
                  Responsable de la publication : Ton nom
                  <br />
                  Adresse : 45 Rue Rue, 012345 Ville
                  <br />
                  Email : xxxxxxxxxxxx@gmail.com
                  <br />
                  Téléphone : [à renseigner]
               </p>
            </section>

            <section>
               <h2>Hébergement du site</h2>
               <p>
                  Nom de l’hébergeur : Exemple : OVH, Hostinger, etc.
                  <br />
                  Adresse : Adresse de l'hébergeur
                  <br />
                  Téléphone : Téléphone de l'hébergeur
               </p>
            </section>

            <section>
               <h2>Propriété intellectuelle</h2>
               <p>
                  Tous les contenus présents sur ce site (textes, images, logos,
                  etc.) sont la propriété exclusive de Nom de l’entreprise sauf
                  mention contraire.
                  <br />
                  Toute reproduction, distribution, modification ou utilisation
                  sans autorisation est interdite.
               </p>
            </section>
         </main>
      </>
   );
}
