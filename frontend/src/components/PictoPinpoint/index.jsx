export default function PictoPinpoint({ strokeColor, strokeWidth }) {

    return (
        <svg 
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg">
            <g id="SVGRepo_bgCarrier"></g>
            <g 
                id="SVGRepo_tracerCarrier" 
                strokeLinecap="round" 
                strokeLinejoin="round"></g>
                <g 
                    id="SVGRepo_iconCarrier"> 
                    <path fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M10 11.5C11.933 11.5 13.5 9.933 13.5 8C13.5 6.067 11.933 4.5 10 4.5C8.067 4.5 6.5 6.067 6.5 8C6.5 9.933 8.067 11.5 10 11.5ZM10 6.5C10.8284 6.5 11.5 7.17157 11.5 8C11.5 8.82843 10.8284 9.5 10 9.5C9.17157 9.5 8.5 8.82843 8.5 8C8.5 7.17157 9.17157 6.5 10 6.5Z" 
                        fill={strokeColor}></path> 
                    <path 
                        fillRule="evenodd" 
                        clipRule="evenodd" 
                        d="M2.5 8.12313C2.5 12.3656 6.88183 19.5 10 19.5C13.1182 19.5 17.5 12.3656 17.5 8.12313C17.5 3.91715 14.1464 0.5 10 0.5C5.85362 0.5 2.5 3.91715 2.5 8.12313ZM15.5 8.12313C15.5 11.4027 11.7551 17.5 10 17.5C8.24487 17.5 4.5 11.4027 4.5 8.12313C4.5 5.0134 6.96668 2.5 10 2.5C13.0333 2.5 15.5 5.0134 15.5 8.12313Z" 
                        fill={strokeColor}></path> 
                </g>
        </svg>
    );
}