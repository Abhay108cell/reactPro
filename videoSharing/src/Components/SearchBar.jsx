import { useState } from "react";
import {Paper, TextField} from "@material-ui/core"

const SearchBar =() =>{
  const [searchTerm, setSearchTerm] = useState('')

  const handleChange = (event)=> setSearchTerm(event.target.value)

  const onKeyPress = (event)=>{
    if(event.key === "Enter"){
      onsubmit(searchItem)
    }
  }
  

  return(
    <Paper elevation={6}  styling={{padding : "25px" }}>
      <TextField 
      label="Search..."
      fullWidth
      value={searchTerm}
      onChange={handleChange}
      onKeyPress={onKeyPress}
        />
    </Paper>
  )
}