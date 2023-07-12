import {
  Button,
  Grid,
  GridItem,
  HStack,
  Heading,
  Show,
} from "@chakra-ui/react";
import Navbar from "./component/Navbar";
import GameGrid from "./component/GameGrid";
import GenreList from "./component/GenreList";
import { useEffect, useState } from "react";
import PlatformSelectors from "./component/PlatformSelectors";
import usePlatform, { GamePaltform } from "./hooks/usePlatform";
import SortSelector from "./component/SortSelector";
import GameHeading from "./component/GameHeading";

function App() {
  const [selectedGenre, setSelectedGenre] = useState({});
  const [selectedPlatform, setSelectedPlatform] = useState({});
  const [selectedSort, setSelectedSort] = useState({});
  const [selectedSerach, setSelectedSearch] = useState("");
  const [nextPage, setNextPage] = useState(1);

  const onselectedGenre = (genre: any) => {
    // console.log(genre);
    setSelectedGenre(genre);
  };

  const onselectedPlatform = (platform: any) => {
    setSelectedPlatform(platform);
  };

  const onselectedSortOrder = (sortOrder: any) => {
    setSelectedSort(sortOrder);
  };

  const onSearch = (searchText: string) => {
    setSelectedSearch(searchText);
    console.log(searchText);
  };

  const onNextPage = (nextPage: number) => {
    setNextPage(nextPage);
  };
  useEffect(() => {
    console.log(selectedGenre);
  });
  const { platform, error } = usePlatform();
  const Skeleton = [1, 2, 3, 4];
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
          <Navbar onSearch={onSearch} />
        </GridItem>
        <Show above="lg">
          <GridItem w="100%" area={"aside"} paddingX={5}>
            <GenreList
              onselectedGenre={onselectedGenre}
              selectedGenre={selectedGenre}
            />
          </GridItem>
        </Show>
        <GridItem w="100%" area={"main"} padding={"20px"}>
          <GameHeading
            selectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
          />
          <HStack spacing={"20px"} marginBottom={"20px"}>
            <PlatformSelectors
              onselectedPlatform={onselectedPlatform}
              selectedplatform={selectedPlatform}
            />
            <SortSelector
              onselectedSortOrder={onselectedSortOrder}
              selectedSort={selectedSort}
            />
            {nextPage > 1 && (
              <Button
                onClick={() => onNextPage(nextPage === 1 ? 1 : nextPage - 1)}
              >
                Previous Games
              </Button>
            )}
            {platform.length !== 0 && (
              <Button onClick={() => onNextPage(nextPage + 1)}>
                Nextt Games
              </Button>
            )}
          </HStack>
          <GameGrid
            seleectedGenre={selectedGenre}
            selectedPlatform={selectedPlatform}
            selectedSort={selectedSort}
            selectedSearch={selectedSerach}
            selectedPage={nextPage}
          />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
