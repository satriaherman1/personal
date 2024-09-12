type Props = {
  className?: string;
};

export default function DecoratorUp({ className }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="636"
      height="323"
      viewBox="0 0 636 323"
      fill="none"
      className={className && className}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M220.184 -2.23564L-5.30808e-06 0.188343C1.98196 180.222 149.759 324.559 330.069 322.574C510.379 320.589 654.942 173.034 652.96 -7.00002L432.776 -4.57604C433.421 54.0403 386.355 102.081 327.649 102.727C268.942 103.374 220.83 56.3807 220.184 -2.23564Z"
        // fill="white"
        fill-opacity="0.05"
      />
    </svg>
  );
}
