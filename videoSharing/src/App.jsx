import React from 'react'
import './App.css'
import {Grid} from "@material-ui/core"
import SearchBar from './Components/SearchBar'

function App() {
  return (
   <Grid style={{justifyContent :  "centre"}} container spacing={10}>
    <Grid item xs={11}>
      <Grid container spacing={10}>
        <Grid item xs={12} >
          {SearchBar}
        </Grid>
        <Grid item xs={8}>
          {/* {VideoDetails} */}
        </Grid>
        <Grid item xs={4}>
          {/* {VideoList} */}
        </Grid>
      </Grid>
    </Grid>
   </Grid>
  )
}

export default App
