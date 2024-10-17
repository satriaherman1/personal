type Props = {
  className?: string;
  width?: string | number;
  height?: string | number;
};

export default function DecoratorRight({
  className,
  width = "327",
  height = "654",
}: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className={className && className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M326.739 221.048V0.850358C146.694 0.850358 0.738647 147.03 0.738647 327.35C0.738647 507.671 146.694 653.85 326.739 653.85V433.653C268.119 433.653 220.599 386.06 220.599 327.35C220.599 268.641 268.119 221.048 326.739 221.048Z"
        fill="#FFFBFB"
        fillOpacity="0.15"
      />
    </svg>
  );
}
