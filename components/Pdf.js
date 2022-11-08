import { getStrapiMedia } from "../lib/media";

const Pdf = ({ pdf }) => {
  return <iframe src={getStrapiMedia(pdf)} />;
};

export default Pdf;
