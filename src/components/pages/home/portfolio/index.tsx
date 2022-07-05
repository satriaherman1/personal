import { Box, Flex, Heading, Icon, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import SimpleCard from "@src/components/common/simple-card";
import { BosImg, BosPreview, ShipdeoLogo } from "@src/config/pathImage";
import PortfolioService from "@src/service/rest/portfolio.service";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

export default function HomePortfolio() {
  const [LargeScreen] = useMediaQuery("(min-width: 1024px)");
  const blueSchemes = useColorModeValue("blue.500", "#90cef4");

  const portfolioService = new PortfolioService();

  const getPortfolioData = () => {
    return portfolioService.getPortfolios();
  };

  const { data } = useQuery("portfolio", getPortfolioData, { cacheTime: 100 });

  return (
    <Box padding="30px 0" id="portfolio">
      <Heading textAlign="center" as="h2" size="lg">
        Portfolio
      </Heading>

      <Flex marginTop={10} gap={8} flexDirection={LargeScreen ? "row" : "column"}>
        {data?.data?.data?.map((d: any) => (
          <Box flexBasis={LargeScreen ? "33%" : "100%"}>
            <Link to={`/portfolio/${d.id}`}>
              <SimpleCard
                bottomAction={
                  <Text display="flex" alignItems="center" marginTop={2} color={blueSchemes}>
                    Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                  </Text>
                }
                image={d.attributes.cover.data.attributes.url}
                title={d.attributes.Title}
              />
            </Link>
          </Box>
        ))}
      </Flex>
    </Box>
  );
}
