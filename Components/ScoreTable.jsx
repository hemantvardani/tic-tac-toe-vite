import { useState, useEffect } from "react";
import "../pages/index/App.css";

import React from "react";

import crownImage from "./../renderer/crown3.png";
import { Tooltip } from "antd";

export function ScoreTable({ scores, isX, gameMode }) {
  const isXLeading = scores.player1 >= scores.player2 && scores.player1 != 0;
  const isOLeading = scores.player2 >= scores.player1 && scores.player2 != 0;

  return (
    <div className="score justify-center items-center flex">
      <div className="flex flex-col justify-center items-center  ">
        <div style={{ visibility: isXLeading ? "" : "hidden" }}>
        <img
            src={crownImage}
            alt="Crown"
            style={{
              marginBottom: "-5px",
              
              transform: "translateX(-24%)", // Center the crown horizontally
              height: "50px", // Adjust the size of the crown
            }}
          />  
        </div>
        <Tooltip
          placement="top"
          title={`Score of X is ${scores.player1}`}
          color="blue"
        >
          <div
            className={`text-3xl -m-6`}
            style={{
              color: isXLeading ? "green" : "white",
            }}
          >
            X : {scores.player1}
          </div>
        </Tooltip>
        <div className={` ${isX ? "move-underline" : ""}`} />
      </div>

      <div className="flex flex-col justify-center items-center">
        <div style={{ visibility: isOLeading ? "" : "hidden" }}>
          <img
            src={crownImage}
            alt="Crown"
            style={{
              marginBottom: "-5px",
              // top: "-0px", // Adjust this to position the crown
              // left: "30%", // Adjust this to position the crown
              transform: "translateX(-24%)", // Center the crown horizontally
              height: "50px", // Adjust the size of the crown
            }}
          />
        </div>
        <Tooltip
          placement="top"
          title={`Score of O is ${scores.player2}`}
          color="blue"
        >
          <div
            className={`text-3xl -m-6`}
            style={{
              color: isOLeading ? "green" : "white",
            }}
          >
            O : {scores.player2}
          </div>
        </Tooltip>
          <div
          className={` ${!isX && gameMode === "2P" ? "move-underline" : ""}`}
        />  
        
      </div>
    </div>
  );
}
