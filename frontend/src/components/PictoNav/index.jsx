export default function PictoNav({ strokeColor, onClick }) {
   return (
      <div
         role="button"
         tabIndex={0}
         onClick={onClick}
         onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
               onClick();
            }
         }}
         style={{ cursor: "pointer", display: "inline-block" }}
      >
         <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            stroke={strokeColor}
         >
            <path
               d="M4 6H20M4 12H20M4 18H20"
               stroke={strokeColor}
               strokeWidth="2"
               strokeLinecap="round"
               strokeLinejoin="round"
            />
         </svg>
      </div>
   );
}
