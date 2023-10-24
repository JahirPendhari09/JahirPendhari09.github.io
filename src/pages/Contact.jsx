import React from "react";
import { ExternalAccounts } from "../components/ExternalAccounts";

const Contact = () => {
  
  return (
    <div
      id="contact"
      style={{width:"90%",margin:"auto",marginBottom:"30px",border:"1px solid black", userSelect: "none", WebkitUserSelect: "none" ,marginTop:"30px",padding:"20px", borderRadius:"20px"}}
    >
      <h1
      style={{fontSize:"35px",fontWeight:"bold",textShadow:"2px 2px 10px rgb(250 200 100)",borderRadius:"10px",width:"300px",margin:"auto",border:"1px solid black",cursor:"pointer"}}
      >
      Get in Touch
      </h1>
      <p
      
        style={{marginTop:"16px",fontSize:"25px", fontWeight:"700",textShadow:"2px 2px 10px rgb(250 200 100)"}}
      >
         Jahir Pendhari
      </p>
      <p
       style={{fontSize:"16px", fontWeight:"700",textShadow:"2px 2px 10px rgb(200 150 100)" }}
       id="contact-email"
      >
        Email: jahirpp1999@gmail.com
      </p>
      <p
       style={{fontSize:"16px", fontWeight:"700",textShadow:"2px 2px 10px rgb(200 150 100)" }}
       id="contact-phone"
      >
        Call: 91-8668953367
      </p>

      <div style={{ width:"200px",margin:"auto"}}>
        <ExternalAccounts/>
      </div>
      
   
      <p
        style={{fontSize:"16px", fontWeight:"700",textShadow:"2px 2px 10px rgb(200 150 100)",marginTop:"30px" }}
      >
        Thank you
      </p>
    </div>
  );
};

export {Contact};