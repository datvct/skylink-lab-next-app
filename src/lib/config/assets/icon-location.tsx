interface IconLocationProps {
  className?: string
  strokeColor?: string // New prop to accept custom color
}

export const IconLocation = ({ className, strokeColor = "white" }: IconLocationProps) => {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15 22.0001C14.7348 22.0001 14.4804 21.8948 14.2929 21.7073C14.1054 21.5197 14 21.2654 14 21.0001V17.0001C14 16.8356 14.0406 16.6735 14.1182 16.5284C14.1958 16.3832 14.3081 16.2595 14.445 16.1681L17.445 14.1681C17.6093 14.0585 17.8025 14 18 14C18.1975 14 18.3907 14.0585 18.555 14.1681L21.555 16.1681C21.6919 16.2595 21.8042 16.3832 21.8818 16.5284C21.9594 16.6735 22 16.8356 22 17.0001V21.0001C22 21.2654 21.8946 21.5197 21.7071 21.7073C21.5196 21.8948 21.2652 22.0001 21 22.0001H15Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 10C18 7.87827 17.1571 5.84344 15.6569 4.34315C14.1566 2.84285 12.1217 2 10 2C7.87827 2 5.84344 2.84285 4.34315 4.34315C2.84285 5.84344 2 7.87827 2 10C2 14.993 7.539 20.193 9.399 21.799C9.57237 21.929 9.78329 21.9992 10 21.999"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M18 22V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M10 13C11.6569 13 13 11.6569 13 10C13 8.34315 11.6569 7 10 7C8.34315 7 7 8.34315 7 10C7 11.6569 8.34315 13 10 13Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
