import React from 'react';

type VideoUrl = {
  videoUrl: string;
  poster?: string;
};

function VideoPlayer({ videoUrl, poster }: VideoUrl) {
  return (
    <div>
      <video width={1000} height={250} controls className="rounded-sm" poster={poster}>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
