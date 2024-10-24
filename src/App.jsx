import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Questions from "./components/Questions";
import Experiment from "./components/Experiment";
import Testimonials from "./components/Testimonials";
import Conclusion from "./components/Conclusion";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Experiment />
      <Questions />
      <Testimonials />
      <Conclusion />
    </>
  );
};

export default App;
