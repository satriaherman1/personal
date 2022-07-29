import { Box, Flex, Heading, Icon, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import SimpleCard from "@src/components/common/simple-card";
import SimpleCardSkeleton from "@src/components/common/simple-card-skeleton";
import PortfolioService from "@src/service/rest/portfolio.service";
import { FaArrowRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

interface IHomePortfolio {
  isShowTitle?: boolean;
  title?: string;
  itemsPerRow: number;
  justifyContent?: string;
}

export default function HomePortfolio({ title, isShowTitle, itemsPerRow, justifyContent }: IHomePortfolio) {
  const [MediumScreen] = useMediaQuery("(min-width: 768px)");
  const blueSchemes = useColorModeValue("blue.500", "#90cef4");

  const portfolioService = new PortfolioService();

  const getPortfolioData = () => {
    return portfolioService.getPortfolios();
  };

  const { data, isLoading } = useQuery("portfolio", getPortfolioData, { cacheTime: 100 });

  return (
    <Box padding="30px 0" id="portfolio">
      {isShowTitle && (
        <Heading marginBottom={10} textAlign="center" as="h2" size="lg">
          {title}
        </Heading>
      )}

      <Flex gap={8} justifyContent={justifyContent ? justifyContent : "center"} flexWrap="wrap" flexDirection={MediumScreen ? "row" : "column"}>
        {isLoading ? (
          <>
            <SimpleCardSkeleton /> <SimpleCardSkeleton /> <SimpleCardSkeleton />{" "}
          </>
        ) : (
          data?.data?.data?.map((d: any) => (
            <Box flexBasis={100 / itemsPerRow - 5 + "%"}>
              <Link to={`/portfolio/${d.id}`}>
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color={blueSchemes}>
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={d.attributes.cover.data[0].attributes.url}
                  title={d.attributes.Title}
                />
              </Link>
            </Box>
          ))
        )}
      </Flex>
    </Box>
  );
}
