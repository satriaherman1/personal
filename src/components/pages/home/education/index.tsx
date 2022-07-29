import { Box, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import "./styles.css";

export default function Education() {
  const [MediumScreen] = useMediaQuery("(min-width: 768px)");
  const bg = useColorModeValue("gray.100", "#253240");
  const divider = useColorModeValue("#0a0a0a", "#ffffff");

  return (
    <Flex gap={MediumScreen ? 10 : 3} justifyContent="center" marginY={6}>
      <Box borderRight={`1px dashed ${divider}`} padding="0px 19px 19px 0" marginTop={6}>
        <Box position="relative" height="20%">
          <Text fontWeight="semibold">2008 - 2009</Text>
          <span className="work-list-bullet"></span>
        </Box>
        <Box position="relative" height="20%" marginTop={MediumScreen ? 6 : "12px"}>
          <Text fontWeight="semibold">2009 - 2015</Text>
          <span className="work-list-bullet"></span>
        </Box>
        <Box position="relative" height="20%" marginTop={MediumScreen ? 9 : "58px"}>
          <Text fontWeight="semibold">2015 - 2018</Text>
          <span className="work-list-bullet"></span>
        </Box>
        <Box position="relative" height="20%" marginTop={MediumScreen ? 9 : "58px"}>
          <Text fontWeight="semibold">2018 - 2021</Text>
          <span className="work-list-bullet"></span>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={5}>
        <Box flexBasis="80%" bg={bg} padding="17px 22px" rounded="md" maxWidth="500px">
          <Heading as="h3" size="md">
            Nursery School
          </Heading>
          <Text marginTop={3}>TK AL-ISLAM 2</Text>
        </Box>
        <Box flexBasis="80%" bg={bg} padding="17px 22px" rounded="md" maxWidth="500px">
          <Heading as="h3" size="md">
            Elementary School
          </Heading>
          <Text marginTop={3}>SD Negeri 4 Srobyong</Text>
        </Box>
        <Box flexBasis="80%" bg={bg} padding="17px 22px" rounded="md" maxWidth="500px">
          <Heading as="h3" size="md">
            Junior High School
          </Heading>
          <Text marginTop={3}>SMP Negeri 1 Mlonggo</Text>
        </Box>
        <Box flexBasis="80%" bg={bg} padding="17px 22px" rounded="md" maxWidth="500px">
          <Heading as="h3" size="md">
            Senior High School
          </Heading>
          <Text marginTop={3}>SMK Negeri 3 Jepara</Text>
        </Box>
      </Box>
    </Flex>
  );
}
