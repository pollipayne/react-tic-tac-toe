import React, { useState } from 'react';
import './App.css';

import Board from './components/Board';
import Square from './components/Square';

const PLAYER_1 = 'x';
const PLAYER_2 = 'o';

const generateSquares = () => {
  const squares = [];

  let currentId = 0;

  for (let row = 0; row < 3; row += 1) {
    squares.push([]);
    for (let col = 0; col < 3; col += 1) {
      squares[row].push({
        id: currentId,
        value: '',
      });
      currentId += 1;
    }
  }

  return squares;
}

const App = () => {

  // This starts state off as a 2D array of JS objects with
  // empty value and unique ids.
  const [squares, setSquares] = useState(generateSquares());

  // Wave 2
  // You will need to create a method to change the square 
  //   When it is clicked on.
  //   Then pass it into the squares as a callback
  const onClickCallback = (id) => {
    const updatedSquares = [...squares];
    let isTurnOfPlayerOne = true;
    updatedSquares.forEach((row) => {row.forEach((square) => {
        if (square.id === id) {
          let symbol = (isTurnOfPlayerOne ? PLAYER_1 : PLAYER_2)
          square.value = symbol;
    } isTurnOfPlayerOne = !isTurnOfPlayerOne
    })
      
    });
    setSquares(updatedSquares);
  
  };


  const checkForWinner = (squares) => {
    // Complete in Wave 3

    
    for (let i = 0; i < 3; i++) {
      if (squares[0][i] === 'x' && squares[1][i] === 'x' && squares[2][i] === 'x') {
        return 'x'
      } else if (squares[i][0] == 'x' && squares[i][1] === 'x' && squares[i][2] === 'x') {
        return 'x'
      } else if (squares[0][i] === 'o' && squares[1][i] === 'o' && squares[2][i] === 'o') {
        return 'o'
    } else if (squares[i][0] == 'o' && squares[i][1] === 'o' && squares[i][2] === 'o') {
      return 'o'
    }

    
    if (squares[0][0] === 'x' && squares[1][1] === 'x' && squares[2][2] === 'x') {
      return 'x'
    } else if (squares[0][0] === 'o' && squares[1][1] === 'o' && squares[2][2] === 'o') {
      return 'o'
    } else if (squares[0][2] === 'x' && squares[1][1] === 'x' && squares[2][0]==='x') {
      return 'x'
    } else if (squares[0][2] === 'o' && squares[1][1] === 'o' && squares[2][0]==='o') {
      return 'o'
    };

    for (let i=0; i < squares.length; i++) {
      for (let j=0; j < squares[i].length; j++) {
        if (squares[i][j] == '') {
          return null;
        }
      }
    };
    return "Tie";
  };
  

  const resetGame = () => {
    // Complete in Wave 4
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Tic Tac Toe</h1>
        <h2>The winner is {checkForWinner(squares)}</h2>
        <button>Reset Game</button>
      </header>
      <main>
        <Board squares={squares} onClickCallback={onClickCallback}/>
      </main>
    </div>
  );
};

export default App;
