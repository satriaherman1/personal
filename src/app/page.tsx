import { Portfolio } from "@src/app/portfolio/[slug]/page";
import Footer from "@src/components/commons/footer";
import Navbar from "@src/components/commons/navbar";
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
      <PortfolioGallery portfolioList={portfolios} />
      <Testimonials />
      <Footer />
    </div>
  );
}
