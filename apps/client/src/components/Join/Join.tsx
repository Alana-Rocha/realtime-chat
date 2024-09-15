import { Flex, Heading } from "@chakra-ui/react";
import { useRef } from "react";
import io, { Socket } from "socket.io-client";
import { Button } from "../Button";
import { Input } from "../Input";

// const PORT = process.env;
// console.log(PORT)

type JoinProps = {
  setChatVisibility: (visible: boolean) => void;
  setSocket: (socket: Socket) => void;
};

export const Join = ({ setChatVisibility, setSocket }: JoinProps) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    try {
      const username = usernameRef.current?.value;
      console.log(username);
      if (!username?.trim()) return;
      const socket = io(`${"ws://192.168.18.10:3001"}`);
      socket.emit("set_username", username);
      setSocket(socket);
      setChatVisibility(true);
    } catch (error) {
      console.log(error);
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
