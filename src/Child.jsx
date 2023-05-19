import React from "react";

const Home=(props)=>{
  return(
    <>
    <div>Child component</div>
    <h1>{props.name}</h1>
    </>
  )
}
export default Home;