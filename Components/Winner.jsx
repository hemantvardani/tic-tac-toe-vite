import { useState, useEffect } from "react";
import "../pages/index/App.css";

export function Winner({ winner, isX }) {
  return (
    <div>
      {
        <div className="text-4xl mt-6   ">
          {winner
            ? winner === "Tie"
              ? "It's a Tie!"
              : `${winner} wins!`
            : isX
            ? "Player 1 Chance"
            : "Player 2 Chance"}
        </div>
      }
    </div>
  );
}
