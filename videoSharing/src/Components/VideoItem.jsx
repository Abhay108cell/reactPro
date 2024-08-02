import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const VideoItem = () => {
  <Grid item xs={12}>
    <Paper
      style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
      onClick={() => onVideoSelect(Video)}
    ></Paper>
  </Grid>;
};
