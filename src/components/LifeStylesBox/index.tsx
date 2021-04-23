import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";

interface LifeStylesBoxProps {
  text: string;
  image: string;
  isWideVersion: boolean;
}

export function LifeStylesBox({
  text,
  image,
  isWideVersion,
}: LifeStylesBoxProps) {
  return (
    <Flex flexDirection="row" align="center" mr={6}>
      {!isWideVersion && (
        <Box bg="#FFBA08" w={2} h={2} mx={2} borderRadius={50}></Box>
      )}
      <Box
        color="#47585B"
        fontWeight="600"
        fontSize={["20px", "24px"]}
        lineHeight="36px"
        justify="center"
        align="center"
      >
        {isWideVersion && <Image src={image} width={85} height={85} />}
        <Text>{text}</Text>
      </Box>
    </Flex>
  );
}
