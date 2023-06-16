import { Badge, Text } from "@chakra-ui/react";

interface Props {
  score: number;
}

function Gamescore({ score }: Props) {
  let color = score > 75 ? "green" : "yellow";
  return (
    <Badge
      colorScheme={color}
      paddingX={2}
      borderRadius="4px"
      fontSize={"14px"}
    >
      {score}
    </Badge>
  );
}

export default Gamescore;
