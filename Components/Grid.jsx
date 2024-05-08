import { NineBlocks } from "./NineBlocks";
import "../pages/index/App.css";
import { PlayerModes } from "./PlayerModes";
import { useState, useEffect } from "react";
import { findBotBestMove, isMovesLeft } from "../Services/botDecision";

import { Howl } from 'howler';

 

export const soundsList= {

  
    'O':new Howl({ src: ['./../Sounds/positive_beeps.mp3'] , volume:0.6 }),
    'X':new Howl({ src: ['./../Sounds/x.mp3'] , volume:2}),
    'Tie':new Howl({ src: ['./../Sounds/negative_beeps.mp3'], volume:0.6 }),
    'Win':new Howl({ src: ['./../Sounds/win.mp3'], volume:0.17 }),
    'LosingAgainstBot':new Howl({ src: ['./../Sounds/LosingWithBot.mp3'], volume:0.3 }),
    }

    // export const soundsList= {

  
    //   'O':new Howl({ src: ['/assets/static/positive_beeps.mp3'] , volume:0.6 }),
    //   'X':new Howl({ src: ['/assets/static/x.mp3'] , volume:2}),
    //   'Tie':new Howl({ src: ['/assets/static/negative_beeps.mp3'], volume:0.6 }),
    //   'Win':new Howl({ src: ['/assets/static/win.mp3'], volume:0.17 }),
    //   'LosingAgainstBot':new Howl({ src: ['/assets/static/LosingWithBot.mp3'], volume:0.3 }),
    //   }
    


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
      console.log('aa1')

    }
  },[isX])

  


  useEffect(()=>{
    if(!winner) return;

    console.log('h')

    if(winner==='Tie')
    {soundsList.Tie.play();
        console.log('h1.5')
        return;
    }
    console.log('h2')


    if(gameMode==='BOT' && winner==='O'){
            soundsList.LosingAgainstBot.play();return;
    }
    
    console.log('h3')
    soundsList.Win.play();
    
   
   
  },[winner])

  
  
  
    return (  
      
      <div className="flex justify-center items-center gap-16">
    <div className="game">
 
      <div className="board relative">
        <div className={"stick-horizontal absolute w-[110%] left-0 top-1/3 transform -translate-x-1/2 "+ (winner ==="Tie" ? "blink-animation" : "") }></div>
        <div className={"stick-horizontal absolute w-[110%] left-0 top-2/3 transform -translate-x-1/2  " + (winner ==="Tie" ? "blink-animation" : "") }></div>
        <div className="board relative">
          <div className={"stick-vertical absolute h-[110%] left-1/3 top-0 transform -translate-y-1/2   " + (winner ==="Tie" ? "blink-animation" : "") }></div>
          <div className={"stick-vertical absolute h-[110%] left-2/3 top-0 transform -translate-y-1/2  "+ (winner ==="Tie" ? "blink-animation" : "") }></div>
 
          <NineBlocks resetGrid={resetGrid} winner={winner}  setWinner={setWinner} setScores={setScores} isX={isX}  setIsX={setIsX} board={board} setBoard={setBoard} winningSquares={winningSquares} setWinningSquares={setWinningSquares}            />

        </div>
      </div>
    </div>

        
      <div className=''>
    <PlayerModes resetGrid={resetGrid} gameMode={gameMode} setGameMode={setGameMode}  />
      </div>

  </div>
);
}