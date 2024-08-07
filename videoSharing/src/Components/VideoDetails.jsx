import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';


const VideoDetails = ({video: {id:{videoId}, snippet:{title, channelTitle, description}}})=>{

   const videoSrc = `https.//www.youtube.com/embed/${videoId}`

   return(
   < React.Fragment>
    <Paper elevation={6} style={{height: "70%"}}>
      <iframe 
      src={videoSrc} 
      frameBorder="0"
      height="100%"
      width="100%"
      title='Video Player'
      />
    </Paper>
    <Paper elevation={6} style={{padding: "15px"}}> 
      <Typography variant="h4">
        {title} - {channelTitle}
      </Typography>
      <Typography variant="subtitle1">
        {channelTitle}
      </Typography>
      <Typography variant="subtitle2">
        {description}
      </Typography>
    </Paper>

   </ React.Fragment>
   )
}

export default VideoDetails;