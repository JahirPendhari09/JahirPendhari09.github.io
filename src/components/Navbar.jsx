import styled from "styled-components"
const Navbar=()=>{
    return <DIV>
        <div id="nav-profile">
            <div id="user-detail-name">
               <p>JP</p>
            </div>
        </div>
        <div id="nav-menu" >
            <p><a className="nav-link home" href="#">Home</a></p>
            <p><a className="nav-link about" href="#about">About</a></p>
            <p><a className="nav-link skills" href="#skills">Skills</a></p>
            <p><a className="nav-link projects" href="#projects">Projects</a></p>
            <p><a className="nav-link contact" href="#contact">Contact</a></p>
            <p><a className="nav-link resume" href="#">Resume</a></p>
        </div>
    </DIV>
}

export {Navbar}

const DIV=styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin:auto;
    height: 80px;
    background-color:black;
    color: white;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(13, 20, 243, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;


    #nav-profile{
        width: 50%;
        margin-left:100px;
    }
    #nav-profile > div{
        width: 60px;
        height: 60px;
        border: 1px solid green;
        border-radius:50%;
        background-color:green;
        padding-top:10px;
        cursor: pointer;
    }
    #nav-profile > div > p{
        /* margin-bottom:10px; */
        font-size: 25px;
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
        color: #0af30a;
    }
    a:hover{
        color:orange;
    }
`