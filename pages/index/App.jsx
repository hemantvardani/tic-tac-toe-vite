import { useState, useEffect } from "react";
import React from "react";

import "./App.css";

import { IndexScreen } from "../../Layouts/IndexScreen";





function App() {
  return ( 
    <div className="h-screen bg-[#000000] text-white flex justify-center items-center ">
      <div className="md:aspect-square h-[100%] w-[100%] md:w-[min(100%,100vh)] md:h-[min(100%,100vw)] flex flex-col justify-end items-center  pl-6 ">
        <IndexScreen />
      </div>
    </div>
  );
}

export default App;
