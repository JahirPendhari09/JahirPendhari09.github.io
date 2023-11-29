import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Skill from "./pages/Skill/Skills";
import Project from "./pages/Project/Projects";
import Contact from "./pages/Contact/Contact";
import { Box } from "@chakra-ui/react";
import About from "./pages/About/About";
import Calender from "./pages/Calender/Calender";
import Stats from "./pages/Stats/Stats";
import { useEffect, useState } from "react";
import navbarStyle from "./components/Navbar.module.css";
import useToggleHook from "./hooks/ToggleHook";

const obj = {
  Home: false,
  About: false,
  Skill: false,
  Project: false,
  Contact: false,
};

function App() {
  // const [theme, ChangeTheme] = useToggleHook();
  const [ theme, setTheme ] = useState(true);
  const [isIntersection, setIsIntersection] = useState(obj);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollYVal, setLastScrollYVal] = useState(0);



  useEffect(() => {
    // console.log(isIntersection)
    window.addEventListener("scroll", handleScoll);

    return () => window.removeEventListener("scroll", handleScoll);
  });

  const handleScoll = () => {
    let CurrentScrollY = Math.floor(window.scrollY);
    if (CurrentScrollY > lastScrollYVal) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }
    // console.log("ScrollY",Math.floor(window.scrollY))
    setLastScrollYVal(CurrentScrollY);
  };

  const ChangeTheme = ()=>{
    setTheme(!theme);
  }

  return (
    <div className={`App ${!theme ? "appLight" : "appDark"}`}>
      <Box
        className={`${navbarStyle.navShow} ${
          showNavbar ? "" : navbarStyle.navHidden
        }`}
      >
        <Navbar theme={theme} ChangeTheme={ChangeTheme} />
      </Box>
      <Box pt={{ base: "3rem", sm: "5rem" }}>
        <Home
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <About
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <Skill
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <Project
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
        <Calender theme={theme} />
        <Stats theme={theme} />
        <Contact
          theme={theme}
          setIsIntersection={setIsIntersection}
          obj={obj}
          isIntersection={isIntersection}
        />
      </Box>
    </div>
  );
}

export default App;
