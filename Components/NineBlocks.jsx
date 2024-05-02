import { useState, useEffect } from "react";
import "../pages/index/App.css";
import { soundsList } from "./Grid";



export function NineBlocks({resetGrid , winner, setWinner, isX , setIsX, board , setBoard, winningSquares, setWinningSquares }) {

  const handleClick = (index) => {
    if (board[Math.floor(index / 3)][index % 3] || winner) {
      // If the square is already occupied or there is a winner, do nothing
      return;
    }

    makeSoundMove(isX);

    setTimeout(()=>{
    const updatedBoard = [...board]; // Create a shallow copy of the board
    updatedBoard[Math.floor(index / 3)][index % 3] = isX ? "X" : "O"; // Update the clicked square
    setBoard(updatedBoard); // Update the state with the new board

    setIsX(!isX); // Switch the player

    },100)
    
  };



  function makeSoundMove(isx){
    if(isx)
    soundsList['X'].play()
    else 
    soundsList['O'].play()
  }

  const checkWinner = () => {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        board[i][0] &&
        board[i][0] === board[i][1] &&
        board[i][0] === board[i][2]
      ) {
        setWinner(board[i][0]);
        setWinningSquares([`${i}-0`, `${i}-1`, `${i}-2`]);
        return;
      }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        board[0][i] &&
        board[0][i] === board[1][i] &&
        board[0][i] === board[2][i]
      ) {
        setWinner(board[0][i]);
        setWinningSquares([`0-${i}`, `1-${i}`, `2-${i}`]);
        return;
      }
    }

    // Check diagonals
    if (
      board[0][0] &&
      board[0][0] === board[1][1] &&
      board[0][0] === board[2][2]
    ) {
      setWinner(board[0][0]);
      setWinningSquares([`0-0`, `1-1`, `2-2`]);
      return;
    }

    if (
      board[0][2] &&
      board[0][2] === board[1][1] &&
      board[0][2] === board[2][0]
    ) {
      setWinner(board[0][2]);
      setWinningSquares([`0-2`, `1-1`, `2-0`]);
      return;
    }

    // Check for tie
    if (!board.flat().includes(null)) {
      setWinner("Tie");
      return;
    }
  };

  useEffect(() => {
    checkWinner();
  }, [board]);






  useEffect(()=>{

    if(winningSquares.length || winner ){
        const id= setTimeout(()=>{
          console.log('ss1')
            resetGrid();
  
      },2000)
  
      return ()=> clearTimeout(id);
    }
  },[winningSquares,winner])

 
  return (
    <>
    <div style={{marginTop:-10}}>


 
      {board.map((row, rowIndex) =>
        row.map((cell, colIndex) => {
          const key = `${rowIndex}-${colIndex}`;
          const isWinningSquare = winningSquares.includes(key);

          // return <Square key={key} rowIndex={rowIndex} colIndex={colIndex} cell={cell}
          // onClick={() => handleClick(rowIndex * 3 + colIndex)}
          // />

          return (
            <button
                key={`${rowIndex}-${colIndex}`}
              className={`square absolute top-${rowIndex}/3 left-${colIndex}/3 w-1/3 h-1/3 text-9xl ${
                isWinningSquare ? "blink-animation" : ""
              }`}
              onClick={() => {  
                 handleClick(rowIndex * 3 + colIndex);
              }}
            >
              {cell} 
            </button>
          );
        })
      )}
         </div>
    </>
  );
}
