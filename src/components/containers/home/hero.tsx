"use client";

import DecoratorDown from "@src/components/commons/decorator-down";
import DecoratorUp from "@src/components/commons/decorator-up";
import LoadingOverlay from "@src/components/commons/loading-overlay";
import { redirectToWa } from "@src/utils/function";
import classNames from "classnames";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiDownload } from "react-icons/fi";

export default function Hero() {
  const [isLoading, setIsLoading] = useState(true);
  const [isOpacity0, setIsOpacity0] = useState(false);

  useEffect(() => {
    // Simulasi loading page selama 2 detik
    const hideTimout = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    const opacityTimeout = setTimeout(() => {
      setIsOpacity0(true);
    }, 2700);

    return () => {
      clearTimeout(hideTimout);
      clearTimeout(opacityTimeout);
    };
  }, []);
  return (
    <>
      {isLoading && (
        <LoadingOverlay
          className={classNames({
            "opacity-0": isOpacity0,
          })}
        />
      )}
      <div className="hero dark:bg-slate-900 dark:text-white pb-16">
        <DecoratorUp className="absolute right-0 fill-black -z-[1] dark:fill-slate-100 dark:z-[1]" />
        <DecoratorDown className="absolute hidden md:block bottom-0 left-0 -z-10 fill-black dark:fill-slate-100 dark:z-0" />

        <div className="container px-4 pt-10 md:pt-[100px] flex-col-reverse md:flex-row flex justify-between items-center z-2 relative">
          <section className="basis-full md:basis-[calc(50%-40px)]">
            <h1 className="font-bold text-4xl lg:text-[80px] leading-[140%]">
              Hello, I’m Muhammad Satria Herman{" "}
            </h1>
            <p className="text-2xl lg:text-[30px] mt-5 leading-[140%]">
              A Software Engineer with 3 years experience in Software
              Development
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              <button
                onClick={redirectToWa}
                className="btn btn-primary inline-block w-fit"
              >
                Get In Touch
              </button>
              <a
                href=""
                className="btn btn-outlined flex items-center gap-x-2  w-fit"
              >
                <FiDownload className="text-xl md:text-2xl" /> Download CV
              </a>
            </div>
          </section>

          <section className="w-full basis-full md:basis-[calc(50%-40px)]">
            <Image
              width="0"
              height={0}
              sizes="100vw"
              className="w-[100%] z-2"
              alt=""
              src="/home/me.png"
            />
          </section>
        </div>
      </div>
    </>
  );
}
