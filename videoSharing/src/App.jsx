import React from 'react'
import './App.css'
import {Grid} from "@material-ui/core"
import SearchBar from './Components/SearchBar'
import youtube from './api/youtube'
import { useState } from 'react'

function App() {
  const [videos, setVideos] =useState([]);

  const [selectedVideo, setSelectedVideo]= useState({id:{}, snippet:{}})

  return (
   <Grid style={{justifyContent :  "centre"}} container spacing={10}>
    <Grid item xs={11}>
      <Grid container spacing={10}>
        <Grid item xs={12} >
          <SearchBar onSubmit={handleSubmit}/>
        </Grid>
        <Grid item xs={8}>
          <VideoDetails video={selectedVideo}/>
        </Grid>
        <Grid item xs={4}>
          {/* {VideoList} */}
        </Grid>
      </Grid>
    </Grid>
   </Grid>
  )
  async function handleSubmit(searchItem){
    const {data : {items: videos}} = await youtube.get("search",{
      params:{
        q:searchItem,
        part :"snippet",
        maxResults:5,
        key: "AIzaSyBSeeHSZ5zass86MHFS7aBrerZqHwc4to8"
        }
    });
    setVideos(videos )
    setSelectedVideo(videos[0])
  }
}
export default App
