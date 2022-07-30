import { INIT_SQUARES, FINISH_MOVE, RIGHT_ANSWER, WRONG_ANSWER, RESTART } from "../actions/root-actions"

const initState = {
  numOfSquares: 9,
  squares: undefined,
  startPosition: undefined,
  finishPos: undefined,
  arrayOfMoves: undefined,
  result: undefined,
  clickedOn: undefined
}

export const rootReducer = (state = initState, action) => {
  switch (action.type) {
    case INIT_SQUARES:
      return {
        ...state,
        squares: action.squares,
        startPosition: action.number
      }
    case FINISH_MOVE:
      return {
        ...state,
        finishPos: action.finish,
        arrayOfMoves: action.moves
      }
    case RIGHT_ANSWER:
      return {
        ...state,
        result: 'right',
        clickedOn: action.clickedOn
      }
    case WRONG_ANSWER:
      return {
        ...state,
        result: 'wrong',
        clickedOn: action.clickedOn
      }
    case RESTART:
      return {
        ...initState
      }
    default:
      return state
  }
}