import React from "react";
import { Box, Flex, Heading } from "@chakra-ui/react";
import "../App.css";
import { ProjectCard } from "../components/ProductCard";
import localPay from "../Images/LocalPageHomepage.png";
import Edukin from "../Images/EdukinHomepage.png"
import currChange from "../Images/CurrChangeHomepage.png"

let ProjectArray = [
  {
    information:
      "Paitku is E-commerce website. where user can buy verious types of Paitings.",
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
    github: "https://github.com/JahirPendhari09/remarkable-ice-65642",
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
    title: "MoneyChanger.com",
    techStacks: ["HTML5", "CSS3", "JavaScript"],
    img: currChange,
    github: "https://github.com/JahirPendhari09/huge-end-8625",
    deployLink: "https://648eae9e78649d0692a5ba18--fancy-frangollo-56a5ff.netlify.app/",
  },
];

const Projects = () => {

  return (
    <Box
      id="projects"
      pb="6rem"
      className={"project"}
    >
     <h1
      className=".project-title"
      style={{fontSize:"35px",fontWeight:"bold",textShadow:"2px 2px 10px rgb(250 200 100)",borderRadius:"10px",width:"200px",margin:"auto",border:"1px solid black",cursor:"pointer",marginBottom:"30px"}}
      >
      My Projects
      </h1>
      <Flex direction="column" gap="3rem">
        {ProjectArray &&
          ProjectArray.map((data) => (
            <ProjectCard  key={data.title} {...data} />
          ))}
      </Flex>
    </Box>
  );
};

export { Projects } ;