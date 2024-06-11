import { useState, useEffect } from "react";
import React from "react";

import "./App.css";

import { IndexScreen } from "../../Layouts/IndexScreen";





function App() {
     useEffect(() => {
    const handleLoad = () => {
      window.scrollTo(0, document.body.scrollHeight);
    };

    window.addEventListener("load", handleLoad);

    return () => {
      window.removeEventListener("load", handleLoad);
    };
  }, []);

  return ( 
    <div className="h-screen bg-[#000000] text-white flex justify-center items-center">
      <div className="sm:aspect-square h-[90%] w-[80%]   lg:w-[min(100%,100vh)] lg:h-[min(100%,100vw)] flex flex-col justify-end items-center pl-6 sm:p-0 ">
        <IndexScreen />
        

      </div>
    </div>
  );
}

export default App;
