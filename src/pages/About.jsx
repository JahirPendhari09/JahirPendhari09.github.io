import { Flex, Heading, Text, Box, Image } from "@chakra-ui/react";
import React from "react";

const About = () => {
  return (
    <Flex
      id="about"
      className="about section"
      w="90%"
      m="auto"
      direction="column"
      padding="2rem 0rem"
      mt="2rem"
    >
   <h1
      style={{fontSize:"35px",fontWeight:"bold",textShadow:"2px 2px 10px rgb(250 200 100)",borderRadius:"10px",width:"200px",margin:"auto",border:"1px solid black",cursor:"pointer"}}
      >
      About me
      </h1>
      <Box
        display={{ base: "flex", md: "flex" }}
        borderBottom={`3px solid "#8B54F8"}`}
        borderTopLeftRadius="5px"
        borderTopRightRadius="5px"
        boxShadow={`0px 2px 6px "#8B54F8"`}
        overflow="hidden"
        gap={{ base: "1rem", sm: "2rem", md: "4rem" }}
        alignItems="center"
        width="82%"
        m="auto"
        justifyContent="space-evenly"
        flexDir={{ base: "column", sm: "column", md: "row" }}
        p={{base:"1rem",sm:"1rem",md:"2rem 2.3rem 3.4rem"}}
        background={"rgb(206, 241, 247)"}
      >
        <Box
          zIndex="10"
          width={{ base: "90%", sm: "97%", md: "60%" }}
          float="left"
          flex="2"
        >
          <Text
            m="1rem 0rem"
            id="user-detail-name"
            fontSize={{ base: "25px", sm: "20px", md: "1.5rem" }}
            fontWeight="900"
            color="green"
            textShadow="2px 2px 15px rgb(250 200 50)"
            textAlign="center"
            style={{ userSelect: "none", WebkitUserSelect: "none" }}
          >
            I'm Jahir Salim Pendhari
          </Text>
          <Text
            width={{ base: "80%", sm: "100%", md: "100%" }}
            m="auto"
            fontSize={{ base: "17px", sm: "19px", md: "1.4rem" }}
            textShadow="2px 2px 10px rgb(150 150 150)"
            fontWeight="600"
            textAlign="justify"
            color={"rgb(30, 8, 8)"}
            id="user-detail-intro"
          >
            I'm a passionate Full-stack Web Developer with a robust skill set in HTML, CSS, JavaScript,
            REST API, Node.js, React, MongoDB, Express.js, and GitHub. My expertise lies in seamlessly
            blending functionality and aesthetics to deliver visually appealing and flawless web
            applications.
            Dedicated to perpetual learning and staying updated with emerging technologies, I'm
            committed to making a lasting impact in the world of full-stack web development. Let's
            connect and explore opportunities to create innovative web solutions together!
          </Text>
          <Flex
            m={{ base: "0.4rem auto", sm: "0.6rem auto", md: "1rem auto" }}
            justifyContent="center"
            gap="0.4rem"
            width={{ base: "98%", sm: "34%", md: "15%" }}
            direction={{ base: "column", sm: "row" }}
            alignItems="center"
          >
            <Box margin="auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                zoomAndPan="magnify"
                viewBox="0 -5 30 30.000001"
                height="40"
                preserveAspectRatio="xMidYMid meet"
                version="1.0"
              >
                  <path
                    d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"
                    fill="black"
                  />
              </svg>
            </Box>
            <Text
              fontSize={{ base: "1rem", sm: "1.2rem", md: "1.3rem" }}
              color="rgba(110, 110, 234, 0.8)"
              width={{ base: "95%", sm: "16rem", md: "18rem" }}
              margin="auto"
              fontWeight="500"
            >
              jahirpp1999gmail.com
            </Text>
          </Flex>
        </Box>
        <Image
          id="user-detail-intro"
          width={{ base: "90%", sm: "50%", md: "30%" }}
          flex="1"
          objectFit="content"
          height="100%"
          src="https://camo.githubusercontent.com/97d0c0c4209208d8ec9573c7e213e05872a9f59b703868647b559b77af601cc6/68747470733a2f2f692e70696e696d672e636f6d2f6f726967696e616c732f65382f66342f35332f65386634353334363961336563393765636433353464663436356437333931332e676966"
        />
      </Box>
    </Flex>
  );
};

export { About };