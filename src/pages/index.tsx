import {
  Box,
  Flex,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Image from "next/image";

import { Banner } from "../components/Banner";
import { Divider } from "../components/Divider";
import { Header } from "../components/Header";
import { LifeStyles } from "../components/LifeStyles";
import { SwiperComponent } from "../components/SwiperComponent";
import { TextBox } from "../components/TextBox";



export default function Home() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      maxWidth={1440}
      w="100%"
      minHeight="100vh"
      align="center"
      justify="center"
      flexDirection="column"
    >
      <Header />
      <Banner isWideVersion={isWideVersion} />
      <LifeStyles isWideVersion={isWideVersion} />
      <Divider/>
      <TextBox/>
      <SwiperComponent/>
    </Flex>
  );
}
