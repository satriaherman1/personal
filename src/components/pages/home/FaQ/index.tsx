import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";

export default function FaqSection() {
  return (
    <Accordion defaultIndex={[0]} allowMultiple>
      <AccordionItem border="none" paddingY={1}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight={600}>Have I pay for hourly or by projects?</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>For My Service you can pay me by project or hourly. it's up to you</AccordionPanel>
      </AccordionItem>

      <AccordionItem border="none" paddingY={1}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight={600}>Can I request for revision out of agreement before?</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Yes, you can request for revision out of agreement. But you need to pay more for that revision</AccordionPanel>
      </AccordionItem>

      <AccordionItem border="none" paddingY={1}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight={600}>Can I Make request outside your skill scope?</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Yes, you can. But i need to validate your request before i accept your project.</AccordionPanel>
      </AccordionItem>

      <AccordionItem border="none" paddingY={1}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight={600}>Can I request for revision out of agreement before?</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Yes, you can request for revision out of agreement. But you need to pay more for that revision</AccordionPanel>
      </AccordionItem>

      <AccordionItem border="none" paddingY={1}>
        <h2>
          <AccordionButton>
            <Box flex="1" textAlign="left">
              <Text fontWeight={600}>Can I request for revision out of agreement before?</Text>
            </Box>
            <AccordionIcon />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>Yes, you can request for revision out of agreement. But you need to pay more for that revision</AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
}
