import { useState,useEffect } from "react";
import "../pages/index/App.css";

import React from 'react';
import { Grid, Typography, Card, Avatar } from '@mui/material';
import { KingOutlined as CrownIcon } from '@mui/icons-material'; // Material UI crown icon




// export function ScoreTable({scores}){
//  const isX=false;
//     return (
//         <div className="score flex gap-3 absolute bottom-0">
//         <div
//           className={`text-5xl ${isX ? "move-underline" : ""}`}
//           style={{
//             color:
//               scores.player1 !== scores.player2
//                 ? scores.player1 > scores.player2
//                   ? "green"
//                   : "red"
//                 : "white",
//           }}
//         >
//           X : {scores.player1}
//         </div>
//         <div
//           className={`text-5xl ${!isX ? "move-underline" : ""}`}
//           style={{
//             color:
//               scores.player1 !== scores.player2
//                 ? scores.player1 < scores.player2
//                   ? "green"
//                   : "red"
//                 : "white",
//           }}
//         >
//           O : {scores.player2}
//         </div>
//       </div>




//     );

// }




export const ScoreTable = ({ scores }) => {
  const xScore= scores.player1;
  const oScore= scores.player2;
  const leadingPlayer = xScore > oScore ? 'X' : (xScore < oScore ? 'O' : 'Tie');

  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          {leadingPlayer === 'X' && (
            <Avatar sx={{ mr: 1, bgcolor: 'blue' }}>
              <CrownIcon />
            </Avatar>
          )}
          <Typography variant="h6" component="div" sx={{ color: 'blue' }}>
            X: {xScore}
          </Typography>
        </Grid>
        <Grid item xs={6}>
          {leadingPlayer === 'O' && (
            <Avatar sx={{ mr: 1, bgcolor: 'inherit' }}>
              <CrownIcon />
            </Avatar>
          )}
          <Typography variant="h6" component="div">
            O: {oScore}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

 
