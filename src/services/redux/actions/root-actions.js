import { initArray, initMoves } from "../../initial-functions";

export const INIT_SQUARES = 'INIT_SQUARES';
export const FINISH_MOVE = 'FINISH_MOVE';
export const CLICK_ON_BUTTON = 'CLICK_ON_BUTTON';
export const RIGHT_ANSWER = 'RIGHT_ANSWER';
export const WRONG_ANSWER = 'WRONG_ANSWER';
export const RESTART = 'RESTART';

export const buttonClick = (number) => {
  return function(dispatch, getState) {
    const {finishPos, result} = getState();
    if (!result) {
      if (number === finishPos) {
        dispatch({
          type: RIGHT_ANSWER,
          clickedOn: number
        })
      } else {
        dispatch({
          type: WRONG_ANSWER,
          clickedOn: number
        })
      }
    }
  }
}

export const startGame = () => {
  return function(dispatch, getState) {
    const {numOfSquares} = getState();
    const [squares, startPosition] = initArray(numOfSquares);
    dispatch({
      type: INIT_SQUARES,
      squares: squares,
      number: startPosition
    })
    const [finishtPos, arrayOfMoves] = initMoves(numOfSquares, startPosition, 10);
    dispatch({
      type: FINISH_MOVE,
      finish: finishtPos,
      moves: arrayOfMoves
    })
  }
}