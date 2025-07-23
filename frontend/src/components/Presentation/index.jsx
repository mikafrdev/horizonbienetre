import "./style.css";

export default function Presentation({ title, className }) {
   return (
      <div className={`presentation ${className}`}>
         {title && (
            <div className="presentation-title">
               <h1>{title}</h1>
            </div>
         )}
      </div>
   );
}
