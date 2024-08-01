import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({video: {id:{videoId}, snippet:{title, channelTitle, description}}})=>{
   if (!videoId) return <div>Loading...</div>
   return(
   < React.Fragment>
    <Paper elevation={6} style={{height: "70%"}}>
      <iframe 
      src={videoSrc} 
      frameborder="0"
      height="100%"
      width="100%"
      title='Video Player'
      />
    </Paper>
    
   </ React.Fragment>
   )
}