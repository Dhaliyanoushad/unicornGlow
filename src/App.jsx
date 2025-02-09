import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import SparklingHeading from "./components/Title/SparklingHead";
import Waves from "./components/Waves/Waves";
import About from "./components/About/About";
import ChatBot from "./components/ChatBot/ChatBot";
import Tracker from "./components/Tracker/Tracker";
import Input from "./components/Input/Input";
import MoodSongs from "./components/MoodSongs/MoodSongs";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <SparklingHeading />
      <Waves />
      {/* <Hero /> */}
      <About />
      <Tracker />
      <Input />
      <MoodSongs />
      <ChatBot />
      <Footer />
    </>
  );
};

export default App;
