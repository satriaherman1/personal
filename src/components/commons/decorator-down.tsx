type Props = {
  className?: string;
};

export default function DecoratorDown({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="594"
      height="326"
      viewBox="0 0 594 326"
      fill="none"
      className={className && className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M373.802 326H594C594 145.956 447.821 0 267.5 0C87.1789 0 -59 145.956 -59 326H161.198C161.198 267.38 208.79 219.86 267.5 219.86C326.21 219.86 373.802 267.38 373.802 326Z"
        // fill="#FFFBFB"
        fillOpacity="0.05"
      />
    </svg>
  );
}
