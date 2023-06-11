import {
  Card,
  CardBody,
  Heading,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import Platform from "./IconPlatForm";
import IconPlatForm from "./IconPlatForm";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Card overflow={"hidden"} borderRadius={10}>
      <Image src={game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{game.name}</Heading>
        {/* <List>
          {game.parent_platforms.map(({ platform }) => (
            <IconPlatForm key={platform.id} platform={platform} />
          ))}
        </List> */}
        {/* method 2 */}
        <IconPlatForm platform={game.parent_platforms.map((p) => p.platform)} />
      </CardBody>
    </Card>
  );
};

export default GameCard;
