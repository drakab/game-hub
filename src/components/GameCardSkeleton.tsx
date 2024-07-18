import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const GameCardSkeleton = () => {
  return (
    <Card>
      <Skeleton height={233} />
      <CardBody>
        <SkeletonText height={93} />
      </CardBody>
    </Card>
  );
};

export default GameCardSkeleton;
