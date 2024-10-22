"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import Navbar from "@src/components/commons/navbar";
import useStyleRewrite from "@src/utils/hooks/style-rewrite";
import Image from "next/image";
import Link from "next/link";
import { MdArrowBack, MdArrowOutward } from "react-icons/md";

export default function PortfolioContent({
  title,
  company,

  preview,
  description,
  simpleDescription,
  client,
  role,
  year,
}: Portfolio) {
  useStyleRewrite();
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar className="fixed bottom-0 md:top-0 w-full h-fit" />

      <main className="container max-w-[800px] py-3 md:pt-20 px-4">
        {/* <Link
          href="/"
          className="flex gap-x-2 text-red-500 font-semibold items-center mt-2"
        >
          <BiArrowBack />
          Back
        </Link> */}

        <div className=" relative w-full h-[500px]">
          <Image
            fill
            className=" z-2 mt-5 rounded-lg"
            objectFit="cover"
            alt=""
            src={preview[0].url}
          />
        </div>

        <section className="mt-20">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <span className="text-gray-600  dark:text-gray-400 ">{company}</span>
        </section>

        <a
          href=""
          className="btn btn-primary btn-small inline-flex items-center gap-x-2 mt-4"
        >
          View Website <MdArrowOutward />
        </a>

        <div className="shadow-md border px-9 py-6 rounded-lg my-8 max-w-[400px]">
          <div className="flex justify-between">
            <section>
              <h2 className="t uppercase font-bold tracking-wider">Client</h2>
              <span className="text-gray-600  dark:text-gray-400">
                {client}
              </span>
            </section>
            <section>
              <h2 className="t uppercase font-bold tracking-wider">Role</h2>
              <span className="text-gray-600 dark:text-gray-400">{role}</span>
            </section>
            <section>
              <h2 className="t uppercase font-bold tracking-wider">Year</h2>
              <span className="text-gray-600 dark:text-gray-400">{year}</span>
            </section>
          </div>
        </div>

        <div
          className="mt-3 html-rendered text-gray-600 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: simpleDescription }}
        ></div>

        <div
          className="mt-7 html-rendered "
          dangerouslySetInnerHTML={{ __html: description.html }}
          style={{ fontSize: "19px" }}
        ></div>

        <Link
          href="/"
          className="btn btn-outlined inline-flex gap-x-2 mt-8 items-center btn-small "
        >
          <MdArrowBack /> Go Back
        </Link>

        <div className="h-20"></div>
      </main>
    </div>
  );
}
