import classNames from "classnames";
import Image from "next/image";

type Props = {
  className?: string;
  name: string;
  position: string;
  testimonial: string;
  avatarUrl: string;
};

export default function TestimonialCard({
  className,
  name,
  position,
  testimonial,
  avatarUrl,
}: Props) {
  return (
    <div
      className={classNames(
        "bg-white dark:bg-gray-800 dark:text-white p-6 rounded-md",
        className
      )}
    >
      <div className="flex gap-x-6 border-b border-gray-200 pb-4">
        <Image
          src={avatarUrl}
          alt={name}
          width={50}
          height={50}
          className="rounded-full"
        />

        <div>
          <h2 className="font-bold text-xl">{name}</h2>
          <span className="text-gray-500 dark:text-gray-400 block">
            {position}
          </span>
        </div>
      </div>

      <p className="text-lg mt-4">{testimonial}</p>
    </div>
  );
}
