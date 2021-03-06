import { Box, Button, Container, Divider, Flex, Heading, Icon, Text, useColorModeValue, useToast } from "@chakra-ui/react";
import Footer from "@src/components/pages/home/footer";
import HomePortfolio from "@src/components/pages/home/portfolio";
import { copyText } from "@src/helper/document";
import PortfolioService from "@src/service/rest/portfolio.service";
import { memo } from "react";
import { FaArrowLeft, FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp, FaCopy } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import rehypeRaw from "rehype-raw";

const DetailPortfolio = () => {
  const { id } = useParams();
  const portfolioService = new PortfolioService();

  const getPortfolioData = () => {
    return portfolioService.getPortfolio(id);
  };

  const { data, isSuccess } = useQuery(`detail-portfolio/${id}`, getPortfolioData);
  const textGrayTheme = useColorModeValue("gray.600", "white");

  if (isSuccess) {
    window.scrollTo(0, 0);
  }

  const toast = useToast();

  const copyCurrentUrl = () => {
    copyText(window.location);
    toast({
      title: "Success",
      description: "Link Copied to Clipboard",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  /* color schemes */
  const blueSchemes = useColorModeValue("blue.500", "#90cef4");

  return (
    <>
      <Container marginBottom={10} maxW="700px" marginTop={8}>
        <Link to="/">
          <Text color={blueSchemes} fontSize={12} fontWeight={500} display="flex" alignItems="center" columnGap={2}>
            <Icon as={FaArrowLeft} /> Back
          </Text>
        </Link>
        <Heading as="h1" fontSize={32} marginTop={5}>
          {data?.data.data.attributes.Title}
        </Heading>
        <Text marginTop={2} color={textGrayTheme}>
          {data?.data.data.attributes.company}
        </Text>

        <Divider marginY={5} />

        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={data?.data?.data.attributes.content} />

        <Box marginTop={8} marginBottom={10}>
          <Heading as="h4" fontWeight="500" fontSize={18}>
            Share Portfolio :{" "}
          </Heading>
          <Flex marginTop={3} gap={2}>
            <Button colorScheme="facebook" size="sm">
              <Icon as={FaFacebookF} />
            </Button>
            <Button colorScheme="twitter" size="sm">
              <Icon as={FaTwitter} />
            </Button>

            <Button colorScheme="whatsapp" size="sm">
              <Icon as={FaWhatsapp} />
            </Button>
            <Button colorScheme="teal" size="sm" onClick={copyCurrentUrl}>
              <Icon as={FaCopy} />
            </Button>
          </Flex>
        </Box>

        <Divider marginY={3} />
        <Heading as="h2" fontSize={28} marginTop={5}>
          More Portfolio
        </Heading>

        <HomePortfolio itemsPerRow={2} justifyContent="start" />
      </Container>

      <Footer />
    </>
  );
};

export default memo(DetailPortfolio);
