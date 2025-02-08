import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Waves from "./components/Waves/Waves";
import SparklingHeading from "./components/Title/SparklingHead";
import ChatBot from "./components/ChatBot/ChatBot";
import About from "./components/About/About";
import Tracker from "./components/Tracker/Tracker";

const App = () => {
  return (
    <>
      <Header />
      <SparklingHeading />
      <Waves />
      <Hero />
      <About />
      <ChatBot />
      <Tracker />
    </>
  );
};

export default App;
