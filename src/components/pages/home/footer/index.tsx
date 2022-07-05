import { Box, Container, Flex, Heading, ListItem, Text, UnorderedList, useMediaQuery } from "@chakra-ui/react";

export default function Footer() {
  const [MediumScreen] = useMediaQuery("(min-width: 768px)");

  return (
    <Box as="footer" paddingY={10} bg="blue.900" position="relative" color="white">
      <Container maxW="1200px">
        <Text textAlign="center">&copy; Satria Herman 2022</Text>
        {/* <Flex columnGap={60} rowGap={7} flexDirection={MediumScreen ? "row" : "column"}>
          <Box>
            <Heading as="h2" fontSize="2xl">
              Satria
            </Heading>
          </Box>

          <Flex columnGap={MediumScreen ? 36 : 10} marginTop={MediumScreen ? "30px" : "0"}>
            <Box>
              <Text fontWeight={600}>Overview</Text>
              <UnorderedList color="green.400" listStyleType="none" marginLeft={0} marginTop={3} fontWeight={600}>
                <ListItem>About</ListItem>
                <ListItem>Services</ListItem>
                <ListItem>Dev.to</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text fontWeight={600}>More</Text>
              <UnorderedList color="green.400" listStyleType="none" marginLeft={0} marginTop={3} fontWeight={600}>
                <ListItem>Blog</ListItem>
                <ListItem>Medium</ListItem>
                <ListItem>Dev.to</ListItem>
              </UnorderedList>
            </Box>
            <Box>
              <Text fontWeight={600}>Explore</Text>
              <UnorderedList color="green.400" listStyleType="none" marginLeft={0} marginTop={3} fontWeight={600}>
                <ListItem>Blog</ListItem>
                <ListItem>Medium</ListItem>
                <ListItem>Dev.to</ListItem>
              </UnorderedList>
            </Box>
          </Flex>
        </Flex> */}
      </Container>
    </Box>
  );
}
