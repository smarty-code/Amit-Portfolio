import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import "./index.css";
import Skills from "./components/Skills";
import Expreience from "./components/Expreience";
import AboutMe from "./components/AboutMe";
import Project from "./components/Project";
import GetInTouch from "./components/GetInTouch";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Skills />
      <Expreience />
      <AboutMe />
      <Project />
      <GetInTouch />
      <Footer />
    </>
  );
}

export default App;
