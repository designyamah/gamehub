import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Text,
  VStack,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

interface Props {
  onselected: (genre: any) => void;
  selectedGenre: any;
}

const GenreList = ({ onselected, selectedGenre }: Props) => {
  const { genre } = useGenre();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <List paddingTop={"20px"}>
      {genre.length === 0
        ? Skeleton.map((gen) => <GenreSkeleton key={gen} />)
        : genre.map((g) => (
            <ListItem marginBottom={"10px"} key={g.id}>
              <HStack
                backgroundColor={g.id === selectedGenre.id ? "gray.700" : " "}
                borderRadius={g.id === selectedGenre.id ? "10px" : " "}
              >
                {/* <Image
                  boxSize="32px"
                  borderRadius="8px"
                  src={getCropUrl(g.image_background)}
                  objectFit={"cover"}
                /> */}
                <Button
                  variant={"link"}
                  onClick={() => onselected(g)}
                  padding={"10px"}
                >
                  {g.name}
                </Button>
              </HStack>
            </ListItem>
          ))}
      {/* <GenreSkeleton /> */}
    </List>
  );
};

export default GenreList;
