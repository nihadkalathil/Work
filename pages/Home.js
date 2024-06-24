import { useState } from "react";
import Content from "../Content";

const Home = () => {
const [name,setName]=useState("joe");
    return (
    <div><h1>Home</h1>
    <Content name={name}></Content>
    </div>
    );

  };
  
  export default Home;
