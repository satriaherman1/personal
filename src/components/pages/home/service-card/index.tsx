import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function ServiceCard(props: IServiceCard) {
  const { title, icon, description, imageBg } = props;
  return (
    <Box padding="26px 20px" boxShadow="0px 0px 15px #cdcdcda3">
      <Box padding={4} lineHeight="0" width="fit-content" height="fit-content" rounded="full" background={imageBg}>
        {icon}
      </Box>
      <Heading as="h3" fontSize="lg" marginTop={4}>
        {title}
      </Heading>
      <Text marginTop={3}>{description}</Text>
    </Box>
  );
}
