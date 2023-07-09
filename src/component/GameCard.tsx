import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import Platform from "./IconPlatForm";
import IconPlatForm from "./IconPlatForm";
import Gamescore from "./Gamescore";
import getCropUrl from "../services/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={getCropUrl(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between">
          <IconPlatForm
            platform={game.parent_platforms.map((p) => p.platform)}
          />
          <Gamescore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* <List>
          {game.parent_platforms.map(({ platform }) => (
            <IconPlatForm key={platform.id} platform={platform} />
          ))}
        </List> */}
        {/* method 2 */}
      </CardBody>
    </Card>
  );
};

export default GameCard;
