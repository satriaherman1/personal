import { Box, Flex, Heading, Icon, ListItem, Text, UnorderedList } from "@chakra-ui/react";

import { FaWhatsapp, FaInstagram, FaFacebook, FaLinkedin, FaGithub, FaMedium } from "react-icons/fa";

export default function ContactInformation() {
  return (
    <>
      <Heading as="h3" fontSize="xl" textAlign="center" color="white">
        Contact Information
      </Heading>

      <UnorderedList listStyleType="none" color="white" marginTop={9} display="flex" flexDirection="column" rowGap={4}>
        <ListItem as="a" href="https://api.whatsapp.com/send?phone=+628976121070" display="flex" alignItems="center">
          <Icon as={FaWhatsapp} fontSize="20px" />
          <Text marginLeft={3}>08976121070</Text>
        </ListItem>
        <ListItem as="a" href="https://instagram.com/_satria_herman/" display="flex" alignItems="center">
          <Icon as={FaInstagram} fontSize="20px" />
          <Text marginLeft={3}>_satria_herman</Text>
        </ListItem>
        <ListItem as="a" href="https://facebook.com/satria.herman.9465" display="flex" alignItems="center">
          <Icon as={FaFacebook} fontSize="20px" />
          <Text marginLeft={3}>Satria Herman</Text>
        </ListItem>
      </UnorderedList>

      <Flex gap={3} color="white" marginTop={9} paddingLeft={4}>
        <Box as="a" href="https://www.linkedin.com/in/muhammad-satria-herman/" padding="10px" lineHeight="0" bg="blue.600" rounded="lg">
          <Icon as={FaLinkedin} fontSize="20px" />
        </Box>
        <Box as="a" href="https://www.github.com/satriaherman1/" padding="10px" lineHeight="0" bg="blue.600" rounded="lg">
          <Icon as={FaGithub} fontSize="20px" />
        </Box>
        <Box as="a" href="https://www.github.com/satriaherman1/" padding="10px" lineHeight="0" bg="blue.600" rounded="lg">
          <Icon as={FaMedium} fontSize="20px" />
        </Box>
      </Flex>
    </>
  );
}
