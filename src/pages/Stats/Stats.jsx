import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import React from "react";

const Stats = () => {
  return (
    // streak
    <div style={{ width: "100%", margin: "auto auto 3rem auto" }}
    >
      <Flex
        data-aos="fade-up"
        data-aos-delay="20"
        data-aos-duration="800"
        data-aos-easing="ease-in-out"
        style={{ width: "40%", margin: "3rem auto" }}
      >
        <a href="https://github.com/JahirPendhari09">
          <img id="github-streak-stats"
            align="left"
            src="https://github-readme-streak-stats.herokuapp.com?user=JahirPendhari09"
            alt="i_mg1"
          />
        </a>
      </Flex>

      <Flex
        style={{
          width: "60%",
          //   height: "500px",
          margin: "auto",
        }}
        direction={{ base: "column", sm: "column", md: "row" }}
        justifyContent="center"
        alignItems="center"
        gap="2rem"
      >
          <Box
          data-aos="fade-right"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
          >
          <a href="https://github.com/JahirPendhari09">
            <img id="github-top-langs"
              align="center"
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=JahirPendhari09" 
              alt="i_mg2"
            />
          </a>
        </Box>
        <Box
          data-aos="fade-left"
          data-aos-delay="20"
          data-aos-duration="800"
          data-aos-easing="ease-in-out"
        >
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
          </Box>
      </Flex>
    </div>
  );
};

export default Stats;