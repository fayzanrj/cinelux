import extractYTVideoId from "@/libs/ExtractYTVideoId";
import React from "react";

// Props
interface TraileProps {
  link: string;
}

const Trailer: React.FC<TraileProps> = ({ link }) => {
  // Getting video id
  const videoId = extractYTVideoId(link);

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      title="YouTube video player"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
      className="aspect-video max-w-96 w-full"
    ></iframe>
  );
};

export default Trailer;
