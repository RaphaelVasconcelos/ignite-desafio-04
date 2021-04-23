import { Flex } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
  return (
    <Flex as="header" h="110" w="100%" p="8" bg="gray.50" justify="center">
      <Image src="/images/logo.png" alt="logo" width={184.06} height={45.92} />
    </Flex>
  );
}
