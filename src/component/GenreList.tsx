import {
  Button,
  HStack,
  Heading,
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
  onselectedGenre: (genre: any) => void;
  selectedGenre: any;
}

const GenreList = ({ onselectedGenre, selectedGenre }: Props) => {
  const { genre } = useGenre();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  return (
    <>
      <Heading fontSize={"2xl"} marginLeft={"10px"}>
        Genre
      </Heading>
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
                    whiteSpace={"normal"}
                    textAlign={"left"}
                    variant={"link"}
                    onClick={() => onselectedGenre(g)}
                    padding={"10px"}
                  >
                    {g.name}
                  </Button>
                </HStack>
              </ListItem>
            ))}
        {/* <GenreSkeleton /> */}
      </List>
    </>
  );
};

export default GenreList;
