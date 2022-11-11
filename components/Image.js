import NextImage from "next/image";
import { getStrapiPath } from "../lib/api";

const Image = ({ image }) => {
  const { url, alternativeText, width, height } = image.data.attributes;

  return (
    <NextImage
      width={width || "100%"}
      height={height || "100%"}
      src={getStrapiPath(image)}
      alt={alternativeText || ""}
    />
  );
};

export default Image;
