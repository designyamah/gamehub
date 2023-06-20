import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  //the useGame hook is a custom hhok used to fecth the games
  const { games, error } = useGames();
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {/* {error && <Text>{error}</Text>} */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        spacing={3}
        padding={"20px"}
      >
        {games.length === 0
          ? Skeleton.map((sl) => <GameCardSkeleton key={sl} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

// a compoenet shuld majorly focus on rturning a visualViewport, but there are some functionality that are need to crate those views which we can also put in the Component, to make the code more clearner we can creatte a custom hook to handle those functionality for fetching the games.
