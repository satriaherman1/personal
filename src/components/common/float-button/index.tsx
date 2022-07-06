import { ChevronLeftIcon, ChevronRightIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Icon, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import "./styles.css";

export default function FloatButton(props: IFloatButton) {
  const { buttonList, active } = props;
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("#ececec99", "#19202799");
  const darkButtonBg = useColorModeValue("gray.700", "#2A4365");
  const hideButtonBg = useColorModeValue("green.500", "#19202799");

  const [hideFloatButton, setHideFloatButton] = useState<boolean>(false);

  const handleVisibility = () => {
    setHideFloatButton(!hideFloatButton);
  };

  return (
    <Flex zIndex={999} padding="10px 20px" gap={3} position="fixed" alignItems="center" bottom="5vh" left="50%" className={`float-button-container ${hideFloatButton && "hide"}`} background={bg}>
      <Box as="button" className="hide-button" bg={hideButtonBg} onClick={handleVisibility}>
        {hideFloatButton ? <ChevronLeftIcon /> : <ChevronRightIcon />}
      </Box>
      {buttonList.map((btn) => (
        <a href={`#${btn.name}`} className={`float-button ${btn.name === active && "active"}`} onClick={btn.action}>
          {btn.children}
        </a>
      ))}

      <Box as="button" bg={darkButtonBg} className="float-button color-mode-button" onClick={toggleColorMode}>
        {colorMode === "dark" ? <SunIcon color="#fffff" /> : <MoonIcon color="#ffffff" />}
      </Box>
    </Flex>
  );
}
