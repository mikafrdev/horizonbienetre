import "../../styles/LegalPage.css";

export default function CGV() {
   return (
      <main className="legal-page">
         <h1>Conditions Générales de Vente (CGV)</h1>

         <section>
            <h2>1. Prestations proposées</h2>
            <p>
               Les prestations sont disponibles sur rendez-vous, en cabine, à
               domicile ou en entreprise. Les descriptions et tarifs sont
               indiqués sur la page dédiée.
            </p>
         </section>

         <section>
            <h2>2. Prise de rendez-vous</h2>
            <p>
               Les rendez-vous peuvent être pris par téléphone, email ou via le
               formulaire de contact. Tout rendez-vous non honoré sans
               annulation 24h à l'avance pourra être facturé.
            </p>
         </section>

         <section>
            <h2>3. Paiement</h2>
            <p>
               Le paiement s’effectue le jour de la prestation, en espèces, par
               virement ou autre moyen convenu à l’avance. Une facture peut être
               fournie sur demande.
            </p>
         </section>

         <section>
            <h2>4. Droit de rétractation</h2>
            <p>
               Conformément à l’article L221-28 du Code de la consommation, les
               prestations de services « sur rendez-vous » ne sont pas soumises
               au droit de rétractation dès lors qu’elles sont entièrement
               exécutées.
            </p>
         </section>

         <section>
            <h2>5. Litiges</h2>
            <p>
               En cas de litige, une solution amiable sera recherchée. Si aucun
               accord n’est trouvé, le client peut contacter le médiateur de la
               consommation référent ou porter plainte auprès des juridictions
               compétentes.
            </p>
         </section>
      </main>
   );
}
