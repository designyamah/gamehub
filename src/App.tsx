import { Grid, GridItem, Show } from "@chakra-ui/react";

function App() {
  return (
    <>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <GridItem w="100%" h="60" bg="blue.500" colSpan={3} rowSpan={2}>
          1
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500" colSpan={2}>
          2
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          3
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          4
        </GridItem>
        <GridItem w="100%" h="10" bg="blue.500">
          5
        </GridItem>
      </Grid>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        gap={2}
      >
        <GridItem w="100%" bg="green" area={"nav"}>
          1
        </GridItem>
        <Show above="lg">
          <GridItem w="100%" bg="blue.500" area={"aside"}>
            2
          </GridItem>
        </Show>
        <GridItem w="100%" bg="yellow" area={"main"}>
          3
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
