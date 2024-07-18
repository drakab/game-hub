import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGenres from "./hooks/useGanres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";
import GameCardContainer from "./GameCardContainer";

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const genres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      {error && <Text>{error}</Text>}
      <List>
        {isLoading && (
          <>
            {genres.map((skeletonGente) => (
              <ListItem key={skeletonGente} paddingY={1.5}>
                <GenreListSkeleton />
              </ListItem>
            ))}
          </>
        )}
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1.5}>
            <HStack>
              <Image
                objectFit="cover"
                boxSize="32px"
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
