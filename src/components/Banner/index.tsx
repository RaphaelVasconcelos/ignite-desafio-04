import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface BannerProps {
  isWideVersion: boolean;
}

export function Banner({ isWideVersion }: BannerProps) {
  return (
    <Flex
      w="100%"
      bgImage="url('/images/Background.png')"
      justify="space-between"
    >
      <Box
        py="8"
        px={["8", "10"]}
        fontSize="36px"
        color="#F5F8FA"
        lineHeight="54px"
        fontWeight="500"
      >
        <Text>
          5 Continentes, <br />
          infinitas possibilidades.
        </Text>
      </Box>

      {isWideVersion && (
        <Image src="/images/Airplane.png" width={417.15} height={270.74} />
      )}
    </Flex>
  );
}
