export const IFMT = ({ size }: { size?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size ?? "1em"}
    height={size ?? "1em"}
    viewBox="0 0 76 100"
  >
    <circle cx="14" cy="14" r="11" fill="#cd191e"></circle>
    <g fill="#2f9e41">
      <rect width="20" height="20" x="4" y="52" ry="2"></rect>
      <rect width="20" height="20" x="4" y="28" ry="2"></rect>
      <rect width="20" height="20" x="28" y="4" ry="2"></rect>
      <rect width="20" height="20" x="28" y="28" ry="2"></rect>
      <rect width="20" height="20" x="28" y="52" ry="2"></rect>
      <rect width="20" height="20" x="4" y="76" ry="2"></rect>
      <rect width="20" height="20" x="28" y="76" ry="2"></rect>
      <rect width="20" height="20" x="52" y="4" ry="2"></rect>
      <rect width="20" height="20" x="52" y="52" ry="2"></rect>
    </g>
  </svg>
);
