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
        <h1 className=" underline font-bold text-3xl md:text-4xl text-left">
          About Me
        </h1>

        <p className="mt-10">
          I am a Software Engineer with 3 years experience in Software
          Development. My Focus is on Frontend Development, but I also have
          experience in Backend Development. I have worked with various
          companies and clients, and I have a good understanding of the software
          development process. I am passionate about technology and always eager
          to learn new things. I am a team player and always ready to help my
          team members. I am a quick learner and always ready to take on new
          challenges.
          <br /> <br />
          Currently I&apos;m Working on 22222-Labs as a Software Engineer. My
          Responsibility is to develop and maintain the frontend of the
          application (Web and Mobile). I also work closely with the backend
          team to ensure that the application is running smoothly. I am also
          responsible for writing unit tests and ensuring that the code is of
          high quality. I am also responsible for mentoring junior developers
          and helping them grow in their careers.
        </p>

        <div className="flex gap-x-7 mt-8">
          <a
            href="https://linkedin.com/in/muhammad-satria-herman"
            className="text-4xl hover:scale-125 duration-300 cursor-pointer"
            target="_blank"
          >
            <ImLinkedin />
          </a>
          <a
            href="https://github.com/satriaherman1"
            target="_blank"
            className="text-4xl hover:scale-125 duration-300 cursor-pointer"
          >
            <ImGithub />
          </a>
          target="_blank"
          <a
            href="https://www.instagram.com/__senandika___?igsh=MTM5a3dqYms1OGxhdA=="
            className="text-4xl hover:scale-125 duration-300 cursor-pointer"
          >
            <BsInstagram />
          </a>
          <a
            href="https://wa.me/+628976121070"
            className="text-4xl hover:scale-125 duration-300 cursor-pointer"
            target="_blank"
          >
            <ImWhatsapp />
          </a>
        </div>
      </section>
      {/* end about */}

      <div className="container px-4 z-10 relative">
        <h1 className="text-white underline font-bold text-3xl md:text-4xl text-center">
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
