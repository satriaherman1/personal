import PortfolioContent from "@src/app/portfolio/[slug]/content";
import Footer from "@src/components/commons/footer";
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

const GET_PORTFOLIO_BY_SLUG = `
  query GetPortfolioBySlug($slug: String!) {
    portfolio(where: { slug: $slug }) {
      id
      slug
      title
      preview{
        url
      }
      company
      description {
          html
      }
      client
      role
      year
      simpleDescription
    }
  }
`;

export type Portfolio = {
  id: string;
  slug: string;
  title: string;
  company: string;
  preview: {
    url: string;
  }[];
  simpleDescription: string;
  description: any;
  client: string;
  role: string;
  year: string;
};

type PageParams = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const { portfolios } = (await hygraphClient.request(GET_ALL_PORTFOLIOS)) as {
    portfolios: Portfolio[];
  };

  return portfolios.map(({ slug }) => ({
    slug: slug,
  }));
}

export default async function Page({ params }: PageParams) {
  const { portfolio } = (await hygraphClient.request(GET_PORTFOLIO_BY_SLUG, {
    slug: params.slug,
  })) as {
    portfolio: Portfolio;
  };

  return (
    <>
      <PortfolioContent {...portfolio} />
      <Footer maxWClassName="max-w-[800px]" />
    </>
  );
}
