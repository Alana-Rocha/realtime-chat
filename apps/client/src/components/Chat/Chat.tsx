import { Flex, Heading } from "@chakra-ui/react";
import { Button } from "../Button";
import { Input } from "../Input";

export const Chat = () => {
  return (
    <Flex flexDir="column" gap={6} alignItems="center" justifyContent="center">
      <Heading size="2xl" justifyContent="center" color="#fff">
        Chat
      </Heading>
      <Flex gap={2} flexDir="column">
        <Input type="text" placeholder="Mensagem" />
        <Button w="100%">Enviar</Button>
      </Flex>
    </Flex>
  );
};
