import { NineBlocks } from "./NineBlocks";
import "../pages/index/App.css";
import { PlayerModes } from "./PlayerModes";
import { useState, useEffect } from "react";
import { findBotBestMove, isMovesLeft } from "../Services/botDecision";

export function Grid({winner, setWinner, setScores , isX, setIsX, gameMode , setGameMode}){

  const [winningSquares, setWinningSquares] = useState([]);

  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  function resetGrid(){
    setBoard([
        [null, null, null],
        [null, null, null],
        [null, null, null],
      ]);
      
      setWinningSquares([]);
    
  }
 
  useEffect(()=>{
    if(!isX && gameMode==='BOT' && !winner && isMovesLeft(board))
    {
      
      console.log("helo")
      const [row, col]= findBotBestMove([...board]);
      console.log(row,col)
      const newBoard= [...board];
      newBoard[row][col]='O';
      setBoard(newBoard);
      setIsX(true);

    }
  },[isX])



    return (  
      
      <div className="flex justify-center items-center flex-1 gap-16">
    <div className="game">
 
      <div className="board relative">
        <div className="stick-horizontal absolute w-[110%] left-0 top-1/3 transform -translate-x-1/2   "></div>
        <div className="stick-horizontal absolute w-[110%] left-0 top-2/3 transform -translate-x-1/2  "></div>
        <div className="board relative">
          <div className="stick-vertical absolute h-[110%] left-1/3 top-0 transform -translate-y-1/2   "></div>
          <div className="stick-vertical absolute h-[110%] left-2/3 top-0 transform -translate-y-1/2  "></div>
 
          <NineBlocks resetGrid={resetGrid} winner={winner}  setWinner={setWinner} setScores={setScores} isX={isX}  setIsX={setIsX} board={board} setBoard={setBoard} winningSquares={winningSquares} setWinningSquares={setWinningSquares}            />

        </div>
      </div>
    </div>

        
      <div className='right-0'>
    <PlayerModes resetGrid={resetGrid} gameMode={gameMode} setGameMode={setGameMode}  />
      </div>

  </div>
);
}