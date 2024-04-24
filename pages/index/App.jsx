 
import { useState, useEffect } from "react";
import React from "react";
 
 

import "./App.css";
 
 
import { IndexScreen } from "../../Layouts/IndexScreen";



const Square = React.memo(
  ({ rowIndex, colIndex, cell, onClick, isWinningSquare }) => {
    console.log("dd", isWinningSquare, rowIndex, colIndex, cell);
     
    return (
      <button
        className={`square absolute top-${rowIndex}/3 left-${colIndex}/3 w-1/3 h-1/3 text-8xl ${
          isWinningSquare ? "blink-animation" : ""
        }`}
        onClick={onClick}
      >
        {cell}
      </button>
    );
  }
);

function App() {
  

 


  //   <button
  //   key={key}
  //   className={`square absolute top-${rowIndex}/3 left-${colIndex}/3 w-1/3 h-1/3 text-8xl ${
  //     isWinningSquare ? "blink-animation" : ""
  //   }`}

  //   onClick={() => handleClick(rowIndex * 3 + colIndex)}
  // >
  //   {cell}
  // </button>



  



  return (
   
    <div className="h-screen bg-[#191c21] text-white flex justify-center items-center ">
      <div className="aspect-square w-full h-full flex flex-col  items-center">
      <IndexScreen/>

  
      </div>
    </div>
  );
}

 
export default App;
