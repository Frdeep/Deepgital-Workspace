type ColanodeLogoProps = React.HTMLAttributes<SVGElement>;

export const ColanodeLogo = (props: ColanodeLogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 60"
      width="100%"
      height="100%"
      fill="currentColor"
      {...props}
      style={{ ...props.style, fontFamily: "'Poppins', sans-serif" }}
    >
      <text x="5" y="45" fontSize="40" fontWeight="bold" fill="#6B1525">Deepgital.</text>
      <path
        fill="#F5F5DC"
        d="M 190 30 Q 195 30 195 25 Q 195 30 200 30 Q 195 30 195 35 Q 195 30 190 30 Z"
      />
    </svg>
  );
};
