type Props = {
  className?: string;
  fill?: string;
};

export default function DecoratorLeft({ className, fill = "#FFFBFB" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="169"
      height="338"
      viewBox="0 0 169 338"
      fill="none"
      className={className && className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 224.023V338C93.3359 338 169 262.336 169 169C169 75.6638 93.3359 0 0 0V113.977C30.3888 113.977 55.0233 138.611 55.0233 169C55.0233 199.389 30.3888 224.023 0 224.023Z"
        fill={fill}
        fillOpacity="0.15"
      />
    </svg>
  );
}
