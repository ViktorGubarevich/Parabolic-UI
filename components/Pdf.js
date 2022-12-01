import { getStrapiMedia } from "../lib/media";

const Pdf = ({ pdf }) => <iframe src={getStrapiMedia(pdf)} />;

export default Pdf;
