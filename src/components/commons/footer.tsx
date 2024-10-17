import DecoratorUp from "@src/components/commons/decorator-up";
import classNames from "classnames";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";
import { FaTelegram } from "react-icons/fa";
import { LuMail } from "react-icons/lu";

type Props = {
  className?: string;
  maxWClassName?: string;
};

export default function Footer({ className, maxWClassName }: Props) {
  return (
    <footer
      className={classNames(
        "mb-16 md:mb-0 pt-20 bg-gray-100 relative dark:bg-slate-900 dark:text-white",
        className
      )}
    >
      <DecoratorUp className="absolute top-0 right-0 z-0 fill-black dark:fill-slate-100" />

      <div className={classNames("flex  container px-4", maxWClassName)}>
        <section>
          {/* <Logo className="block" /> */}

          <h2 className="text-3xl font-semibold mt-4">Get In Touch</h2>
          <p className="mt-1 text-lg">Let&apos;s do awesome project with me.</p>

          <div className="flex mt-4 gap-x-6">
            <a href="" className="text-4xl">
              <LuMail />
            </a>
            <a href="" className="text-3xl">
              <BsWhatsapp />
            </a>
            <a href="" className="text-3xl">
              <BsInstagram />
            </a>
            <a href="" className="text-3xl">
              <FaTelegram />
            </a>
          </div>

          <a href="" className="btn btn-primary inline-block btn-small mt-5">
            Contact Me
          </a>
        </section>
      </div>
      <div className="py-4 bg-white dark:bg-slate-950 text-center mt-9 z-10 relative">
        &copy; Satria Herman 2024 - All Rights Reserved
      </div>
    </footer>
  );
}
