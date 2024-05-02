import { useState, useEffect } from "react";
import React from "react";

import "./App.css";

import { IndexScreen } from "../../Layouts/IndexScreen";





function App() {
  return ( 
    <div className="h-screen bg-[#000000] text-white flex justify-center items-center ">
      <div className="aspect-square w-full h-full flex flex-col justify-end items-center gap-14">
        <IndexScreen />
      </div>
    </div>
  );
}

export default App;
