import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";

type InputProps = {
  label?: string;
  isLoading?: boolean;
  maxW?: string | number;
};

export const Input = ({
  id,
  label,
  maxW,
  isRequired,
  ...rest
}: InputPropsChakra & InputProps) => {
  return (
    <FormControl>
      <FormLabel mb={0.5} fontSize="0.9rem" fontWeight="400" w="100%">
        {label}
        <InputChakra
          type="text"
          fontSize="0.9rem"
          color="#fff"
          bgColor="#050505"
          borderRadius="4px"
          border="1px solid #fff"
          _hover={{}}
          _focusVisible={{ borderColor: "#c9c8c3" }}
          {...rest}
        />
      </FormLabel>
    </FormControl>
  );
};
