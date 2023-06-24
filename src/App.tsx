import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useEffect, useState } from "react";
import PlatformSelectors from "./component/PlatformSelectors";
import { GamePaltform } from "./hooks/usePlatform";

function App() {
  const [selectedGenre, setSelectedGenre] = useState({});
  const [selectedPlatform, setSelectedPlatform] = useState({});

  const onselected = (genre: any) => {
    console.log(genre);
    setSelectedGenre(genre);
  };

  const onselectedPlatform = (platform: any) => {
    setSelectedPlatform(platform);
  };

  useEffect(() => {
    console.log(selectedGenre);
  });
  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem w="100%" area={"nav"}>
          <Navbar />
        </GridItem>
        <Show above="lg">
          <GridItem w="100%" area={"aside"} paddingX={5}>
            <GenreList onselected={onselected} selectedGenre={selectedGenre} />
          </GridItem>
        </Show>
        <GridItem w="100%" area={"main"} padding={"20px"}>
          <PlatformSelectors
            onselectedPlatform={onselectedPlatform}
            selectedplatform={selectedPlatform}
          />
          <GameGrid
            seleectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
