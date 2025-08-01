import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import dataOpinions from "../../data/opinions.json";
import PictoStar from "../PictoStar";
import "./style.css";

export default function Opinions() {
   const renderStars = (note) =>
      Array.from({ length: 5 }, (_, i) => (
         <li key={i}>
            <PictoStar
               fillColor={i < note ? "#8FC3D3" : "#FFF"}
               strokeColor="#8FC3D3"
            />
         </li>
      ));

   return (
      <section className="opinions">
         <h2>Témoignages</h2>

         <div className="opinions-slider">
            <Swiper
               modules={[Navigation, Pagination]}
               navigation
               pagination={{ clickable: true }}
               loop={true}
               breakpoints={{
                  0: { slidesPerView: 1 },
                  1440: { slidesPerView: 3 },
               }}
            >
               {dataOpinions.map((item, index) => (
                  <SwiperSlide key={index}>
                     <div className="opinion-card">
                        <div className="opinion_stars_date">
                           <ul className="opinion_stars">
                              {renderStars(item.note)}
                           </ul>
                           <div className="opinion_date">{item.date}</div>
                        </div>
                        <p className="opinion_name">{item.name}</p>
                        <p className="opinion_text">{item.opinion}</p>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </section>
   );
}
