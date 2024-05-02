import { jsx, Fragment, jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { Tooltip } from "antd";
import { Howl } from "howler";
const App$1 = "";
function NineBlocks({ resetGrid, winner, setWinner, isX, setIsX, board, setBoard, winningSquares, setWinningSquares }) {
  const handleClick = (index2) => {
    if (board[Math.floor(index2 / 3)][index2 % 3] || winner) {
      return;
    }
    makeSoundMove(isX);
    setTimeout(() => {
      const updatedBoard = [...board];
      updatedBoard[Math.floor(index2 / 3)][index2 % 3] = isX ? "X" : "O";
      setBoard(updatedBoard);
      setIsX(!isX);
      console.log("aa");
    }, 100);
  };
  function makeSoundMove(isx) {
    if (isx)
      soundsList["X"].play();
    else
      soundsList["O"].play();
  }
  const checkWinner = () => {
    for (let i = 0; i < 3; i++) {
      if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
        setWinner(board[i][0]);
        setWinningSquares([`${i}-0`, `${i}-1`, `${i}-2`]);
        return;
      }
    }
    for (let i = 0; i < 3; i++) {
      if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
        setWinner(board[0][i]);
        setWinningSquares([`0-${i}`, `1-${i}`, `2-${i}`]);
        return;
      }
    }
    if (board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
      setWinner(board[0][0]);
      setWinningSquares([`0-0`, `1-1`, `2-2`]);
      return;
    }
    if (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
      setWinner(board[0][2]);
      setWinningSquares([`0-2`, `1-1`, `2-0`]);
      return;
    }
    if (!board.flat().includes(null)) {
      setWinner("Tie");
      return;
    }
  };
  useEffect(() => {
    checkWinner();
  }, [board]);
  useEffect(() => {
    if (winningSquares.length || winner) {
      const id = setTimeout(() => {
        console.log("ss1");
        resetGrid();
      }, 2e3);
      return () => clearTimeout(id);
    }
  }, [winningSquares, winner]);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("div", { style: { marginTop: -10 }, children: board.map(
    (row, rowIndex) => row.map((cell, colIndex) => {
      const key = `${rowIndex}-${colIndex}`;
      const isWinningSquare = winningSquares.includes(key);
      return /* @__PURE__ */ jsx(
        "button",
        {
          className: `cell_ square absolute top-${rowIndex}/3 left-${colIndex}/3 w-1/3 h-1/3 ${isWinningSquare ? "blink-animation" : ""}`,
          onClick: () => {
            handleClick(rowIndex * 3 + colIndex);
          },
          children: cell
        },
        `${rowIndex}-${colIndex}`
      );
    })
  ) }) });
}
const BotIcon = () => {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "16",
      height: "16",
      fill: "currentColor",
      class: "bi bi-robot",
      viewBox: "0 0 16 16",
      children: [
        /* @__PURE__ */ jsx("path", { d: "M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5M3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.6 26.6 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.93.93 0 0 1-.765.935c-.845.147-2.34.346-4.235.346s-3.39-.2-4.235-.346A.93.93 0 0 1 3 9.219zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a25 25 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25 25 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135" }),
        /* @__PURE__ */ jsx("path", { d: "M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2zM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5" })
      ]
    }
  );
};
function PlayerModes({ resetGrid, gameMode, setGameMode }) {
  function handleModeChange(mode) {
    setGameMode(mode);
    resetGrid();
  }
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center items-center gap-2", children: [
    /* @__PURE__ */ jsx(Tooltip, { placement: "right", title: "2 Players", color: "blue", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: `button ${gameMode === "2P" ? "button-active" : ""}`,
        onClick: () => handleModeChange("2P"),
        children: /* @__PURE__ */ jsx(
          "svg",
          {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "currentColor",
            class: "bi bi-people-fill",
            viewBox: "0 0 16 16",
            children: /* @__PURE__ */ jsx("path", { d: "M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" })
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsx(Tooltip, { placement: "right", title: "Against BOT", color: "blue", children: /* @__PURE__ */ jsx(
      "button",
      {
        className: `button ${gameMode === "BOT" ? "button-active" : ""}`,
        onClick: () => handleModeChange("BOT"),
        children: /* @__PURE__ */ jsx(BotIcon, {})
      }
    ) })
  ] });
}
let player = "O", opponent = "X";
class Move {
  constructor() {
  }
}
function isMovesLeft(board) {
  for (let i = 0; i < 3; i++)
    for (let j = 0; j < 3; j++)
      if (!board[i][j])
        return true;
  return false;
}
function evaluate(b) {
  for (let row = 0; row < 3; row++) {
    if (b[row][0] == b[row][1] && b[row][1] == b[row][2]) {
      if (b[row][0] == player)
        return 10;
      else if (b[row][0] == opponent)
        return -10;
    }
  }
  for (let col = 0; col < 3; col++) {
    if (b[0][col] == b[1][col] && b[1][col] == b[2][col]) {
      if (b[0][col] == player)
        return 10;
      else if (b[0][col] == opponent)
        return -10;
    }
  }
  if (b[0][0] == b[1][1] && b[1][1] == b[2][2]) {
    if (b[0][0] == player)
      return 10;
    else if (b[0][0] == opponent)
      return -10;
  }
  if (b[0][2] == b[1][1] && b[1][1] == b[2][0]) {
    if (b[0][2] == player)
      return 10;
    else if (b[0][2] == opponent)
      return -10;
  }
  return 0;
}
function minimax(board, depth, isMax) {
  let score = evaluate(board);
  if (score == 10)
    return score;
  if (score == -10)
    return score;
  if (isMovesLeft(board) == false)
    return 0;
  if (isMax) {
    let best = -1e3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          board[i][j] = player;
          best = Math.max(best, minimax(board, depth + 1, !isMax));
          board[i][j] = null;
        }
      }
    }
    return best;
  } else {
    let best = 1e3;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!board[i][j]) {
          board[i][j] = opponent;
          best = Math.min(best, minimax(board, depth + 1, !isMax));
          board[i][j] = null;
        }
      }
    }
    return best;
  }
}
function findBotBestMove(board) {
  let bestVal = -1e3;
  let bestMove = new Move();
  bestMove.row = -1;
  bestMove.col = -1;
  let bestMovesSet = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (!board[i][j]) {
        board[i][j] = player;
        let moveVal = minimax(board, 0, false);
        board[i][j] = null;
        if (moveVal > bestVal) {
          bestMove.row = i;
          bestMove.col = j;
          bestVal = moveVal;
          bestMovesSet = [[i, j]];
        } else if (moveVal === bestVal) {
          bestMovesSet.push([i, j]);
        }
        console.log("move value", i, j, moveVal);
      }
    }
  }
  console.log("The value of the best Move is : ", bestVal + "<br><br>");
  const randomIndex = Math.floor(Math.random() * bestMovesSet.length);
  return bestMovesSet[randomIndex];
}
const soundsList = {
  "O": new Howl({ src: ["./../Sounds/positive_beeps.mp3"], volume: 0.6 }),
  "X": new Howl({ src: ["./../Sounds/x.mp3"], volume: 2 }),
  "Tie": new Howl({ src: ["./../Sounds/negative_beeps.mp3"], volume: 0.6 }),
  "Win": new Howl({ src: ["./../Sounds/win.mp3"], volume: 0.17 }),
  "LosingAgainstBot": new Howl({ src: ["./../Sounds/LosingWithBot.mp3"], volume: 0.3 })
};
function Grid({ winner, setWinner, setScores, isX, setIsX, gameMode, setGameMode }) {
  const [winningSquares, setWinningSquares] = useState([]);
  const [board, setBoard] = useState([
    [null, null, null],
    [null, null, null],
    [null, null, null]
  ]);
  function resetGrid() {
    setBoard([
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ]);
    setWinningSquares([]);
  }
  useEffect(() => {
    if (!isX && gameMode === "BOT" && !winner && isMovesLeft(board)) {
      console.log("helo");
      const [row, col] = findBotBestMove([...board]);
      console.log(row, col);
      const newBoard = [...board];
      newBoard[row][col] = "O";
      setBoard(newBoard);
      setIsX(true);
      console.log("aa1");
    }
  }, [isX]);
  useEffect(() => {
    if (!winner)
      return;
    console.log("h");
    if (winner === "Tie") {
      soundsList.Tie.play();
      console.log("h1.5");
      return;
    }
    console.log("h2");
    if (gameMode === "BOT" && winner === "O") {
      soundsList.LosingAgainstBot.play();
      return;
    }
    console.log("h3");
    soundsList.Win.play();
  }, [winner]);
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-center items-center gap-16", children: [
    /* @__PURE__ */ jsx("div", { className: "game", children: /* @__PURE__ */ jsxs("div", { className: "board relative", children: [
      /* @__PURE__ */ jsx("div", { className: "stick-horizontal absolute w-[110%] left-0 top-1/3 transform -translate-x-1/2 " + (winner === "Tie" ? "blink-animation" : "") }),
      /* @__PURE__ */ jsx("div", { className: "stick-horizontal absolute w-[110%] left-0 top-2/3 transform -translate-x-1/2  " + (winner === "Tie" ? "blink-animation" : "") }),
      /* @__PURE__ */ jsxs("div", { className: "board relative", children: [
        /* @__PURE__ */ jsx("div", { className: "stick-vertical absolute h-[110%] left-1/3 top-0 transform -translate-y-1/2   " + (winner === "Tie" ? "blink-animation" : "") }),
        /* @__PURE__ */ jsx("div", { className: "stick-vertical absolute h-[110%] left-2/3 top-0 transform -translate-y-1/2  " + (winner === "Tie" ? "blink-animation" : "") }),
        /* @__PURE__ */ jsx(NineBlocks, { resetGrid, winner, setWinner, setScores, isX, setIsX, board, setBoard, winningSquares, setWinningSquares })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(PlayerModes, { resetGrid, gameMode, setGameMode }) })
  ] });
}
const crownImage = "/tic-tac-toe-vite/assets/static/crown3.10915793.png";
function ScoreTable({ scores, isX, gameMode }) {
  const isXLeading = scores.player1 >= scores.player2 && scores.player1 != 0;
  const isOLeading = scores.player2 >= scores.player1 && scores.player2 != 0;
  return /* @__PURE__ */ jsxs("div", { className: "score items-end flex gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col  justify-end", children: [
      /* @__PURE__ */ jsx("div", { style: { visibility: isXLeading ? "" : "hidden" }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: crownImage,
          alt: "Crown",
          style: {
            marginBottom: "-5px",
            // top: "-0px", // Adjust this to position the crown
            // left: "30%", // Adjust this to position the crown
            transform: "translateX(-24%)",
            // Center the crown horizontally
            height: "50px"
            // Adjust the size of the crown
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        Tooltip,
        {
          placement: "top",
          title: `Score of X is ${scores.player1}`,
          color: "blue",
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: `text-3xl -m-6`,
              style: {
                color: isXLeading ? "green" : "white"
              },
              children: [
                "X : ",
                scores.player1
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsx("div", { className: ` ${isX ? "move-underline" : ""}` })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col  justify-end", children: [
      /* @__PURE__ */ jsx("div", { style: { visibility: isOLeading ? "" : "hidden" }, children: /* @__PURE__ */ jsx(
        "img",
        {
          src: crownImage,
          alt: "Crown",
          style: {
            marginBottom: "-5px",
            // top: "-0px", // Adjust this to position the crown
            // left: "30%", // Adjust this to position the crown
            transform: "translateX(-24%)",
            // Center the crown horizontally
            height: "50px"
            // Adjust the size of the crown
          }
        }
      ) }),
      /* @__PURE__ */ jsx(
        Tooltip,
        {
          placement: "top",
          title: `Score of O is ${scores.player2}`,
          color: "blue",
          children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: `text-3xl -m-6`,
              style: {
                color: isOLeading ? "green" : "white"
              },
              children: [
                "O : ",
                scores.player2
              ]
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: ` ${!isX && gameMode === "2P" ? "move-underline" : ""}`
        }
      )
    ] })
  ] });
}
function IndexScreen() {
  const [winner, setWinner] = useState(null);
  const [begginer, setbegginer] = useState("X");
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
        console.log("ss2");
        setWinner(null);
        console.log(begginer, "begginer");
        setbegginer(begginer === "X" ? "O" : "X");
      }, 2e3);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [winner]);
  useEffect(() => {
    setIsX(begginer === "X" ? true : false);
  }, [begginer]);
  const resetGame = () => {
    setWinner(null);
    setIsX(true);
  };
  useEffect(() => {
    console.log("he");
    resetGame();
    setScores({ player1: 0, tie: 0, player2: 0 });
  }, [gameMode]);
  useEffect(() => {
    console.log("test", isX);
    console.log("begginer*", begginer);
  });
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Grid, { winner, setWinner, setScores, isX, setIsX, gameMode, setGameMode }),
    /* @__PURE__ */ jsx(ScoreTable, { scores, isX, gameMode })
  ] });
}
function App() {
  return /* @__PURE__ */ jsx("div", { className: "h-screen bg-[#000000] text-white flex justify-center items-center ", children: /* @__PURE__ */ jsx("div", { className: "aspect-square w-full h-full flex flex-col justify-end items-center gap-14", children: /* @__PURE__ */ jsx(IndexScreen, {}) }) });
}
const index = "";
function Page() {
  return /* @__PURE__ */ jsx(App, {});
}
export {
  Page
};
