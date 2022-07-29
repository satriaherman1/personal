import { Box, Flex, Heading, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import "./styles.css";

export default function WorkExperience() {
  const [MediumScreen] = useMediaQuery("(min-width: 768px)");
  const bg = useColorModeValue("gray.100", "#253240");
  const divider = useColorModeValue("#0a0a0a", "#ffffff");
  const tealSchemes = useColorModeValue("teal", "teal.200");

  return (
    <Flex gap={MediumScreen ? 10 : 3} justifyContent="center" marginY={6}>
      <Box borderRight={`1px dashed ${divider}`} padding="0px 19px 19px 0" marginTop={6}>
        <Box position="relative" height="50%">
          <Text fontWeight="semibold">March 2021 - May 2021</Text>
          <span className="work-list-bullet"></span>
        </Box>
        <Box position="relative" marginTop={MediumScreen ? 9 : "105px"}>
          <Text fontWeight="semibold">August 2021 - Now</Text>
          <span className="work-list-bullet"></span>
        </Box>
      </Box>
      <Box display="flex" flexDirection="column" gap={5}>
        <Box flexBasis="80%" bg={bg} padding="17px 22px" rounded="md" maxWidth="500px">
          <Heading as="h3" size="md">
            Web Developer Intern -{" "}
            <Box as="a" href="https://brainmatics.com" color={tealSchemes} fontSize="sm">
              Brainmatics
            </Box>
          </Heading>
          <Text marginTop={3}>
            On March 2021, I apply at{" "}
            <a href="https://brainmatics.com">
              <Box as="span" fontWeight={600}>
                Brainmatics
              </Box>
            </a>{" "}
            as a Web Developer Internship. When i was intern my team and i develop{" "}
            <a href="https://bos.polri.go.id">
              <Box as="span" fontWeight={600}>
                Binmas Online System
              </Box>
            </a>{" "}
            used by Local Police in Indonesia. We using Laravel 7|8, PostgreSQL and Jquery to build this application
          </Text>
        </Box>
        <Box flexBasis="80%" bg={bg} padding="17px 22px" rounded="md" maxWidth="500px">
          <Heading as="h3" size="md">
            Frontend Web Developer -
            <Box as="a" href="https://clodeo.com" color={tealSchemes} fontSize="sm" marginLeft={1}>
              Clodeo
            </Box>
          </Heading>
          <Text marginTop={3}>
            Since August 2021 I working at{" "}
            <a href="https://clodeo.com">
              <Box as="span" fontWeight={600}>
                Clodeo
              </Box>
            </a>{" "}
            as a Frontend Web Developer. My Team and I using Reactjs and Angular to Develop{" "}
            <a href="https://clodeo.com">
              <Box as="span" fontWeight={600}>
                Shipdeo
              </Box>
            </a>{" "}
            Website.
          </Text>
        </Box>
      </Box>
    </Flex>
  );
}
