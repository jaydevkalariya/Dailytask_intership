import React from "react";
import Child from "./Child";

const Home=(props)=>{
  return(
    <>
    <h1>Home page</h1>
    
    <h2>{props.name}</h2>
    <h2>{props.email}</h2>
    <Child name={props.name}/>
    </>
  )
}
export default Home;