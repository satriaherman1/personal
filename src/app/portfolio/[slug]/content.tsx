"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import Navbar from "@src/components/commons/navbar";
import useStyleRewrite from "@src/utils/hooks/style-rewrite";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ImageGallery from "react-image-gallery";

export default function PortfolioContent({
  title,
  company,

  preview,
  description,
  simpleDescription,

  projectUrl,
}: Portfolio) {
  const previewImages = preview.map((image) => ({
    original: image.url,
    thumbnail: image.url,
  }));

  const [isFullScreen, setIsFullScreen] = useState<boolean>(false);
  useStyleRewrite();
  return (
    <div className="dark:bg-slate-900 dark:text-white">
      <Navbar className="fixed bottom-0 md:top-0 w-full h-fit" />

      <main className=" py-3 md:pt-20 px-4">
        <h1 className="text-4xl font-semibold mt-12 text-center">{title}</h1>
        <div className="text-gray-600 mt-3 dark:text-gray-400  text-center">
          {company}
        </div>

        <div className="container my-4">
          <hr />
        </div>

        <div className="flex items-center justify-center gap-x-4 mb-12">
          <Link
            href="/"
            className="h-fit btn btn-small btn-outlined flex gap-x-2 items-center"
          >
            <FaArrowLeft />
            Go back
          </Link>

          <a
            href={projectUrl}
            target="_blank"
            className="h-fit cursor-pointer btn btn-small btn-primary btn-outlined"
            rel="noopener noreferrer"
          >
            Visit Website
          </a>
        </div>
        <div className=" relative w-[85vw] mx-auto ">
          <ImageGallery
            additionalClass={classNames({
              fullscreen: isFullScreen,
            })}
            showPlayButton={false}
            items={previewImages}
            onScreenChange={(fullScreen) => setIsFullScreen(fullScreen)}
            renderLeftNav={(onClick, disabled) => (
              <button
                onClick={onClick}
                disabled={disabled}
                className="absolute dark:bg-slate-700 hidden md:block z-[9] top-1/2 -left-[12px] md:-left-[60px] transform -translate-y-1/2 bg-black  text-white p-2 rounded-full"
              >
                <FaArrowLeft />
              </button>
            )}
            renderRightNav={(onClick, disabled) => (
              <button
                onClick={onClick}
                disabled={disabled}
                className="absolute dark:bg-slate-700 hidden md:block z-[9] top-1/2 -right-[12px] md:-right-[60px] transform -translate-y-1/2 bg-black  text-white p-2 rounded-full"
              >
                <FaArrowRight />
              </button>
            )}
          />
        </div>
        <div className="container max-w-[800px]">
          <div className="flex gap-x-3 items-center mt-4"></div>
          {/* <div className="shadow-md border px-9 py-6 rounded-lg my-8 max-w-[400px]">
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
          </div> */}
          <h1 className="text-4xl font-bold">Summary</h1>
          <div
            className="mt-3 html-rendered text-gray-600 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: simpleDescription }}
          ></div>

          <div
            className="mt-7 html-rendered "
            dangerouslySetInnerHTML={{ __html: description.html }}
            style={{ fontSize: "19px" }}
          ></div>

          <div className="h-20"></div>
        </div>
      </main>
    </div>
  );
}
