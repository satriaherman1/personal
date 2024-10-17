import classNames from "classnames";
import { MdArrowOutward } from "react-icons/md";

const certificationList = [
  {
    name: "2nd Places Web Design and Technology",
    commitee: "MKKS Jepara",
    year: 2020,
    category: "competition",
    description:
      "Building a Responsive website with Laravel 8 and Bootstrap Framework. The website should be have a backend system including CRUD system and Authentication. ",
  },
  {
    name: "3rd Places Web Design Competition",
    commitee: "Universitas Atma Jaya Yogyakarta",
    category: "competition",
    url: "https://www.sololearn.com/Certificate/CT-HCUJVSKO/png",

    year: 2020,
    description:
      "Building a Responsive and beautiful financial web ui using React and Chakra UI",
  },
  {
    name: "Javascript",
    commitee: "Sololearn",
    category: "certification",
    url: "https://www.sololearn.com/Certificate/CT-HCUJVSKO/png",

    year: 2019,
    description:
      "Learning a Javascript basic including : data structure, variables, function,condition & looping, Document Object Model, ",
  },
  {
    name: "HTML",
    commitee: "Sololearn",
    category: "certification",
    url: "https://www.sololearn.com/Certificate/CT-HCUJVSKO/png",

    year: 2019,
    description:
      "Learning a Javascript basic including : data structure, variables, function,condition & looping, Document Object Model, ",
  },
  {
    name: "React + Redux",
    commitee: "Sololearn",
    category: "certification",
    url: "https://www.sololearn.com/Certificate/CT-HCUJVSKO/png",
    year: 2022,
    description:
      "Learning a Javascript basic including : data structure, variables, function,condition & looping, Document Object Model, ",
  },
  {
    name: "Web Development Fundamentals",
    commitee: "Sololearn",
    category: "certification",
    url: "https://www.sololearn.com/Certificate/CT-G6KVU1EM/png",
    year: 2022,
    description: "Learning fundamentals of web like :  ",
  },
  {
    name: "PHP",
    commitee: "Sololearn",
    category: "certification",
    url: "https://www.sololearn.com/Certificate/CT-8JF3QOCK/png",
    year: 2022,
    description: "Learning fundamentals of web like :  ",
  },
];

export default function Certification() {
  return (
    <div className="py-20 container px-4">
      <h1 className="dark:text-white underline font-bold text-3xl md:text-4xl text-center mb-8">
        Certification
      </h1>

      <section className="flex flex-col gap-y-2 mt-20 w-full relative z-10">
        {certificationList.map((certification, key) => (
          <section
            key={certification.name}
            className={classNames({
              "flex gap-x-4 gap-y-2 py-3 flex-col md:flex-row justify-between ":
                true,
              "border-t dark:border-slate-800 border-slate-200": key !== 0,
            })}
          >
            <div className="basis-1/5">
              <span className="text-2xl font-bold capitalize text-gray-600 dark:text-gray-300">
                {certification.category}
              </span>
            </div>
            <div className="md:basis-1/2">
              <h2 className="font-semibold text-2xl">{certification.name}</h2>
              <p className="mt-3 text-gray-400">{certification.description}</p>

              <span className="mt-4 inline-block text-gray-500 font-semibold">
                {certification.year}
              </span>
            </div>

            <a
              href={certification.url}
              className=" md:self-end btn btn-primary btn-small h-fit w-fit flex gap-x-1 items-center !text-sm"
            >
              <MdArrowOutward /> View Certification
            </a>
          </section>
        ))}
      </section>
    </div>
  );
}
