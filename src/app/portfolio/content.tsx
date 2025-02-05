import { Portfolio } from "@src/app/portfolio/[slug]/page";
import Navbar from "@src/components/commons/navbar";
import { PortfolioCard } from "@src/components/containers/home/portfolio-gallery";

type Props = {
  portfolioList: Portfolio[];
};

export default function PortfolioListContent({ portfolioList }: Props) {
  return (
    <>
      <Navbar />
      <main>
        <section className="bg-slate-900  py-7 px-3">
          <div className="container">
            <h1 className="text-white text-3xl font-bold">Portfolio List</h1>
            <span className="text-white">List of my portfolio project</span>
          </div>
        </section>

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
      </main>
    </>
  );
}
