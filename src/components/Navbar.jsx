import styled from "styled-components";
import resume from "../Images/Jahir_Resume.pdf";

const Navbar=()=>{
    return <DIV>
        <div id="nav-profile">
            <div id="user-detail-name">
               <p>Jahir</p>
            </div>
        </div>
        <div id="nav-menu" >
            <p><a className="nav-link home" href="#">Home</a></p>
            <p><a className="nav-link about" href="#about">About</a></p>
            <p><a className="nav-link skills" href="#skills">Skills</a></p>
            <p><a className="nav-link projects" href="#projects">Projects</a></p>
            <p><a className="nav-link contact" href="#contact">Contact</a></p>
            <a
               id="resume-button-1"
               className="nav-link resume"
               href={resume}
               download
               style={{
                textDecoration:"none",
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
            </a>
        </div>
    </DIV>
}

export {Navbar}

const DIV=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    top: 0px;
    position: fixed;
    height: 80px;
    background-color:lightblue;
    color: white;
    align-items: center;
    box-shadow: hsla(0, 0%, 0%, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(13, 20, 243, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;


    #nav-profile{
        width: 50%;
        margin-left:100px;
    }
    #nav-profile > div{
        width: 100px;
        height: 60px;
        color:black;
        padding-top:10px;
        cursor: pointer;
    }
    #nav-profile > div > p{
        color: blue;
        font-size: 30px;
        font-weight:bold;
    }
    #nav-menu{
        width: 100%;
        display: flex;
        gap: 50px;
        font-size: 20px;
        font-weight: bold;
    }
    a{
        text-decoration:none;
        color: blue;
    }
    a:hover{
        color:orange;
    }
`