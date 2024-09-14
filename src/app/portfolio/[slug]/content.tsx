"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import Navbar from "@src/components/commons/navbar";
import useStyleRewrite from "@src/utils/hooks/style-rewrite";
import Image from "next/image";
import Link from "next/link";
import { BiArrowBack, BiShareAlt } from "react-icons/bi";
import { BsInstagram, BsLinkedin, BsWhatsapp } from "react-icons/bs";

export default function PortfolioContent({
  title,
  company,
  slug,
  preview,
  description,
}: Portfolio) {
  useStyleRewrite();
  return (
    <div>
      <Navbar className="fixed bottom-0 md:top-0 w-full h-fit" />

      <main className="container max-w-[800px] py-3 md:pt-20 px-4">
        <Link
          href="/"
          className="flex gap-x-2 text-red-500 font-semibold items-center mt-2"
        >
          <BiArrowBack />
          Back
        </Link>
        <section className="mt-5">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <span className="text-gray-600">{company}</span>
        </section>

        <Image
          width="0"
          height={0}
          sizes="100vw"
          className="w-[100%] z-2 mt-5"
          alt=""
          src={preview[0].url}
        />

        <caption className="whitespace-nowrap mx-auto block mt-2 text-gray-500">
          {slug}
        </caption>

        <div
          className="mt-7 html-rendered"
          dangerouslySetInnerHTML={{ __html: description.html }}
        ></div>

        <section className="mt-16">
          <span className="font-semibold">Share This Project</span>
          <div className="flex mt-3 gap-x-4">
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
            <button className="p-3 rounded-lg text-lg bg-gray-100">
              <BiShareAlt />
            </button>
          </div>
        </section>

        <div className="h-20"></div>
      </main>
    </div>
  );
}
