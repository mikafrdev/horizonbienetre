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
                  Nom : Béatrice Devos
                  <br />
                  Statut : Auto-entrepreneur
                  <br />
                  Adresse : 43 bis rue Claude Bernard Tourcoing
                  <br />
                  Téléphone : 06 21 03 77 44
                  <br />
                  Adresse email : horizonbienetre5@gmail.com
                  <br />
                  Numéro SIRET : 889 407 821 00012
                  <br />
                  RCS / RM : Nord Pas de Calais
                  <br />
                  Responsable de la publication : Devos
               </p>
            </section>
            <section>
               <h2>Activité</h2>
               <p>
                  Activité Prestations de massages de bien-être à visée non
                  thérapeutique et soins énergétiques. Les massages proposés ne
                  sont ni médicaux, ni sexuels, et ne remplacent en aucun cas un
                  traitement médical. Ils s’inscrivent exclusivement dans une
                  démarche de relaxation et de bien-être.
               </p>
            </section>

            <section>
               <h2>Hébergement du site</h2>
               <p>
                  Nom de l’hébergeur : O2switch
                  <br />
                  Adresse : Chemin des Padiaux – 63000 Clermont-Ferrand
                  <br />
                  Téléphone : 04 44 44 60 40
                  <br />
                  Site Web : https://horizonbienetre.fr
               </p>
            </section>

            <section>
               <h2>Propriété intellectuelle</h2>
               <p>
                  Le contenu de ce site (textes, images, graphismes, logo…) est
                  protégé par le droit de la propriété intellectuelle.
                  <br />
                  Toute reproduction ou représentation totale ou partielle sans
                  autorisation préalable est interdite.
               </p>
            </section>
         </main>
      </>
   );
}
