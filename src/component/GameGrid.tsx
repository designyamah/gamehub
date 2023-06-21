import { Heading, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
  seleectedGenre: any;
}

const GameGrid = ({ seleectedGenre }: Props) => {
  //the useGame hook is a custom hhok used to fecth the games
  const { games, error, isloading } = useGames(seleectedGenre.id);
  const Skeleton = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <Heading size={"lg"} marginBottom={"10px"}>
        {seleectedGenre.name}
      </Heading>
      {/* {error && <Text>{error}</Text>} */}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={"20px"}>
        {isloading && Skeleton.map((sl) => <GameCardSkeleton key={sl} />)}
        {/* {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))} */}
        {games.length === 0
          ? Skeleton.map((sl) => <GameCardSkeleton key={sl} />)
          : games.map((game) => <GameCard key={game.id} game={game} />)}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;

// a compoenet shuld majorly focus on rturning a visualViewport, but there are some functionality that are need to crate those views which we can also put in the Component, to make the code more clearner we can creatte a custom hook to handle those functionality for fetching the games.
