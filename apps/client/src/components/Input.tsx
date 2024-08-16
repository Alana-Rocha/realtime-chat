import {
  FormControl,
  FormLabel,
  Input as InputChakra,
  InputProps as InputPropsChakra,
} from "@chakra-ui/react";
import { forwardRef } from "react";

type InputProps = {
  label?: string;
  isLoading?: boolean;
  maxW?: string | number;
} & InputPropsChakra;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, isLoading, maxW, ...rest }, ref) => {
    return (
      <FormControl>
        <FormLabel mb={0.5} fontSize="0.9rem" fontWeight="400" w="100%">
          {label}
          <InputChakra
            ref={ref}
            type="text"
            fontSize="0.9rem"
            color="#fff"
            bgColor="#050505"
            borderRadius="4px"
            border="1px solid #fff"
            _hover={{}}
            // onKeyDown={(e) => {
            //   if (e.key === "Enter" && btnOnSubmit )
            //     btnOnSubmit();
            // }}
            _focusVisible={{ borderColor: "#c9c8c3" }}
            {...rest}
          />
        </FormLabel>
      </FormControl>
    );
  }
);
