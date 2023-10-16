import React from "react";




const SkillComponent = ({ text, img,border,boxShowdo }) => {
  return (
    <div className="skills-card" style={{padding:"20px",width:"100%",height:"350px",borderRadius:"20px",cursor:"pointer", boxShadow:`0px 2px 8px 3px ${boxShowdo}`}}>
       <img src={img} alt={text}  className="skills-card-img" style={{width:"90%",margin:"auto",height:"80%"}} />
      <p className="skills-card-name" style={{fontSize:"20px",fontWeight:"bold",color:'green',marginTop:"20px"}}>
        {text}
      </p>
    </div>
  );
};

export {SkillComponent};
