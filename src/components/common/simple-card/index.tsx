import { Box, Heading, Image, useColorModeValue } from "@chakra-ui/react";

export default function SimpleCard(props: ISimpleCard) {
  const { image, title, bottomAction } = props;
  const bg = useColorModeValue("#ffffff", "#253240");
  const shadow = useColorModeValue("#cdcdcda3", "none");

  return (
    <Box rounded="lg" padding="24px 20px" bg={bg} boxShadow={`0px 0px 15px ${shadow}`}>
      <Image boxSize="100%" height="270px" objectFit="cover" loading="lazy" src={image} rounded="lg" />
      <Heading as="h3" size="md" marginTop={3}>
        {title}
      </Heading>
      {bottomAction}
    </Box>
  );
}
