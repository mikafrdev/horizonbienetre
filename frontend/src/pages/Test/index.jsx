import Button from "@mui/material/Button";
import PictoCalendar from "../../components/PictoCalendar";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { useEffect, useState, useRef } from "react";
import { Collapse, Typography } from "@mui/material";
import LogoSVG from "../../components/LogoSVG";
import CookieConsentPopup from "../../components/CookieConsentPopup";
import "./style.css";

function ShowMore({ text, maxLength = 100 }) {
   const [isExpanded, setIsExpanded] = useState(false);

   const handleToggle = () => {
      setIsExpanded((prevState) => !prevState);
   };

   const truncatedText = text.slice(0, maxLength);

   return (
      <div>
         <div>
            <Collapse in={isExpanded} timeout="auto">
               <div>{text}</div>
            </Collapse>
            {!isExpanded && <div>{truncatedText}...</div>}
         </div>

         {text.length > maxLength && (
            <Button onClick={handleToggle} sx={{ marginTop: 1 }}>
               {isExpanded ? "Show less" : "Show more"}
            </Button>
         )}
      </div>
   );
}

export default function Test() {
   const [data, setData] = useState(null);
   const preRef = useRef(null);

   useEffect(() => {
      fetch("/api/test")
         .then((res) => res.json())
         .then((json) => {
            console.log("✅ API Test :", json);
            setData(json);
         })
         .catch((err) => {
            console.error("❌ Erreur API :", err);
         });
   }, []);

   const handleCopy = () => {
      if (preRef.current) {
         navigator.clipboard.writeText(preRef.current.textContent);
      }
   };

   return (
      <main className="main-content">
         <section className="section-test">
            <h1>Cookies</h1>

            <CookieConsentPopup />
         </section>

         <section className="section-test">
            <h1>TESTS</h1>

            <LogoSVG color="#8fc3d3" text="true" />

            <h2>Logo - stroke="white" id="path1"</h2>
            <LogoSVG color="#157CA4" text="true" />
            <br />
            <LogoSVG color="#8fc3d3" text="true" />
            <br />
            <LogoSVG color="red" text="true" />
            <br />
            <LogoSVG color="#157CA4" />
            <br />
            <LogoSVG color="#157CA4" text="true" direction="vertical" />

            <h2>Show more</h2>
            <ShowMore
               text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, nihil minus ullam dolore dicta atque, repellat dolorem itaque corporis omnis eligendi fugiat maiores fugit temporibus praesentium, quibusdam cum et facilis?
                  Dolor sit laudantium cupiditate ipsa, deserunt quaerat quibusdam accusantium doloribus perspiciatis sed rem eum, dolores eligendi eaque, sint nam corporis reiciendis ab eius. Aliquid unde temporibus voluptate ratione, ex consequatur!
                  Aspernatur cum beatae quaerat architecto temporibus facilis nostrum accusantium sit, aliquid ipsa cupiditate numquam quos odit. Quasi inventore perspiciatis eveniet? Molestias repellendus magni doloremque minima animi recusandae, nulla vel laborum!
                  Odit harum, sint itaque aut cum numquam ipsum molestiae doloremque veritatis necessitatibus rem quasi dignissimos incidunt fugiat recusandae voluptate excepturi, eum et similique soluta quisquam a! Sed cumque iure quod!
                  Illo deleniti blanditiis dolorum velit repellat, quia quam voluptas unde aliquam nisi corrupti saepe quaerat eius cupiditate quisquam, in iste impedit excepturi quibusdam et! Reiciendis minima praesentium debitis at nemo!
                  Illo consectetur adipisci omnis atque quam modi, qui natus! Cupiditate ipsum laborum ut repudiandae enim vero tenetur nisi, repellendus autem quis unde, nesciunt perferendis impedit ex earum amet reprehenderit dolore?
                  Repudiandae optio, obcaecati voluptas odio quis laudantium hic eos corporis omnis accusamus soluta illum officiis sint sapiente consequatur ut facere perspiciatis deleniti nemo. Corporis possimus perferendis quae recusandae rerum ullam!
                  Dolores quaerat natus voluptatem culpa soluta sed vero hic repellendus deserunt mollitia esse eaque, exercitationem quis error rem vel. Facilis minima quisquam veniam, neque deleniti veritatis cum doloribus enim. Ipsam!
                  Aliquid perspiciatis ea totam hic consequuntur quas asperiores corrupti? Quo necessitatibus tenetur iusto commodi autem. Ea quibusdam similique deserunt, molestias distinctio quam beatae culpa minima ratione, necessitatibus dolorem placeat labore?
                  Cupiditate magnam eaque cum mollitia optio, debitis aspernatur corporis, nisi tenetur nemo, maiores odit libero. Possimus laboriosam dicta accusamus porro magnam quae. Adipisci eaque porro, aspernatur sunt officiis corrupti corporis.
                  Earum molestiae t tempore"
               maxLength={300}
            />

            <h2>Float moderne</h2>
            <div className="test-container">
               <div className="test-container-img">
                  <picture>
                     <img
                        src="Formule-bougie-serviette-lumiere-tamisee-800.webp"
                        alt="Formule Douceur – 1h d’harmonie"
                     />
                  </picture>
                  <p>
                     Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Nostrum, nihil minus ullam dolore dicta atque, repellat
                     dolorem itaque corporis omnis eligendi fugiat maiores fugit
                     temporibus praesentium, quibusdam cum et facilis? Dolor sit
                     laudantium cupiditate ipsa, deserunt quaerat quibusdam
                     accusantium doloribus perspiciatis sed rem eum, dolores
                     eligendi eaque, sint nam corporis reiciendis ab eius.
                     Aliquid unde temporibus voluptate ratione, ex consequatur!
                     Aspernatur cum beatae quaerat architecto temporibus facilis
                     nostrum accusantium sit, aliquid ipsa cupiditate numquam
                     quos odit. Quasi inventore perspiciatis eveniet? Molestias
                     repellendus magni doloremque minima animi recusandae, nulla
                     vel laborum! Odit harum, sint itaque aut cum numquam ipsum
                     molestiae doloremque veritatis necessitatibus rem quasi
                     dignissimos incidunt fugiat recusandae voluptate excepturi,
                     eum et similique soluta quisquam a! Sed cumque iure quod!
                     Illo deleniti blanditiis dolorum velit repellat, quia quam
                     voluptas unde aliquam nisi corrupti saepe quaerat eius
                     cupiditate quisquam, in iste impedit excepturi quibusdam
                     et! Reiciendis minima praesentium debitis at nemo! Illo
                     consectetur adipisci omnis atque quam modi, qui natus!
                     Cupiditate ipsum laborum ut repudiandae enim vero tenetur
                     nisi, repellendus autem quis unde, nesciunt perferendis
                     impedit ex earum amet reprehenderit dolore? Repudiandae
                     optio, obcaecati voluptas odio quis laudantium hic eos
                     corporis omnis accusamus soluta illum officiis sint
                     sapiente consequatur ut facere perspiciatis deleniti nemo.
                     Corporis possimus perferendis quae recusandae rerum ullam!
                     Dolores quaerat natus voluptatem culpa soluta sed vero hic
                     repellendus deserunt mollitia esse eaque, exercitationem
                     quis error rem vel. Facilis minima quisquam veniam, neque
                     deleniti veritatis cum doloribus enim. Ipsam! Aliquid
                     perspiciatis ea totam hic consequuntur quas asperiores
                     corrupti? Quo necessitatibus tenetur iusto commodi autem.
                     Ea quibusdam similique deserunt, molestias distinctio quam
                     beatae culpa minima ratione, necessitatibus dolorem placeat
                     labore? Cupiditate magnam eaque cum mollitia optio, debitis
                     aspernatur corporis, nisi tenetur nemo, maiores odit
                     libero. Possimus laboriosam dicta accusamus porro magnam
                     quae. Adipisci eaque porro, aspernatur sunt officiis
                     corrupti corporis. Earum molestiae t tempore earum aliquam
                     nisi neque quis error, architecto laboriosam doloribus
                     totam laudantium eum voluptate necessitatibus aliquid at ex
                     explicabo quisquam ullam recusandae aspernatur suscipit
                     quidem! Eos autem nobis voluptas. Sapiente, delectus quo
                     quaerat vel quibusdam debitis! Sequi, deleniti nobis, eaque
                     nihil quidem ducimus quo exercitationem natus quas aliquam,
                     quod labore laudantium. Repellendus nobis distinctio, harum
                     dolores officia eaque mollitia?
                  </p>
               </div>
               <div className="test-clear"></div>
            </div>

            <h2>Résultat de /api/test</h2>
            <div className="variables">
               {data ? (
                  <pre onClick={handleCopy} ref={preRef}>
                     {JSON.stringify(data, null, 2)}
                  </pre>
               ) : (
                  <p>Chargement...</p>
               )}
            </div>
            <h2>Boutons</h2>
            <Button
               component="a"
               className="cta-resalib"
               startIcon={<PictoCalendar />}
               href="https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing#top"
               target="_blank"
               rel="noopener noreferrer"
            >
               <span className="cta-text">Prendre RDV</span>
            </Button>
            <Button
               component="a"
               className="cta-resalib-b"
               endIcon={<OpenInNewIcon />}
               href="https://www.resalib.fr/praticien/108707-horizon-bien-etre-centre-de-bien-etre-tourcoing#top"
               target="_blank"
               rel="noopener noreferrer"
            >
               <span className="cta-text">Prendre RDV avec Résalib</span>
            </Button>

            <a
               href="https://autresite.com"
               target="_blank"
               rel="noopener noreferrer"
               className="button-externe"
            >
               Visiter Autre Site
               <OpenInNewIcon fontSize="small" style={{ marginLeft: "6px" }} />
            </a>
         </section>
      </main>
   );
}
