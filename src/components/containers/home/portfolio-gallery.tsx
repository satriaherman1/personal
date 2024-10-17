"use client";

import { Portfolio } from "@src/app/portfolio/[slug]/page";
import { truncateText } from "@src/utils/utils";
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
};

const PortfolioCard = ({
  url,
  title,

  seeDetails,
  description,
}: PortfolioCardProps) => {
  return (
    <div className="flex flex-col md:flex-row border rounded-2xl w-full basis-full md:basis-[calc(50%-20px)] cursor-pointer hover:shadow-lg duration-200 bg-[rgb(237,239,241)] dark:bg-slate-800 dark:border-gray-500 relative z-10">
      <img
        src={url}
        className="rounded-t-2xl rounded-b-2xl w-full md:w-[300px] h-[280px] md:h-full"
        alt="portfolio"
      />
      <section className="px-7 py-6">
        <h2 className="font-bold text-2xl">{title}</h2>
        {/* <span className="text-gray-500 mt-2">{company}</span> */}

        <div
          className="mt-9 text-gray-600 dark:text-gray-400 font-medium"
          dangerouslySetInnerHTML={{ __html: truncateText(description, 140) }}
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

        <section className="mt-12 flex flex-wrap gap-6 justify-between">
          {portfolioList.map(
            ({ preview, title, company, slug, simpleDescription }, index) => (
              <PortfolioCard
                key={index}
                title={title}
                url={preview[0].url}
                company={company}
                description={simpleDescription}
                seeDetails={`/portfolio/${slug}`}
              />
            )
          )}
        </section>
      </div>
    </>
  );
}
