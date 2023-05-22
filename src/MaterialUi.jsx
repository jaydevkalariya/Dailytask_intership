import React from 'react'
import { Button,Grid,Paper } from "@mui/material";

const fun2=()=>{
    let no=prompt("enter number : 1 2 3 4")
    const arr=["1","2","3","4"]
    arr.map((curr)=>{
       return no===curr?document.getElementById(curr).style.backgroundColor="red":document.getElementById(curr).style.backgroundColor="lightgreen"
    })
 }
const MaterialUi = () => {
  return (
    <>
    <h1>MaterialUi</h1>
    <Button variant="contained" onClick={fun2} color="secondary">Change Color of Grid</Button>

  <div className="container" style={{marginTop:"5rem",height:"300px"}}>
    <Grid container spacing={2}>
  <Grid item xs={8}>
  <Paper elevation = {24} id="1" variant="outlined" style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=8 </h2> </Paper>
  </Grid>
  <Grid item xs={4}>
  <Paper elevation = {24} id="2" variant="outlined"  style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=4</h2> </Paper>
  </Grid>
  <Grid item xs={4}>
  <Paper elevation = {24} id="3" variant="outlined"  style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=4</h2> </Paper>
  </Grid>
  <Grid item xs={8}>
  <Paper elevation = {24} id="4" variant="outlined"  style={{height:"20vh",backgroundColor:"lightgreen"}}><h2> xs=8</h2></Paper>
  </Grid>
</Grid>
</div>
    </>
  )
}

export default MaterialUi