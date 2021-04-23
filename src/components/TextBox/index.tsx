import { Box, Flex, Text } from "@chakra-ui/react";

export function TextBox(){
  return(
    <Flex w="100%" align="center" justify="center">
        <Box
          p="8"
          color="#47585B"
          fontWeight="500"
          fontSize={["24px", "36px"]}
          lineHeight="54px"
          justify="center"
          align="center"
        >
          <Text>
            Vamos nessa?
            <br />
            Então escolha seu continente
          </Text>
        </Box>
      </Flex>
  );
}