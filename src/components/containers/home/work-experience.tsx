import DecoratorRight from "@src/components/commons/decorator-right";
import ExperienceCard from "@src/components/fragments/experience-card";
import { BsInstagram } from "react-icons/bs";
import { ImGithub, ImLinkedin, ImWhatsapp } from "react-icons/im";

const workExpData = [
  {
    companyInitial: "2",
    companyName: "22222-Labs",
    position: "Software Engineer",
    duration: "Oct 2023 - Present",
  },
  {
    companyInitial: "M",
    companyName: "Medictrek",
    position: "Frontend Engineer",
    duration: "Oct 2022 - Sept 2023",
  },
  {
    companyInitial: "C",
    companyName: "Clodeo",
    position: "Frontend Developer",
    duration: "Aug 2021 - Aug 2022",
  },
  {
    companyInitial: "B",
    companyName: "Brainmatics",
    position: "Fullstack Dev Intern",
    duration: "Feb 2021 - May 2021",
  },
  {
    companyInitial: "E",
    companyName: "Esoftgreat",
    position: "Freelancer",
    duration: "May 2021 - Present",
  },
  {
    companyInitial: "A",
    companyName: "Ailee Studio",
    position: "Freelancer",
    duration: "May 2021 - Dec 2022",
  },
];

export default function WorkExperience() {
  return (
    <div className="bg-[#0a0a0a] dark:bg-slate-950  py-20 relative">
      <DecoratorRight className="absolute top-0 right-0 " />

      {/* about */}
      <section className="text-white  pb-20 mb-12 container px-4">
        <h1 className=" underline font-bold text-2xl md:text-4xl text-left">
          About Me
        </h1>

        <p className="mt-10">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus
          id similique quisquam odit aliquid impedit ad at in veniam repudiandae
          quas consectetur, totam sint itaque, ullam excepturi ut voluptates
          voluptatum quam aspernatur temporibus molestiae! Vitae rem dolorem
          vero ut. Sunt voluptatem nulla unde obcaecati perspiciatis illum esse,
          magnam ut? Error eveniet tempora fugiat recusandae ullam assumenda
          <br /> <br />
          aliquid nemo sint consequatur nam, odio incidunt corrupti, veniam
          porro expedita voluptates? Quos a aliquid earum doloremque illum
          reprehenderit nam! Exercitationem, repellat? Laudantium earum enim
          culpa voluptatem illum sint quisquam corrupti vero, doloremque
          explicabo corporis minima commodi debitis eligendi exercitationem
          inventore error dicta eos.
        </p>

        <div className="flex gap-x-7 mt-8">
          <a className="text-4xl hover:scale-125 duration-300 cursor-pointer">
            <ImLinkedin />
          </a>
          <a className="text-4xl hover:scale-125 duration-300 cursor-pointer">
            <ImGithub />
          </a>
          <a className="text-4xl hover:scale-125 duration-300 cursor-pointer">
            <BsInstagram />
          </a>
          <a className="text-4xl hover:scale-125 duration-300 cursor-pointer">
            <ImWhatsapp />
          </a>
        </div>
      </section>
      {/* end about */}

      <div className="container px-4 z-10 relative">
        <h1 className="text-white underline font-bold text-2xl md:text-4xl text-center">
          Work Experience
        </h1>

        <section className="flex flex-wrap justify-between gap-y-9 mt-10">
          <div className="border-dashed absolute h-5/6 w-2 border-white border-l-2 left-1/2 -translate-x-1/2"></div>
          {workExpData.map((data) => (
            <ExperienceCard
              key={data.companyName}
              className="w-full basis-full md:basis-[calc(33%-20px)] relative z-10 dark:bg-gray-800"
              {...data}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
