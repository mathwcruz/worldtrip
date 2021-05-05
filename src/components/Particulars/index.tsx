import { Grid, GridItem } from "@chakra-ui/react";
import { Particular } from "./Particular";

export function Particulars() {
  return (
    <Grid
      templateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr", "repeat(5, 1fr)"]}
      w="100%"
      justifyContent="space-between"
      align="center"
      mt={["10", "32"]}
      mx="auto"
      maxW="1160px"
      gap={[1, 5]}
    >
      <GridItem>
        <Particular icon="cocktail" text="vida noturna" />
      </GridItem>
      <GridItem>
        <Particular icon="surf" text="praia" />
      </GridItem>
      <GridItem>
        <Particular icon="building" text="moderno" />
      </GridItem>
      <GridItem>
        <Particular icon="museum" text="clássico" />
      </GridItem>
      <GridItem colSpan={[2, 2, 2, 1]}>
        <Particular icon="earth" text="e mais..." />
      </GridItem>
    </Grid>
  );
};
