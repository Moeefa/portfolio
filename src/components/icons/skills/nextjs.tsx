export const NextJS = ({ size }: { size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    width={size ?? "1em"}
    height={size ?? "1em"}
    viewBox="0 0 100 100"
  >
    <mask
      id="a"
      width="100"
      height="100"
      x="0"
      y="0"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "alpha" }}
    >
      <circle cx="50" cy="50" r="50" fill="#000"></circle>
    </mask>
    <g mask="url(#a)">
      <circle cx="50" cy="50" r="50" fill="#000"></circle>
      <path
        fill="url(#b)"
        d="M83.06 87.511L38.412 30H30v39.983h6.73V38.546l41.047 53.035a50.205 50.205 0 005.283-4.07z"
      ></path>
      <path fill="url(#c)" d="M63.889 30h6.667v40h-6.667z"></path>
    </g>
    <defs>
      <linearGradient
        id="b"
        x1="60.556"
        x2="80.278"
        y1="64.722"
        y2="89.167"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
      <linearGradient
        id="c"
        x1="67.222"
        x2="67.111"
        y1="30"
        y2="59.375"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#fff"></stop>
        <stop offset="1" stopColor="#fff" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
  </svg>
);
