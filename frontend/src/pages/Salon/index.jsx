import SEOMetaData from "../../components/SeoMetaData";
import metaData from "../../data/metadata.json";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ResponsiveImage from "../../utils/ResponsiveImage";
import ImgBea from "../../assets/Bea-photo-contours.png";
import imagesData from "../../data/images-salon.json";
import "./style.css";

export default function Salon() {
   return (
      <>
         <SEOMetaData metadata={metaData.home} />
         <main className="main-content">
            <section className="section-presentation salon">
               <h1>Le salon</h1>
            </section>
            <section className="section-salon">
               <h2>
                  Offrez-vous une expérience unique de bien-être et d’harmonie.
               </h2>

               <div className="salon-description">
                  <div className="salon-img">
                     <img src={ImgBea} alt="Salon Horizon Bien Être" />
                  </div>
                  <div className="salon-text">
                     <p>
                        Mon objectif est de vous proposer un véritable voyage
                        sensoriel et revitalisant, adapté à vos besoins. Que
                        vous recherchiez une détente profonde, un soulagement du
                        stress, une libération des blocages énergétiques ou une
                        reconnexion avec votre essence intérieure, je mets à
                        votre service mon savoir-faire et des techniques variée
                        pour vous accompagner vers un mieux-être durable.
                     </p>
                     <p>
                        Tous mes soins sont réalisés avec des produits bio et
                        naturels, respectueux de votre peau et de votre énergie,
                        pour une expérience authentique et bienfaisante.
                     </p>
                     <p>
                        Prenez le temps de vous recentrer et laissez-vous porter
                        par des instants de pure relaxation.
                     </p>
                  </div>
               </div>
            </section>
            <section className="section-salon-gallery">
               <Box>
                  <ImageList variant="masonry" gap={1}>
                     {imagesData.map((imageData) => (
                        <ImageListItem key={imageData.img}>
                           <ResponsiveImage
                              imageData={imageData}
                              imageFormats={["webp", "jpeg"]}
                           />
                        </ImageListItem>
                     ))}
                  </ImageList>
               </Box>
            </section>
         </main>
      </>
   );
}
