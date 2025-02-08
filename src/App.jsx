import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ChatBot from "./components/ChatBot/ChatBot";
import SparklingHeading from "./components/Title/SparklingHead";

function App() {
  return (
    <>
      <Header />
      <SparklingHeading />
      <Hero />
      <ChatBot />
    </>
  );
};

export default App;
