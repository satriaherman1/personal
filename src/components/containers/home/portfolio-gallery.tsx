"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import { truncateText } from "@src/utils/utils";
import classNames from "classnames";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

type Props = {
  portfolioList: Portfolio[];
};

type PortfolioCardProps = {
  title: string;
  url: string;
  company: string;
  seeDetails: string;
  description?: any;
  className?: string;
};

export const PortfolioCard = ({
  url,
  title,
  className,
  seeDetails,
  description,
}: PortfolioCardProps) => {
  return (
    <div
      className={classNames(
        className,
        "flex flex-col md:flex-row border rounded-2xl w-full  cursor-pointer hover:shadow-lg duration-200 bg-[rgb(237,239,241)] dark:bg-slate-800 dark:border-gray-500 relative z-10"
      )}
    >
      <div className="w-full h-[280px] md:w-[400px] md:h-full rounded-t-2xl rounded-b-2xl overflow-hidden md:basis-[40%]">
        <img src={url} className="object-cover w-full h-full" alt="portfolio" />
      </div>
      <section className="px-7 py-6 md:basis-[50%]">
        <h2 className="font-bold text-2xl">{title}</h2>
        {/* <span className="text-gray-500 mt-2">{company}</span> */}

        <div
          className="mt-9 text-gray-600 dark:text-gray-400 font-medium"
          dangerouslySetInnerHTML={{ __html: truncateText(description, 190) }}
        ></div>

        <Link
          href={seeDetails}
          className="btn btn-primary btn-small flex gap-x-1 w-fit items-center mt-8"
        >
          See Details <MdArrowOutward />
        </Link>
      </section>
    </div>
  );
};

export default function PortfolioGallery({ portfolioList }: Props) {
  return (
    <>
      <div className="container px-4 py-[100px]">
        <h1 className=" underline font-bold text-3xl md:text-4xl text-center">
          Portfolio
        </h1>

        <section className="mt-12 flex flex-wrap gap-9 justify-center">
          {portfolioList.map(
            ({ preview, title, company, slug, simpleDescription }, index) => (
              <PortfolioCard
                key={index}
                title={title}
                url={preview[0].url}
                company={company}
                description={simpleDescription}
                className="basis-full max-w-[900px]  items-center"
                seeDetails={`/portfolio/${slug}`}
              />
            )
          )}
        </section>
      </div>
    </>
  );
}
