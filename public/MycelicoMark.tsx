import type { SVGProps } from "react"

export const MycelicoMark = (props: SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M21 28C24.866 28 28 24.866 28 21C28 17.134 24.866 14 21 14C17.134 14 14 17.134 14 21C14 24.866 17.134 28 21 28Z"
            fill="#6a8c79"
            opacity="0.3"
        />
        <path
            d="M21 12C21 8.68629 23.6863 6 27 6C30.3137 6 33 8.68629 33 12C33 15.3137 30.3137 18 27 18"
            stroke="#6a8c79"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M21 12C21 8.68629 18.3137 6 15 6C11.6863 6 9 8.68629 9 12C9 15.3137 11.6863 18 15 18"
            stroke="#6a8c79"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M21 18V36"
            stroke="#8aa896"
            strokeWidth="2.5"
            strokeLinecap="round"
        />
        <path
            d="M18 36H24C25.1046 36 26 35.1046 26 34V32C26 30.8954 25.1046 30 24 30H18C16.8954 30 16 30.8954 16 32V34C16 35.1046 16.8954 36 18 36Z"
            fill="#b0c4b5"
        />
    </svg>
)
