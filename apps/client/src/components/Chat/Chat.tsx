import {
  Heading,
  Card,
  ButtonGroup,
  CardBody,
  CardFooter,
  Divider,
  Stack,
  Flex,
  Image,
  Text,
  Avatar,
} from "@chakra-ui/react";
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
      console.log(message);
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

  return (
    <Card maxW="sm">
      <CardBody>
        <Stack mt="0" spacing="3">
          <Flex gap={2} alignItems="center">
            <Avatar
              size="sm"
              name="Ryan Florence"
              src="https://bit.ly/ryan-florence"
            />{" "}
            <Heading size="md">Alana</Heading>
          </Flex>
          {/* <Heading size="md">{messageList[0]?.author}</Heading> */}
          <Text>{messageList[0]?.text}</Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Input placeholder="Mensagem"></Input>
      </CardFooter>
    </Card>
  );
};
