import React, { useState } from "react";
import Particles from "react-tsparticles";
import useColor from "../../utils/useColor";

export default function Background() {
  const { pick } = useColor();
  const showParticles = window.localStorage.getItem("ballons");
  return (<>
    {showParticles === "true" && <Particles zIndex={1}
      params={{
        particles: {
          number: {
            value: (window.innerWidth + window.innerHeight) / 90,
          },
          size: {
            value: (window.innerWidth + window.innerHeight) / 400,
          },
          color: pick("#4a8cff", "#2bfafa"),
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            bounce: true,
            random: false,
            speed: 0.5,
            straight: false,
            attract: {
              enable: true,
              rotateX: 50,
              rotateY: 50
            }
          },

        },
        // interactivity: {
        //   events: {
        //     onhover: {
        //       enable: true,
        //       mode: "repulse",
        //       repulse: {
        //         distance: 0,
        //         duration: 2,
        //       }
        //     },
        //   },
        // },
      }}
      height="100vh"
    />}</>
  );
}
