export default function PictoNav({ fillColor, strokeColor }) {
    return (
        <svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill={fillColor} stroke={strokeColor}
        >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                    d="M4 6H20M4 12H20M4 18H20"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                ></path>{" "}
            </g>
        </svg>
    );
}
