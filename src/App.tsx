import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./component/Navbar";

function App() {
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
      >
        <GridItem w="100%" area={"nav"}>
          <Navbar />
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
