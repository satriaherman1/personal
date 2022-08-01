import { Box, Flex, Heading, Image, Skeleton, SkeletonCircle, Text, useColorModeValue } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

export default function SkeletonReview() {
  const bg = useColorModeValue("#ffffff", "#253240");
  const boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(39, 39, 39, 0.15) 0px 4px 20px 0px";

  return (
    <Box padding="20px 25px" rounded="lg" bg={bg} boxShadow={boxShadow}>
      <Flex padding="8px 12px" columnGap={3}>
        <SkeletonCircle width="60px" height="50px" />
        <Box width="100%">
          <Skeleton width="100%" height="20px" />
          <Skeleton width="50%" marginTop={3} height="15px" />
        </Box>
      </Flex>
      <Box marginY={5}>
        <Skeleton width="50%" height="20px" />
      </Box>
      <Skeleton marginTop={4} width="100%" height="15px" />
      <Skeleton marginTop={2} width="100%" height="15px" />
      <Skeleton marginTop={2} width="100%" height="15px" />
    </Box>
  );
}
