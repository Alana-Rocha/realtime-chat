import { Flex, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import io from "socket.io-client";
import { Button } from "../Button";
import { Input } from "../Input";

interface JoinProps {
  setChatVisibility: (visible: boolean) => void;
}

export const Join = ({ setChatVisibility }: JoinProps) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    if (usernameRef.current) {
      const username = usernameRef.current.value;
      if (username.trim()) return;
      const socket = io("http://localhost:3001");
      setChatVisibility(true);
    }
  };
  return (
    <Flex flexDir="column" gap={6} alignItems="center" justifyContent="center">
      <Heading size="2xl" justifyContent="center" color="#fff">
        Join
      </Heading>
      <Flex gap={2} flexDir="column">
        <Input type="text" placeholder="Nome de Usuário" ref={usernameRef} />
        <Button w="100%" onClick={() => handleSubmit()}>
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};
