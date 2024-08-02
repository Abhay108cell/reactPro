import React from "react";
import Grid from '@mui/material/Grid';

const VideoLists = ({videos ,onVideoSelect}) =>{
  const ListOfVideos = videos.map(video=>{
    <VideoItem
    onVideoSelect={onVideoSelect}
    key={video.id.videoId}
    video={video}
    />
  })
  return(
    <Grid container spacing={10}>
      {ListOfVideos}
    </Grid>
  )
}