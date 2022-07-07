import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import "./styles.css";

export default function Loading() {
  const blueSchemes = useColorModeValue("blue.500", "#90cef4");

  return (
    <Box width="100vw" height="100vh" transition="all ease in-out .3s">
      <Box as="div" className="lds-dual-ring">
        <Text whiteSpace="nowrap" position="fixed" transform="translate(-50%, -50%)" top="145%" left="60%" color="blue.500" fontSize={20} fontWeight={500}>
          Loading Page...
        </Text>
      </Box>
    </Box>
  );
}
