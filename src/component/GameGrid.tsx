import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  //the useGame hook is a custom hhok used to fecth the games
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 2 }}
        spacing={10}
        padding={"10px"}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

// a compoenet shuld majorly focus on rturning a visualViewport, but there are some functionality that are need to crate those views which we can also put in the Component, to make the code more clearner we can creatte a custom hook to handle those functionality for fetching the games.
