import React from 'react';

interface YouTubeEmbedProps {
  videoId: string;
}

export const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({ videoId }) => (
  <div className="relative w-full pt-[56.25%]">
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      className="absolute top-0 left-0 w-full h-full"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded YouTube video"
    />
  </div>
);