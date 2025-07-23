import "./style.css";

export default function Prestations({ data, title }) {
   const images = import.meta.glob("../../assets/*", {
      eager: true,
      query: "?url",
      import: "default",
   });

   return (
      <section className="section-prestations">
         {title && <h2 className="title">{title}</h2>}
         <div className="container_cards">
            {data.map((item, index) => {
               const imageUrl =
                  images[`../../assets/${item.img}`] ||
                  images["../../assets/default.jpg"];

               return (
                  <div className="card ombre" key={index}>
                     <img src={imageUrl} alt={item.title} />
                     <h3>{item.title}</h3>
                     <p>{item.text}</p>
                     <span>{item.prix}</span>
                  </div>
               );
            })}
         </div>
      </section>
   );
}
