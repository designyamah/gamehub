import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import getCropUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";

const GenreList = () => {
  const { genre } = useGenre();
  const Skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <List paddingTop={"20px"}>
      {genre.length === 0
        ? Skeleton.map((gen) => <GenreSkeleton key={gen} />)
        : genre.map((g) => (
            <ListItem paddingY={"5PX"} key={g.id}>
              <HStack>
                <Image
                  boxSize="32px"
                  borderRadius="8px"
                  src={getCropUrl(g.image_background)}
                  objectFit={"cover"}
                />
                <Text fontSize={"lg"}>{g.name}</Text>
              </HStack>
            </ListItem>
          ))}
      <GenreSkeleton />
    </List>
  );
};

export default GenreList;
