import classNames from "classnames";

type Props = {
  className?: string;
  companyInitial: string;
  companyName: string;
  position: string;
  duration: string;
};

export default function ExperienceCard({
  className,
  companyInitial,
  companyName,
  position,
  duration,
}: Props) {
  return (
    <div
      className={classNames(
        "bg-white p-8 rounded-lg flex gap-y-4 gap-x-9 dark:text-white",
        className
      )}
    >
      <section className="p-5 h-fit bg-black rounded-lg w-[100px] ">
        <span className="text-[50px] mx-auto block text-center font-bold  text-white">
          {companyInitial}
        </span>
      </section>

      <section>
        <h2 className="font-semibold text-2xl md:text-3xl">{companyName}</h2>
        <span className="text-md md:text-xl">{position}</span>

        <span className="mt-6 block text-md md:text-lg text-gray-600 dark:text-gray-200 font-semibold">
          {duration}
        </span>
      </section>
    </div>
  );
}
