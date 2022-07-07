import { Box, Button, Container, Divider, Flex, Heading, Icon, ListItem, Text, UnorderedList, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { FaFacebook, FaFacebookF, FaInstagram, FaLinkedin, FaLinkedinIn, FaMedium, FaTwitter, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  const [MediumScreen] = useMediaQuery("(min-width: 768px)");
  const bg = useColorModeValue("#253240", "gray.700");

  return (
    <Box as="footer" paddingTop={10} paddingBottom={5} bg="#253240" position="relative" color="white">
      <Container maxW="1200px">
        <Flex columnGap={60} rowGap={7} flexDirection={MediumScreen ? "row" : "column"}>
          <Box>
            <Heading as="h2" fontSize="2xl">
              Satria
            </Heading>
            <Text color="gray.400">
              Frontend Developer <br /> Freelancer, Blog Writer
            </Text>
          </Box>

          <Flex columnGap={MediumScreen ? "50px" : 10} marginTop={MediumScreen ? "30px" : "0"}>
            <Box>
              <Text fontWeight={600}>Overview</Text>
              <UnorderedList listStyleType="none" marginLeft={0} marginTop={3}>
                <ListItem>About</ListItem>
                <ListItem>Services</ListItem>
                <ListItem>Dev.to</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Text fontWeight={600}>Explore</Text>
              <UnorderedList listStyleType="none" marginLeft={0} marginTop={3}>
                <ListItem>Blog</ListItem>
                <ListItem>Medium</ListItem>
                <ListItem>Dev.to</ListItem>
              </UnorderedList>
            </Box>

            <Box>
              <Text fontWeight={600}>More</Text>
              <UnorderedList listStyleType="none" marginLeft={0} marginTop={3}>
                <ListItem>Blog</ListItem>
                <ListItem>Medium</ListItem>
                <ListItem>Dev.to</ListItem>
              </UnorderedList>
            </Box>
          </Flex>

          <Box marginTop={MediumScreen ? "30px" : "0"}>
            <Text fontWeight={600}>Follow Me</Text>
            <Flex marginTop={3} gap={2}>
              <Button colorScheme="facebook" size="sm">
                <Icon as={FaFacebookF} />
              </Button>
              <Button colorScheme="twitter" size="sm">
                <Icon as={FaTwitter} />
              </Button>
              <Button colorScheme="pink" size="sm">
                <Icon as={FaInstagram} />
              </Button>
              <Button colorScheme="whatsapp" size="sm">
                <Icon as={FaWhatsapp} />
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Text marginTop={20}>&copy; Satria Herman 2022</Text>
      </Container>
    </Box>
  );
}
