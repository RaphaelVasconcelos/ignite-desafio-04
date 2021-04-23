import { Flex } from "@chakra-ui/react";
import { LifeStylesBox } from "../LifeStylesBox";

interface LifeStylesProps {
  isWideVersion: boolean;
}

export function LifeStyles({ isWideVersion }: LifeStylesProps) {
  return (
    <Flex w="100%" justify="space-between" wrap="wrap" p={["4", "12"]}>
      <LifeStylesBox isWideVersion={isWideVersion} text="vida noturna" image="/images/cocktail 1.png"/>
      <LifeStylesBox isWideVersion={isWideVersion} text="praia" image="/images/surf 1.png"/>
      <LifeStylesBox isWideVersion={isWideVersion} text="moderno" image="/images/building 1.png"/>
      <LifeStylesBox isWideVersion={isWideVersion} text="clássico" image="/images/museum 1.png"/>
      <LifeStylesBox isWideVersion={isWideVersion} text="e mais..." image="/images/earth 1.png"/>
    </Flex>
  );
}
