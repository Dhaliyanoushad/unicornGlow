import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <>
      <Header />
      <SparklingHeading />
      <Waves />
      <Hero />
      <ChatBot />
    </>
  );
};

export default App;
