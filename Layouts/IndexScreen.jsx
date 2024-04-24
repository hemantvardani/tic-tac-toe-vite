import { useState,useEffect } from "react";
import { Winner } from "../Components/Winner";
import { Grid } from "../Components/Grid";
import { ScoreTable } from "../Components/ScoreTable";
import "../pages/index/App.css";


export function IndexScreen(){

    const [winner, setWinner] = useState(null);
    const [isX, setIsX] = useState(true);
    const [gameMode, setGameMode] = useState("2P"); // Default: 2 Players
    const [scores, setScores] = useState({ player1: 0, tie: 0, player2: 0 });

    
  useEffect(() => {
    console.log("winner", winner);
    if (winner) {
      

      const updatedScores = { ...scores };
      if (winner === "X") {
        updatedScores.player1++;
      } else if (winner === "O") {
        updatedScores.player2++;
      } else {
        updatedScores.tie++;
      }
      setScores(updatedScores);

      const timer = setTimeout(() => {
        console.log('ss2')
        console.log()
        resetGame();
      }, 2000); 

      return () => {
        clearTimeout(timer);  
      };
    }
  }, [winner]);



  const resetGame = () => {

    setWinner(null);
    setIsX(true);
  };





  useEffect(()=>{
    console.log("he")
    resetGame();
  },[gameMode])



    return (<>
     {/* <Winner winner={winner} isX={isX}/> */}
 
 <Grid winner={winner} setWinner={setWinner} setScores={setScores} isX={isX} setIsX={setIsX} gameMode={gameMode} setGameMode={setGameMode} />

 <ScoreTable scores={scores} isX={isX} gameMode={gameMode}/>
 
 </>);

}