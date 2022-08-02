import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure, useMediaQuery } from "@chakra-ui/react";
import { useState } from "react";

export default function Announcement() {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [MediumScreen] = useMediaQuery("(min-width: 768px)");

  const onClose = () => setIsOpen(!isOpen);

  return (
    <Modal size={MediumScreen ? "xl" : "sm"} onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Satria Blog</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <iframe src="https://blog.satriaherman.com" width="100%" height={MediumScreen ? "500px" : "400px"}></iframe>

          <Text marginTop={3}>Visit My Blog to get some information about Programming</Text>
        </ModalBody>
        <ModalFooter>
          <Flex gap={3}>
            <Button onClick={onClose}>Close</Button>
            <a href="https://blog.satriaherman.com">
              <Button colorScheme="red">Visit</Button>
            </a>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
