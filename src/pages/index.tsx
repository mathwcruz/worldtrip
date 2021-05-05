import { Flex, Heading } from "@chakra-ui/react";

import Head from "next/head";

import { Header } from "../components/Header";
import { Banner } from "../components/Banner";
import { Particulars } from "../components/Particulars";
import { Divider } from "../components/Divider";
import { Slider } from "../components/Slider";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - worldtrip</title>
      </Head>
      <Flex direction="column">
        <Header />
        <Banner />
        <Particulars />
        <Divider />
        <Heading
          textAlign="center"
          fontWeight="500"
          mb={["5", "14"]}
          fontSize={["lg", "3xl", "4xl"]}
        >
          Vamos nessa? <br /> Então escolha o seu continente
        </Heading>
        <Slider />
      </Flex>
    </>
  );
};
