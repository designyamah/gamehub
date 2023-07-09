import { Heading } from "@chakra-ui/react";

interface Props {
  selectedGenre: any;
  selectedPlatform: any;
}

function GameHeading({ selectedGenre, selectedPlatform }: Props) {
  return (
    <Heading as={"h2"} marginBottom={"10px"}>
      {/* {selectedPlatform?.name + selectedGenre?.name + "Games"} */}
      {selectedPlatform?.name} {selectedGenre?.name} Games
    </Heading>
  );
}

export default GameHeading;
