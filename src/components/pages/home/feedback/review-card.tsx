import { Box, Flex, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react";
import { MeImage } from "@src/config/pathImage";
import StarRatings from "react-star-ratings";

export default function ReviewCard() {
  const bg = useColorModeValue("#ffffff", "#253240");
  const boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(39, 39, 39, 0.15) 0px 4px 20px 0px";

  return (
    <Box padding="20px 25px" rounded="lg" bg={bg} boxShadow={boxShadow}>
      <Flex padding="8px 12px" columnGap={3}>
        <Image src={MeImage} width="50px" height={"50px"} rounded="full" display="block" />
        <Box>
          <Heading as="h3" size="md">
            M. Satria Herman
          </Heading>
          <Text>Frontend Developer</Text>
        </Box>
      </Flex>
      <Box marginY={2}>
        <StarRatings rating={4} starDimension="20px" starRatedColor="orange" numberOfStars={6} name="rating" />
      </Box>
      <Text marginTop={4}>
        Good Communication. Completion of project is so fast. I was amazed to Satria's skill and my project done with great result of satria's job. I recommend to hire Satria for your project
      </Text>
    </Box>
  );
}
