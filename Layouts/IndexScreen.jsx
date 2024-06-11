import { useState,useEffect } from "react";
 import { Grid } from "../Components/Grid";
import { ScoreTable } from "../Components/ScoreTable";
import "../pages/index/App.css";


export function IndexScreen(){

    const [winner, setWinner] = useState(null);
    const [begginer, setbegginer]= useState('X')
    const [isX, setIsX] = useState(true);
    const [gameMode, setGameMode] = useState("BOT"); 
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
         
        setWinner(null);
        console.log(begginer,'begginer')
        setbegginer(begginer==='X'?'O':'X');
        
      }, 2000); 

      return () => {
        clearTimeout(timer);  
      };
    }
  }, [winner]);


  useEffect(()=>{
        // console.log('vardaa')
        // console.log(isX,begginer)
        setIsX(begginer==='X'?true:false)
        
  },[begginer])


  const resetGame = () => {

    setWinner(null);
    setIsX(true);
  };





  useEffect(()=>{
    // console.log("he")
    resetGame();
    setScores({ player1: 0, tie: 0, player2: 0 })
  },[gameMode])


  // useEffect(()=>{
  //   console.log("test", isX);
  //    console.log('begginer*',begginer)})
  


    return (<>
     {/* <Winner winner={winner} isX={isX}/> */}
 

 <Grid winner={winner} setWinner={setWinner} setScores={setScores} isX={isX} setIsX={setIsX} gameMode={gameMode} setGameMode={setGameMode} />
 

 <ScoreTable scores={scores} isX={isX} gameMode={gameMode}/>
 
 </>);

}