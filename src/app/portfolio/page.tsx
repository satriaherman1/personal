import { GET_ALL_PORTFOLIOS, Portfolio } from "@src/app/portfolio/[slug]/page";
import PortfolioListContent from "@src/app/portfolio/content";
import { hygraphClient } from "@src/utils/graphql-client";

export default async function Page() {
  const { portfolios } = (await hygraphClient.request(GET_ALL_PORTFOLIOS)) as {
    portfolios: Portfolio[];
  };

  return <PortfolioListContent portfolioList={portfolios} />;
}
