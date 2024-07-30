import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "./hooks/useGanres";
import getCroppedImageUrl from "../services/image-url";
import GenreListSkeleton from "./GenreListSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();
  const genres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <>
      <Heading fontSize="2xl" marginBottom="3">
        Genres
      </Heading>
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
              <Button
                onClick={() => onSelectGenre(genre)}
                fontSize="lg"
                variant="link"
                value={genre.id}
                textAlign="left"
                whiteSpace="pre-wrap"
                fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
