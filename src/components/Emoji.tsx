import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";
import { Image, ImageProps } from "@chakra-ui/react";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "20px", marginTop: "2" },
    4: { src: thumbsUp, alt: "recommended", boxSize: "20px", marginTop: "2" },
    5: { src: bullsEye, alt: "exeptional", boxSize: "25px", marginTop: "1" },
  };
  return <Image {...emojiMap[rating]} />;
};

export default Emoji;
