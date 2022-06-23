import { Box, Button, Container, Flex, Heading, Icon, Image, ListItem, Tab, TabList, TabPanel, TabPanels, Tabs, Text, UnorderedList, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
// import NavigationDrawer from "@src/components/pages/home/navigation-drawer";
import { BosImg, BosPreview, MeImage, ShipdeoLogo } from "@src/config/pathImage";
import { Link } from "react-router-dom";
import { FaRegAddressBook, FaRegUser, FaRegFolder, FaArrowRight, FaRegListAlt, FaNodeJs, FaWordpress, FaCheck } from "react-icons/fa";
import WorkExperience from "@src/components/pages/home/work-experience";
import { DownloadIcon } from "@chakra-ui/icons";
import FloatButton from "@src/components/common/float-button";
import { useState } from "react";
import SimpleCard from "@src/components/common/simple-card";
import ServiceCard from "@src/components/pages/home/service-card";
import { BiCodeBlock } from "react-icons/bi";
import ParticleBg from "@src/layout/particle";
import FaqSection from "@src/components/pages/home/FaQ";
import ContactInformation from "@src/components/pages/home/contact-information";
import Feedback from "@src/components/pages/home/feedback";

export default function Home() {
  const [LargeScreen] = useMediaQuery("(min-width: 1024px)");
  const [activeFloatButton, setActiveFloatButton] = useState<string>("profile");
  const bg = useColorModeValue("#ffffff", "#253240");
  const shadow = useColorModeValue("#cdcdcda3", "none");
  const blueSchemes = useColorModeValue("blue.500", "#90cef4");
  const serviceBg = useColorModeValue("white", "gray.700");
  const boxShadow = "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(39, 39, 39, 0.15) 0px 4px 20px 0px";

  const floatButtonList = [
    {
      name: "profile",
      children: <Icon as={FaRegUser} color="inherit" fontSize="20px" />,
      action: () => setActiveFloatButton("profile"),
    },
    {
      name: "experience",
      children: <Icon as={FaRegAddressBook} color="inherit" fontSize="20px" />,
      action: () => setActiveFloatButton("experience"),
    },
    {
      name: "portfolio",
      children: <Icon as={FaRegFolder} color="inherit" fontSize="20px" />,
      action: () => setActiveFloatButton("portfolio"),
    },
    {
      name: "service",
      children: <Icon as={FaRegListAlt} color="inherit" fontSize="20px" />,
      action: () => setActiveFloatButton("service"),
    },
  ];

  const redirectWa = () => {
    return window.open("https://wa.me/+628976121070?text=Hi , i am interested to do a job for you . can we do a project together?", "_blank");
  };

  return (
    <>
      <ParticleBg />
      <Container maxW="1200px" position="relative">
        {/* <Flex paddingY={LargeScreen ? 8 : 3} h="fit-content" w="full" alignItems="center" justifyContent="space-between">
          <Box>
            <Heading as="h3" size="md">
              Satria
            </Heading>
          </Box>
        </Flex> */}

        <Flex id="profile" alignItems="center" columnGap={10} rowGap={4} paddingY={LargeScreen ? "60px" : 8} flexDirection={!LargeScreen ? "column" : "row"} justifyContent="space-between">
          <Image flexBasis={LargeScreen ? "50%" : "100%"} borderRadius="20px" width="100%" maxWidth={LargeScreen ? "410px" : "unset"} src={MeImage} />
          <Box flexBasis={LargeScreen ? "50%" : "100%"}>
            <Text fontWeight="600" color={blueSchemes} colorScheme="blue">
              Hello, I am
            </Text>
            <Heading as="h2">Muhammad Satria Herman</Heading>
            <Text marginTop={6}>
              I'm Frontend Developer that ever worked on 2 companies <a href="">Clodeo</a> and <a href="">Brainmatics</a>. I've been working as a developer for 1 years and i have a such skills like :{" "}
              <b>React</b>, <b>PHP</b>, <b>JavaScript</b>, <b>Nodejs</b>, <b>Laravel</b>. I also working as Freelance Frontend Developer for around 2 years
            </Text>

            <Flex columnGap={3}>
              <Button onClick={() => window.open("https://satria-herman.web.app/doc/cv.pdf", "download")} leftIcon={<DownloadIcon />} marginTop={5} colorScheme="blue">
                Download CV
              </Button>
              <Button onClick={redirectWa} variant="outline" marginTop={5} colorScheme="blue">
                Contact Me
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Box paddingY="50px" id="experience">
          <Text textAlign="center">My Experience</Text>
          <Heading textAlign="center" as="h2" size="lg">
            Experience
          </Heading>

          {/* <Flex gap={5} flexDirection={LargeScreen ? "row" : "column"} justifyContent="center" marginTop={15}>
            <Box boxShadow="0 5px 15px #dce4e6" padding="20px 10px" width="full" maxWidth="500px">
              <Heading as="h3" size="md" textAlign="center" color={blueSchemes}>
                {" "}
                Education
              </Heading>

              <UnorderedList listStyleType="none" marginTop={6} display="flex" flexDirection="column" rowGap={3}>
                <ListItem>
                  <Box display="flex" alignItems="center" columnGap={2}>
                    <Icon as={FaCheckCircle} color={blueSchemes} />
                    <Text fontWeight="semibold">SDN 4 Srobyong</Text>
                  </Box>
                  <Box marginLeft={6} marginTop={1}>
                    <Text color="gray.600">2009 - 2015</Text>
                  </Box>
                </ListItem>
                <ListItem>
                  <Box display="flex" alignItems="center" columnGap={2}>
                    <Icon as={FaCheckCircle} color={blueSchemes} />
                    <Text fontWeight="semibold">SMPN 1 Mlonggo</Text>
                  </Box>
                  <Box marginLeft={6} marginTop={1}>
                    <Text color="gray.600">2009 - 2015</Text>
                  </Box>
                </ListItem>
              </UnorderedList>
            </Box>
            <Box boxShadow="0 1px 15px #dce4e6" padding="20px 25px" width="full" maxWidth="500px" color={blueSchemes}>
              <Heading as="h3" size="md" textAlign="center">
                {" "}
                Work
              </Heading>
            </Box>
          </Flex> */}

          <Tabs variant="soft-rounded" margin="20px auto" colorScheme="gray" paddingX="0">
            <TabList padding={1} color="white" justifyContent="center" width="fit-content" rounded="full" marginX="auto">
              <Tab>Work Experience</Tab>
              <Tab>Education</Tab>
            </TabList>

            <TabPanels paddingX="0">
              <TabPanel>
                <WorkExperience />
              </TabPanel>
              <TabPanel>
                <p>one!</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Box>

        <Box padding="30px 0" id="portfolio">
          <Heading textAlign="center" as="h2" size="lg">
            Portfolio
          </Heading>

          <Flex marginTop={10} gap={8} flexDirection={LargeScreen ? "row" : "column"}>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color={blueSchemes}>
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={BosPreview}
                  title="Binmas Online System"
                />
              </Link>
            </Box>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color={blueSchemes}>
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={ShipdeoLogo}
                  title="Shipdeo Website"
                />
              </Link>
            </Box>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <SimpleCard
                  bottomAction={
                    <Text display="flex" alignItems="center" marginTop={2} color={blueSchemes}>
                      Detail <Icon marginLeft={2} as={FaArrowRight}></Icon>
                    </Text>
                  }
                  image={BosImg}
                  title="Binmas Online System"
                />
              </Link>
            </Box>
          </Flex>
        </Box>

        <Box id="service" padding={LargeScreen ? "120px 0" : "40px 0"}>
          <Text textAlign="center">Service</Text>

          <Heading textAlign="center" as="h2" size="lg">
            My Services
          </Heading>

          <Flex marginTop={10} gap={8} flexDirection={LargeScreen ? "row" : "column"}>
            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <ServiceCard
                  imageBg="#3182CE"
                  icon={<Icon as={BiCodeBlock} lineHeight="0" fontSize="30px" color="white" />}
                  description="Converting UI Design to online Website using HTML,CSS,JS or React"
                  title="Convert Design to Website"
                />
              </Link>
            </Box>

            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <ServiceCard
                  imageBg="#319795"
                  icon={<Icon as={FaNodeJs} lineHeight="0" fontSize="30px" color="white" />}
                  title="Backend Development"
                  description="Backend Developemnt Using Laravel or Nodejs - Express"
                />
              </Link>
            </Box>

            <Box flexBasis={LargeScreen ? "33%" : "100%"}>
              <Link to="/portfolio">
                <ServiceCard
                  imageBg="#E53E3E"
                  icon={<Icon as={FaWordpress} lineHeight="0" fontSize="30px" color="white" />}
                  title="Wordpress Development"
                  description="Website Development using CMS Wordpress Technology"
                />
              </Link>
            </Box>
          </Flex>
        </Box>
      </Container>

      <Box marginTop={8} paddingY={10} bg="#253240" position="relative" height="350px">
        <Container maxW="1200px">
          <Heading as="h2" fontSize="4xl" color="white">
            Contact Us
          </Heading>
          <Text marginTop={2} color="white" maxWidth="400px">
            Let's do a project together with me. Send me an email and I will do the best for your project
          </Text>

          <Flex marginY={12} gap={6} flexDirection={LargeScreen ? "row" : "column"}>
            <Box bg={serviceBg} padding="20px 22px" rounded="md" width="100%" boxShadow={boxShadow}>
              <FaqSection />
            </Box>
            <Box padding="35px 22px" rounded="md" bg="blue.700" flexBasis={LargeScreen ? "40%" : "100%"} width="100%" boxShadow={boxShadow}>
              <ContactInformation />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box padding={LargeScreen ? "350px 0 80px 0" : "50px 0"}>
        <Text textAlign="center">Skills</Text>

        <Heading textAlign="center" as="h2" size="lg">
          My Abilities
        </Heading>
        <Flex gap={9} marginTop={12} justifyContent="center" flexDirection={LargeScreen ? "row" : "column"}>
          <Box width="full" background={bg} rounded="md" padding="25px 20px" boxShadow={boxShadow} maxWidth="400px">
            <Heading as="h2" fontSize="2xl" color={blueSchemes} textAlign="center">
              Frontend Dev
            </Heading>

            <Text textAlign="center" margin="10px 0 25px 0">
              I have 1 Years Experience as a Frontend Developer
            </Text>

            <UnorderedList listStyleType="none" display="flex" flexWrap="wrap">
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Reactjs</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Bootstrap</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Javascript</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Tailwind</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Chakra UI</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>SASS</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Ant Design</Text>
              </ListItem>
            </UnorderedList>
          </Box>
          <Box width="full" background={bg} rounded="md" padding="25px 20px" boxShadow={boxShadow} maxWidth="400px">
            <Heading as="h2" fontSize="2xl" color={blueSchemes} textAlign="center">
              Backend Dev
            </Heading>

            <Text textAlign="center" margin="10px 0 25px 0">
              I have 3 months Experience as a Backend Developer
            </Text>

            <UnorderedList listStyleType="none" display="flex" flexWrap="wrap">
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Laravel</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Codeigniter</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>Nodejs</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>MongoDB</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>PostgreSQL</Text>
              </ListItem>
              <ListItem flexBasis="50%" display="flex" alignItems="center">
                <Icon as={FaCheck} />
                <Text marginLeft={3}>MySQL</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Flex>
      </Box>

      <Box position="relative">
        <Feedback />
      </Box>

      <FloatButton active={activeFloatButton} buttonList={floatButtonList} />
    </>
  );
}
