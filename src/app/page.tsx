import { Portfolio } from "@src/app/portfolio/[slug]/page";
import DecoratorDown from "@src/components/commons/decorator-down";
import DecoratorUp from "@src/components/commons/decorator-up";
import Footer from "@src/components/commons/footer";
import Navbar from "@src/components/commons/navbar";
import Certification from "@src/components/containers/home/certification";
import Hero from "@src/components/containers/home/hero";
import PortfolioGallery from "@src/components/containers/home/portfolio-gallery";
import Testimonials from "@src/components/containers/home/testimonials";
import WorkExperience from "@src/components/containers/home/work-experience";
import { hygraphClient } from "@src/utils/graphql-client";

const GET_ALL_PORTFOLIOS = `
{
    portfolios{
        id
        slug
        title
        company
        preview{
            url
        }
        description {
            html
        }
    }
}
`;

export default async function Home() {
  const { portfolios } = (await hygraphClient.request(GET_ALL_PORTFOLIOS)) as {
    portfolios: Portfolio[];
  };
  return (
    <div>
      <Navbar className="fixed bottom-0 md:top-0 w-full h-fit" />
      <Hero />
      <WorkExperience />

      <div className="relative dark:bg-slate-900 dark:text-white ">
        <DecoratorUp className="absolute right-0 -z-10 fill-black dark:fill-slate-100 dark:z-0 " />
        <DecoratorDown className="absolute hidden md:block bottom-0 left-0 -z-10 dark:z-0 fill-black dark:fill-slate-100" />
        <Certification />

        <PortfolioGallery portfolioList={portfolios} />
      </div>
      <Testimonials />
      <Footer />
    </div>
  );
}
