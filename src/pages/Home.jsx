import styled from "styled-components";
import profilePic from "../Images/profile.jpg"
import { Button, Flex, Link } from "@chakra-ui/react";
import resume from "../Images/Jahir_Resume.pdf";
import { ExternalAccounts } from "../components/ExternalAccounts";
import { About } from "./About";
import { DownloadIcon } from "@chakra-ui/icons";

const Home=()=>{
    return (
     <DIV>
        <div id="home" className="mainDiv">
          <div className="div-1">
            <img   src={profilePic} alt="My Photo"className="home-img" />
          </div>
          <div className="div-2">  
            <p style={{fontSize:"35px",fontWeight:"bold"}}>Hello👋</p>
            <p  style={{marginBottom:"50px"}}>
                Welcome to my portfolio, showcasing my expertise in full stack web development. Trained by Masai School, I have a strong command of the MERN stack, API integrations, and responsive design. I have successfully created diverse projects that blend functionality with aesthetics, demonstrating collaborative teamwork and meticulous attention to details. Step into my world of code and innovation, where each line is crafted to leave a lasting impact.
            </p>
            {/* <a
               id="resume-button-2"
               className="resume"
               href={resume}
               download
               style={{
                padding:"10px",
                borderRadius:"10px",
                backgroundColor:"green",
                textDecoration:"none",
                color:"white",
               }}
               target="_blank"
               textAlign="center"
               onClick={() => {
               window.open(
                 "https://drive.google.com/file/d/1F7vmOodU-p1YQNgYkA20eEQPLnarxjUi/view?usp=sharing",
                 "_blank",
                 "noreferrer"
                );
               }}
             >
              Resume
            </a> */}
            
            <a
                style={{
                    textDecoration: "none"
                }}
                href="https://drive.google.com/u/0/uc?id=1a79_bKFSag1TB4vbKTZw7LUTLniwanox&export=download"
                target="_blank"
                id="resume-link-2"
                download
                rel="noreferrer"
                textAlign="center"
            >
                <Button rightIcon={<DownloadIcon />} id="resume-button-2" bg={ "green"} color={"white"} _hover={{ color: "none" }} >
                    Resume
                </Button>
            </a>
            <ExternalAccounts/>
          </div>
        </div>
        <div>
        <About/>
        </div>
     </DIV>
    
      );
}

export {Home}

const DIV=styled.div`
  .mainDiv{
    width: 90%;
    display: flex;
    justify-content: space-between;
    border-radius: 20px;
    margin:auto;
    margin-top:50px;
    padding: 20px;
    /* background-color:lightgreen; */
    /* border: 1px solid blue; */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(9, 82, 200, 0.3) 0px 8px 16px -8px;
    cursor: pointer;
  }
  .div-1{
    width: 50%;
    margin:20px;
  }
  .div-2{
    width: 100%;
    text-align:left;
    font-size: 20px;
    color:black;
    margin-top:30px;
  }
  img{
    width: 90%;
    height: 100%;
    border-radius:20px;
  }
`