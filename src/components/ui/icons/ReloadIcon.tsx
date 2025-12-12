export default function ReloadIcon({
  size = 12,
  color = '#757575',
}: { size?: number; color?: string } = {}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M8.97583 3.72838L8.64887 3.40142C7.20425 1.9568 4.86206 1.9568 3.41745 3.40142C1.97283 4.84604 1.97283 7.18822 3.41745 8.63284C4.86206 10.0775 7.20425 10.0775 8.64887 8.63284C9.48896 7.79275 9.84051 6.64911 9.70352 5.55497M8.97583 3.72838H7.01405M8.97583 3.72838V1.7666"
        stroke={color}
        strokeWidth="0.693595"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
