import { Flex } from "@chakra-ui/react";
import { Chat } from "./components/Chat/Chat";
import { Join } from "./components/Join/Join";

export const App = () => {
  // const [count, setCount] = useState(0);

  return (
    <Flex
      bgColor="#050505"
      flexDir="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      gap={10}
    >
      <Join />
      <Chat />
    </Flex>
  );
};
