import React from "react";
import "./App.css";
import Input from "./components/Input/Input";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import SparklingHeading from "./components/Title/SparklingHead";

function App() {
  return (
    <div>
      <Header/>
      <SparklingHeading/>
      <Hero/>
      <Input/>
    </div>
  );
}

export default App;
