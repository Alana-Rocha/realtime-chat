import { Flex, Heading } from "@chakra-ui/react";
import { FC, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { Button } from "../Button";
import { Input } from "../Input";

type ChatProps = {
  socket: Socket | null;
};

export const Chat: FC<ChatProps> = ({ socket }) => {
  const messageRef = useRef<HTMLInputElement>();
  const [messageList, setMessageList] = useState([]);

  const handleSubmit = () => {
    const message = messageRef.current?.value;
    if (!message?.trim) return;
  };

  return (
    <Flex flexDir="column" gap={6} alignItems="center" justifyContent="center">
      <Heading size="2xl" justifyContent="center" color="#fff">
        Chat
      </Heading>
      <Flex gap={2} flexDir="column">
        <Input type="text" placeholder="Mensagem" />
        <Button w="100%" onClick={() => handleSubmit()}>
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};
