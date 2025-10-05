import "./style.css";

export default function Presentation({ classname, title, img }) {
   const imageSizes = [
      { size: 600, media: "(max-width: 600px)" },
      { size: 800, media: "(min-width: 601px) and (max-width: 800px)" },
   ];

   const imageFormats = ["webp", "jpg", "png"];

   {
      return (
         <section className={`section-presentation ${classname}`}>
            <picture className="presentation-img">
               {imageSizes.map(({ size, media }) =>
                  imageFormats.map((format) => (
                     <source
                        key={`${size}-${format}`}
                        srcSet={`${img}-${size}.${format}`}
                        media={media}
                        type={`image/${format}`}
                     />
                  ))
               )}

               <img
                  srcSet={`${img}-800.webp`}
                  alt={title}
                  loading="lazy"
                  sizes="(max-width: 600px) 100vw, (max-width: 800px) 80vw, (max-width: 1024px) 70vw, 50vw"
               />
            </picture>

            {title && <h1 className="text-overlay">{title}</h1>}
         </section>
      );
   }
}
