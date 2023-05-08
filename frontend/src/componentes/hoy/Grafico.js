import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

export default function Grafico(props) {



  const percentage = (props.actual / props.maxValue).toFixed(2);
  if((props.actual  >= props.maxValue) && (props.actual != 0)&& (props.maxValue !=0) ){
    console.log("🚀 ~ file: Grafico.js:13 ~ Grafico ~ props.maxValue:", props.maxValue)
    console.log("🚀 ~ file: Grafico.js:13 ~ Grafico ~ props.actual:", props.actual)
    Swal.fire('Te has pasado')
  }

 
  
  return (
    <div className="container-circulo">
      <div className="circulo">
        <CircularProgressbar
          value={percentage * 100}
          text={`${(percentage * 100).toFixed(0)}%`}
          styles={buildStyles({
            // Rotation of path and trail, in number of turns (0-1)
            rotation: 0.75,

            // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
            strokeLinecap: "butt",

            // Text size
            textSize: "19px",

            // How long animation takes to go from one percentage to another, in seconds
            pathTransitionDuration: 0.5,

            // Can specify path transition in more detail, or remove it entirely
            // pathTransition: 'none',

            // Colors
            pathColor: `rgba(53, 164, 250)`,
            textColor: "#35A4FA",
            trailColor: "#d6d6d6",
            backgroundColor: "#3e98c7",
          })}
        />
      </div>
      <h2>{props.info}</h2>
      <h3>{props.titulo}</h3>
    </div>
  );
}
