import { Flex, Heading } from "@chakra-ui/react";
import { Button } from "../Button";
import { Input } from "../Input";

export const Join = () => {
  return (
    <Flex flexDir="column" gap={6} alignItems="center" justifyContent="center">
      <Heading size="2xl" justifyContent="center" color="#fff">
        Join
      </Heading>
      <Flex gap={2} flexDir="column">
        <Input type="text" placeholder="Nome de Usuário" />
        <Button w="100%">Entrar</Button>
      </Flex>
    </Flex>
  );
};
