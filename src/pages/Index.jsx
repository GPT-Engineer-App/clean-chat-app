import { Box, Button, Container, Flex, Heading, IconButton, Input, Stack, Text, useColorModeValue, VStack } from "@chakra-ui/react";
import { FaPaperPlane, FaRegSmile } from "react-icons/fa";

const Index = () => {
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = "blue.500";

  return (
    <Container maxW="container.xl" p={0} height="100vh">
      <Flex height="100%" direction="column">
        {/* Header */}
        <Flex bg={bgColor} p={4} align="center" boxShadow="sm">
          <Heading size="md" color={textColor} flex="1">
            ChatApp
          </Heading>
          <IconButton icon={<FaRegSmile />} aria-label="Emojis" variant="ghost" />
        </Flex>

        {/* Message Area */}
        <VStack spacing={4} overflowY="auto" flex="1" p={4} bg={bgColor}>
          <Box w="full" p={4} bg="white" boxShadow="base" borderRadius="lg">
            <Text color={textColor}>Hello! How can we help you today?</Text>
          </Box>
          {/* More messages */}
        </VStack>

        {/* Input Area */}
        <Flex p={4} bg={bgColor} align="center">
          <Input placeholder="Type a message..." flex="1" mr={2} />
          <Button leftIcon={<FaPaperPlane />} colorScheme={accentColor} px={8}>
            Send
          </Button>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Index;
