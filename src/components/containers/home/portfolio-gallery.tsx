"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import DecoratorDown from "@src/components/commons/decorator-down";
import DecoratorUp from "@src/components/commons/decorator-up";
import classNames from "classnames";
import Link from "next/link";
import { useState } from "react";

type Props = {
  portfolioList: Portfolio[];
};

type PortfolioCardProps = {
  title: string;
  url: string;
  company: string;
  seeDetails: string;
};

const PortfolioCard = ({
  url,
  title,
  company,
  seeDetails,
}: PortfolioCardProps) => {
  const [isShowText, setIsShowText] = useState(false);

  const handleMouseOver = () => {
    console.log("over");
    if (!isShowText) {
      setIsShowText(true);
    }
  };

  const handleMouseLeave = () => {
    if (isShowText) {
      setIsShowText(false);
    }
  };

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={classNames({
        "w-full min-h-[350px] md:min-h-[500px]  basis-full md:basis-[calc(50%-20px)] overflow-hidden rounded-lg relative":
          true,
        // "md:basis-[calc(75%-20px)]": index % 2 === 0,
        // "md:basis-[calc(25%-20px)]": index % 2 !== 0,
      })}
      style={{
        backgroundImage: `url(${url})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className={classNames({
          "portfolio-card": true,
          active: isShowText,
        })}
      >
        <section className="absolute flex flex-col gap-y-4 md:flex-row w-full justify-between bottom-5 px-5">
          <div>
            <h2 className="text-white text-lg font-bold">{title}</h2>
            <span className="text-white font-light">{company}</span>
          </div>
          <div className="flex gap-x-5">
            <Link
              href={seeDetails}
              className="btn btn-small h-fit bg-white  font-semibold !text-sm btn-primary border-white text-black "
            >
              See Details
            </Link>
            <button className="btn btn-small h-fit font-semibold !text-sm btn-outlined border-white text-white border">
              View Project
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default function PortfolioGallery({ portfolioList }: Props) {
  return (
    <div className="relative dark:bg-slate-900 dark:text-white">
      <DecoratorUp className="absolute right-0 -z-10 fill-black dark:fill-slate-100 dark:z-0 " />
      <DecoratorDown className="absolute hidden md:block bottom-0 left-0 -z-10 dark:z-0 fill-black dark:fill-slate-100" />

      <div className="container px-4 py-[100px]">
        <h1 className=" underline font-bold text-2xl md:text-4xl text-center">
          Portfolio
        </h1>

        <section className="mt-12 flex flex-wrap gap-6 justify-between">
          {portfolioList.map(({ preview, title, company, slug }, index) => (
            <PortfolioCard
              key={index}
              title={title}
              url={preview[0].url}
              company={company}
              seeDetails={`/portfolio/${slug}`}
            />
          ))}
        </section>
      </div>
    </div>
  );
}
