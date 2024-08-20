import { Flex, Heading } from "@chakra-ui/react";
import { FC, useEffect, useRef, useState } from "react";
import { Socket } from "socket.io-client";
import { Button } from "../Button";
import { Input } from "../Input";

type ChatProps = {
  socket: Socket | null;
};

type Message = {
  text: string;
  author: string;
};

export const Chat: FC<ChatProps> = ({ socket }) => {
  const messageRef = useRef<HTMLInputElement>(null);
  const [messageList, setMessageList] = useState<Message[]>([]);

  useEffect(() => {
    socket?.on("receive_message", (data) => {
      setMessageList((current) => [...current, data]);
    });

    return () => {
      socket?.off("receive_message");
    };
  }, [socket]);

  const handleSubmit = () => {
    try {
      const message = messageRef.current?.value;
      if (!message?.trim) return;
      socket?.emit("message", message);
      clearInput();
    } catch (error) {
      console.error(error);
    }
  };

  const clearInput = () => {
    if (messageRef.current) {
      messageRef.current.value = "";
    }
  };

  // console.log(mew)
  return (
    <Flex flexDir="column" gap={6} alignItems="center" justifyContent="center">
      <Heading size="2xl" justifyContent="center" color="#fff">
        Chat
      </Heading>
      {messageList.map((message, index) => (
        <Heading key={index}>
          {message.author}: {message.text}
        </Heading>
      ))}
      <Flex gap={2} flexDir="column">
        <Input type="text" placeholder="Mensagem" ref={messageRef} />
        <Button w="100%" onClick={() => handleSubmit()}>
          Enviar
        </Button>
      </Flex>
    </Flex>
  );
};
