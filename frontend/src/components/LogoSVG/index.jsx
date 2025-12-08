import "./style.css";
export default function Logo({ color, text, direction }) {
   const classes = `logo-container ${direction === "vertical" ? "logo-vertical" : ""}`;

   return (
      <>
         <div className={classes}>
            <svg
               viewBox="0 0 173 178"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
            >
               <circle
                  cx="50.25"
                  cy="77.25"
                  r="50"
                  fill={color}
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="59.25"
                  cy="125.25"
                  r="50"
                  fill={color}
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="109.25"
                  cy="127.25"
                  r="50"
                  fill={color}
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="122.25"
                  cy="75.25"
                  r="50"
                  fill={color}
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="85.25"
                  cy="50.25"
                  r="50"
                  fill={color}
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="50.25"
                  cy="77.25"
                  r="50"
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="59.25"
                  cy="125.25"
                  r="50"
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="109.25"
                  cy="127.25"
                  r="50"
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="122.25"
                  cy="75.25"
                  r="50"
                  stroke="white"
                  strokeWidth="1"
               />
               <circle
                  cx="85.25"
                  cy="50.25"
                  r="50"
                  stroke="white"
                  strokeWidth="1"
               />
            </svg>
            {text && (
               <div className="logo-baseline">
                  <span className="baseline-horizon">HORIZON</span>
                  <span className="baseline-bienetre">BIEN-ÊTRE</span>
               </div>
            )}
         </div>
      </>
   );
}
