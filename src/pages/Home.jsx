import styled from "styled-components";
import profilePic from "../Images/Jahir_Pic.png"
import { Link } from "@chakra-ui/react";
import resume from "../Images/resume.png"
const Home=()=>{
    return (
     <DIV>
          <div id="home" className="mainDiv">
          <div className="div-1">
            <img src={profilePic} alt="My Photo"/>
          </div>
          <div className="div-2" id="user-detail-intro">  
            <p style={{fontSize:"35px",fontWeight:"bold"}}>Hello 👋</p>
            <p>
                Welcome to my portfolio, showcasing my expertise in full stack web development. Trained by Masai School, I have a strong command of the MERN stack, API integrations, and responsive design. I have successfully created diverse projects that blend functionality with aesthetics, demonstrating collaborative teamwork and meticulous attention to details. Step into my world of code and innovation, where each line is crafted to leave a lasting impact.
            </p>
            <p style={{margin:"20px"}}><Link
               className="resume"
               href={resume}
               download={true}
               style={{
                padding:"10px",
                borderRadius:"10px",
                backgroundColor:"green",
                textDecoration:"none",
               }}
               target="_blank"
               textAlign="center"
               onClick={() => {
               window.open(
                 "https://drive.google.com/file/d/1PKOfb7E58nr4_5XTVaK4e_9dk7JfQw8y/view?usp=sharing",
                 "_blank",
                 "noreferrer"
                );
               }}
             >
              Resume
            </Link>
            </p>
          </div>
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
    background-color:black;
    border: 1px solid blue;
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
    color:white;
    margin-top:30px;
  }
  img{
    width: 90%;
    height: 100%;
    border-radius:10px;
  }
`