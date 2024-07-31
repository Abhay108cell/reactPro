import { useState } from "react";
import {Paper, TextField} from "@material-ui/core"

const SearchBar =() =>{
  const [searchTerm, setSearchTerm] = useState('')
  return(
    <Paper elevation={6}  styling={{padding : "25px" }}>
      <TextField 
      label="Search..."
      fullWidth
      value={searchTerm}
        />
    </Paper>
  )
}