
import React, { useEffect, useRef } from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import style from "./Project.module.css";
import AOS from "aos";
import "aos/dist/aos.css";
import localPay from "./Images/LocalPageHomepage.png";
import Edukin from "./Images/EdukinHomepage.png"
import currChange from "./Images/CurrChangeHomepage.png"

let ProjectArray = [
  {
    information:
      "PaintKu, where art finds its home. Discover a world of exquisite paintings through this innovative e-commerce platform. Browse, select, and acquire stunning artworks while enjoying the convenience of tracking your recent visits. Welcome to the gallery at your fingertips.",
    title: "PaintKu.com",
    techStacks: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Redux",
      "Axios",
      "ChakraUI",
    ],
    img: "https://github.com/mdmukhtarmohsin/loud-weight-1875/assets/130351451/67881136-25d3-4269-8169-852d36e5c185",
    github: "https://github.com/JahirPendhari09/loud-weight-1875",
    deployLink: "https://paintku.vercel.app/"
  },
  {
    information:
      "Edukin Language Learning Project is an ambitious and innovative endeavor aimed at revolutionizing the way children learn new languages. Developed by a team of dedicated language enthusiasts and tech-savvy educators, our project seeks to empower young minds with invaluable linguistic skills while fostering cross-cultural understanding and global awareness.",
    title: "Edukin.com",
    techStacks: [
      "HTML5",
      "CSS3",
      "JavaScript",
    ],
    img: Edukin,
    github: "https://github.com/JahirPendhari09/remarkable-ice-6564_new_fork",
    deployLink: "https://edukin.netlify.app/",
  },
  {
    information:
      "Local Pay using HTML, CSS, JavaScript, React and Chakra UI for Masai School project, showcasing skills in full-stack web development, API integration, and UI design.",
    title: "Local.com",
    techStacks: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "React",
      "Axios",
      "ChakraUI",
    ],
    img: localPay,
    github: "https://github.com/JahirPendhari09/energized-secretary-1272",
    deployLink: "https://local-pay.netlify.app/",
  },
  {
    information:
      "This website is about Currency conversion.",
    title: "Paywise.com",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
    img: currChange,
    github: "https://github.com/JahirPendhari09/huge-end-8625",
    deployLink: "https://648eae9e78649d0692a5ba18--fancy-frangollo-56a5ff.netlify.app/",
  },
];

const Project = ({ theme }) => {
  const ref = useRef(null);

  useEffect(() => {
    AOS.init();
  }, []);


  return (
    <Box
      id="projects"
      pb="6rem"
      ref={ref}
      className={!theme ? style.project : style.projectDark} 
    >
      <Heading
        as="h1"
        className="project"
        data-aos="fade-down"
        data-aos-delay="20"
        data-aos-duration="700"
        // data-aos-offset="200"
        data-aos-easing="ease-in-out"
        lineHeight="3rem"
        // borderBottom="3px solid green"
        //  width={{base:"10%",sm:"22%",md:"13%"}}
        // width={{ base: "80%", sm: "38%", md: "12%" }}
        fontSize={{ base: "1.3rem", sm: "1.6rem", md: "2rem" }}
        m="4rem auto"
        textShadow="2px 2px 10px rgb(250 200 100)"
      >
           <span
          style={{
            boxShadow: "0px 0px 3px grey",
            padding: "0.2rem 0.8rem",
            borderTopLeftRadius: "5px",
            borderTopRightRadius: "5px",
            borderBottom: `3px solid ${!theme ? "#3182CE" : "#8B54F8"}`,
            color:`${!theme ? "black" : "white"}`,
            background:`${!theme?"rgb(206, 241, 247)":"black"}`
          }}
        >
          {" "}
          My Projects
        </span>
      </Heading>
      <Flex direction="column" gap="3rem">
        {ProjectArray &&
          ProjectArray.map((data) => (
            <ProjectCard theme={theme} key={data.title} {...data} />
          ))}
      </Flex>
    </Box>
  );
};

export default Project;