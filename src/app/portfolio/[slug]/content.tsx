"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import Navbar from "@src/components/commons/navbar";
import useStyleRewrite from "@src/utils/hooks/style-rewrite";
import Image from "next/image";
import { BiShareAlt } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function PortfolioContent({
  title,
  company,
  slug,
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

        <Image
          width="0"
          height={0}
          sizes="100vw"
          className="w-[100%] z-2 mt-5 rounded-lg"
          alt=""
          src={preview[0].url}
        />

        <section className="mt-5">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <span className="text-gray-600 dark:text-gray-300 ">{company}</span>
        </section>

        <div className="shadow-md border px-9 py-6 rounded-lg my-8 max-w-[400px]">
          <div className="flex justify-between">
            <section>
              <h2 className="t uppercase font-bold tracking-wider">Client</h2>
              <span className="text-gray-600">{client}</span>
            </section>
            <section>
              <h2 className="t uppercase font-bold tracking-wider">Role</h2>
              <span className="text-gray-600">{role}</span>
            </section>
            <section>
              <h2 className="t uppercase font-bold tracking-wider">Year</h2>
              <span className="text-gray-600">{year}</span>
            </section>
          </div>
        </div>

        <div
          className="mt-3 html-rendered text-gray-600"
          dangerouslySetInnerHTML={{ __html: simpleDescription }}
        ></div>

        <div
          className="mt-7 html-rendered "
          dangerouslySetInnerHTML={{ __html: description.html }}
          style={{ fontSize: "19px" }}
        ></div>

        <section className="mt-16">
          <span className="font-semibold text-2xl">Share This Project : </span>
          <div className="flex mt-5 gap-x-4">
            <a
              href="/"
              className="p-3 rounded-lg text-lg bg-pink-500 text-white"
            >
              <BsInstagram />
            </a>
            <a
              href="/"
              className="p-3 rounded-lg text-lg bg-green-500 text-white"
            >
              <BsWhatsapp />
            </a>
            <a
              href="/"
              className="p-3 rounded-lg text-lg bg-blue-600 text-white"
            >
              <BsLinkedin />
            </a>
            <button className="p-3 rounded-lg text-lg bg-gray-100 dark:text-black">
              <BiShareAlt />
            </button>
          </div>
        </section>

        <div className="h-20"></div>
      </main>
    </div>
  );
}
