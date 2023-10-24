
import GitHubCalendar from "react-github-calendar";
import "./Calender.css";
import { Stats } from "./Stats";

const ActivityGraph = () => {
  
  return (
    <div style={{width:"90%",margin:"auto"}}
      className="calender"
    >
      <h1
      className="react-activity-calendar"
       style={{fontSize:"35px",fontWeight:"bold",textShadow:"2px 2px 10px rgb(250 200 100)",borderRadius:"10px",width:"300px",margin:"auto",border:"1px solid black",cursor:"pointer"}}
      > 
          Github Calendar
      </h1>
      <div
        style={{width:"90%",margin:"auto",marginTop:"30px"}}
      >
        <GitHubCalendar
          className="github"
          blockSize={20}
          fontSize={18}
          username="JahirPendhari09"
        >
        </GitHubCalendar>
      </div>
      <Stats/>
    </div>
  );
};

export {ActivityGraph};