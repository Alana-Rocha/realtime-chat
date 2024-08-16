import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { Chat } from "./components/Chat/Chat";
import { Join } from "./components/Join/Join";

export const App = () => {
  const [chatVisibility, setChatVisibility] = useState(false);

  return (
    <Flex
      bgColor="#050505"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={10}
    >
      {chatVisibility ? (
        <Chat />
      ) : (
        <Join setChatVisibility={setChatVisibility} />
      )}
    </Flex>
  );
};
