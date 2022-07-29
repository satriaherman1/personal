import { Box, Button, Flex, Heading, Image, Skeleton, Text, useColorModeValue, useMediaQuery } from "@chakra-ui/react";
import { MutableRefObject, useEffect, useRef } from "react";
import Typed from "typed.js";
import { DownloadIcon } from "@chakra-ui/icons";
import "./styles.css";

export default function HomeProfile() {
  const [LargeScreen] = useMediaQuery("(min-width: 1024px)");
  const blueSchemes = useColorModeValue("blue.500", "#90cef4");

  const redirectWa = () => {
    return window.open("https://wa.me/+628976121070?text=Hi , i am interested to do a job for you . can we do a project together?", "_blank");
  };

  const el: any = useRef();

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Muhammad Satria Herman", "Frontend Developer", "College Student"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 1500,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <Flex id="profile" alignItems="center" columnGap={10} rowGap={4} paddingY={LargeScreen ? "60px" : 8} flexDirection={!LargeScreen ? "column" : "row"} justifyContent="space-between">
      <Image
        flexBasis={LargeScreen ? "50%" : "100%"}
        borderRadius="20px"
        width="100%"
        loading="lazy"
        maxWidth={LargeScreen ? "410px" : "unset"}
        fallback={<Skeleton width="100%" height="400px" />}
        src="https://res.cloudinary.com/dbg3ckwtz/image/upload/v1657165683/me_rzvwwq.jpg"
      />
      <Box flexBasis={LargeScreen ? "50%" : "100%"}>
        <Text fontWeight="600" color={blueSchemes} colorScheme="blue">
          Hello, I am
        </Text>
        <Box as="span" fontWeight={700} fontSize={32} ref={el}></Box>
        <Text marginTop={6}>
          I'm Frontend Developer that ever worked on 2 companies <a href="">Clodeo</a> and <a href="">Brainmatics</a>. I've been working as a developer for 1 years and i have a such skills like :{" "}
          React, PHP, JavaScript, Nodejs, Laravel. I also working as Freelance Frontend Developer for around 2 years
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
  );
}
