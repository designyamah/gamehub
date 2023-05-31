import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

const GameGrid = () => {
  //the useGame hook is a custom hhok used to fecth the games
  const { games, setGames, error, setError } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;

// a compoenet shuld majorly focus on rturning a visualViewport, but there are some functionality that are need to crate those views which we can also put in the Component, to make the code more clearner we can creatte a custom hook to handle those functionality for fetching the games.
