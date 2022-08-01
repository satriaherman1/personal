import { Box, Flex, Heading, Image, SkeletonCircle, Text, useColorModeValue } from "@chakra-ui/react";
import StarRatings from "react-star-ratings";

interface IReviewCard {
  name: string;
  stars: number;
  title: string;
  description: string;
  photo: string;
}

export default function ReviewCard({ name, title, stars, description, photo }: IReviewCard) {
  const bg = useColorModeValue("#ffffff", "#253240");
  const boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(39, 39, 39, 0.15) 0px 4px 20px 0px";

  return (
    <Box padding="20px 25px" rounded="lg" bg={bg} boxShadow={boxShadow}>
      <Flex padding="8px 12px" columnGap={3}>
        <Image loading="lazy" fallback={<SkeletonCircle width="50px" height="50px" />} src={photo} width="50px" height="50px" rounded="full" display="block" />
        <Box>
          <Heading as="h3" size="md">
            {name}
          </Heading>
          <Text>{title}</Text>
        </Box>
      </Flex>
      <Box marginY={2}>
        <StarRatings rating={stars} starDimension="20px" starRatedColor="orange" numberOfStars={6} name="rating" />
      </Box>
      <Text marginTop={4}>{description}</Text>
    </Box>
  );
}
