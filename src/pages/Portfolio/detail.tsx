import { Container, Divider, Heading, Icon, Text } from "@chakra-ui/react";
import Footer from "@src/components/pages/home/footer";
import HomePortfolio from "@src/components/pages/home/portfolio";
import PortfolioService from "@src/service/rest/portfolio.service";
import { FaArrowLeft } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";

export default function DetailPortfolio() {
  const portfolioService = new PortfolioService();
  const { id } = useParams();

  const getPortfolioData = () => {
    return portfolioService.getPortfolio(id);
  };

  const { data } = useQuery("detail-portfolio", getPortfolioData);

  return (
    <>
      <Container marginBottom={10} maxW="700px" marginTop={8}>
        <Link to="/">
          <Text color="blue.600" fontSize={12} fontWeight={500} display="flex" alignItems="center" columnGap={2}>
            <Icon as={FaArrowLeft} /> Back
          </Text>
        </Link>
        <Heading as="h1" fontSize={32} marginTop={5}>
          {data?.data.data.attributes.Title}
        </Heading>
        <Text marginTop={2} color="gray.600">
          {data?.data.data.attributes.company}
        </Text>

        <Divider marginY={5} />

        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={data?.data?.data.attributes.content} />

        <Divider />
        <Heading as="h2" fontSize={28} marginTop={5}>
          More Portfolio
        </Heading>

        <HomePortfolio />
      </Container>

      <Footer />
    </>
  );
}
