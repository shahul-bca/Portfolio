import "./App.css";
import Hero from "./components/Hero";
import Navbar1 from "./components/Navbar1";
import Profile from "./components/Profile";
import Qualification from "./components/Qualification";
import Skills from "./components/Skills";
import Title from "./components/Title/Title";
import Projects from"./components/Projects";
import Contact  from './components/Contact'
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <div className="bg-white dark:bg-slate-900 text-black dark:text-gray-100">
    <Navbar1/>
        <Hero />
        <Title title="About Me" subTitle="My profile" className=" dark:text-gray-100"/>
        <Profile />
        <Title title="Skills" subTitle="My technical level" />
        <Skills />
        <Title title="Qualification" subTitle="My Profesional journey" />
        <Qualification/>
        <Title title="My projects" subTitle="Most recent work" />
        <Projects />
        <Title title="Contact Me" subTitle="Get in touch" />
        <Contact />
    <Footer/>
      </div>
      
    </>
  );
}

export default App;
