import { Paper, Typography } from '@material-ui/core';

const VideoDetails = ({video: {id:{videoId}, snippet:{title, channelTitle, description}}})=>{
   if (!videoId) return <div>Loading...</div>
   return(
   < React.Fragment>
    <Paper elevation={6} style={{}}>

    </Paper>
   </ React.Fragment>
   )
}