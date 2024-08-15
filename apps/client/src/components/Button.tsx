import {
  Button as ButtonChakra,
  ButtonProps as ButtonPropsChakra,
} from "@chakra-ui/react";

export const Button = ({ children, ...rest }: ButtonPropsChakra) => {
  return (
    <ButtonChakra
      py="20px"
      px={7}
      h={0}
      color="#fff"
      bgColor={"#36056e"}
      borderRadius={4}
      fontWeight="500"
      fontSize="0.9rem"
      transition=".3s"
      _hover={{ bgColor: "#210840" }}
      {...rest}
      //   maxW="200px"
    >
      {children}
    </ButtonChakra>
  );
};
