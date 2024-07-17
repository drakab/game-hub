import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color =
    score >= 80
      ? "green"
      : score >= 60
      ? "yellow"
      : score >= 40
      ? "orange"
      : "red";

  return (
    <Badge colorScheme={color} paddingX={2} borderRadius={4} fontSize={14}>
      {score}
    </Badge>
  );
};

export default CriticScore;
