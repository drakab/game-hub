import { Skeleton, SkeletonText, HStack } from "@chakra-ui/react";

const GenreListSkeleton = () => {
  return (
    <HStack>
      <Skeleton width={"25%"} height="32px" />
      <SkeletonText
        width={"85%"}
        noOfLines={1}
        skeletonHeight="2"
      ></SkeletonText>
    </HStack>
  );
};

export default GenreListSkeleton;
