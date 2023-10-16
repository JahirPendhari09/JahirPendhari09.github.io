import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
  return (
    // streak
    <div style={{ width: "100%", margin: "auto auto 3rem auto" }}
     
    >
      <div
        style={{ width: "40%", margin: "3rem auto" }}
      >
        <a href="https://github.com/JahirPendhari09">
          <img id="github-streak-stats"
            src="https://github-readme-streak-stats.herokuapp.com?user=JahirPendhari09"
            alt="i_mg1"
          />
        </a>
      </div>

      <div
        style={{display:"flex", width: "60%",margin: "auto",justifyContent:"center",alignItems:"center",gap:"3rem"}}
       >
        <div >
          <a href="https://github.com/JahirPendhari09">
            <img id="github-top-langs"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=JahirPendhari09" 
              alt="i_mg2"
            />
          </a>
        </div>
        <div >
          <a
            style={{ height: "100%" }}
            href="https://github.com/JahirPendhari09"
          >
            <img id="github-stats-card"
              align="left"
              src="https://github-readme-stats.vercel.app/api?username=JahirPendhari09&count_private=true&show_icons=true" 
              alt="i_mg3"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export { Stats};