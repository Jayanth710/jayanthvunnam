import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/services/services";
import Mywork from "./components/Mywork/Mywork";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";
import Skills from "./components/Skills/Skills";
import Sidebar from "./components/Sidebar/Sidebar";

export default function App(){
  // const [theme, setTheme] = useState("dark");

  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <About />
      <Education />
      <Services />
      <Skills />
      <Mywork />
      <Contact />
      <Sidebar />
      {/* <Sidebar setTheme={setTheme} /> */}
      {/* <Footer /> */}
    </div>
  )
}