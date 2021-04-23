import { Flex, Divider as ChackraDivider } from "@chakra-ui/react";

export function Divider(){
  return(
    <Flex w="100%" align="center" justify="center">
        <ChackraDivider w="90px" border="2px" borderColor="#47585B" />
      </Flex>
  );
}