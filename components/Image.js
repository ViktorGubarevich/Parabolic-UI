import { getStrapiMedia } from "../lib/media";
import NextImage from "next/image";

const Image = ({ image }) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  console.log(getStrapiMedia(image))

  return (
    <NextImage
      width={width || "100%"}
      height={height || "100%"}
      src={getStrapiMedia(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
