export const initArray = (initNum) => {
  let array = Array(initNum).fill(false);
  const startPosition = Math.floor(Math.random() * initNum);
  array.splice(startPosition, 1, true);
  return [array, startPosition + 1]
}

export const initMoves = (initNum, startPos, steps) => {
  let arrayOfMoves = [];
  const perRow = Math.sqrt(initNum);
  let currentPos = startPos;
  for (let i = 0; i < steps; i++) {
    const availableMoves = getAvailableMoves(currentPos, perRow, initNum);
    const [newPosition, sideToMove] = move(availableMoves, currentPos, perRow);
    currentPos = newPosition;
    arrayOfMoves.push(sideToMove)
  }
  return [currentPos, arrayOfMoves]
}

const getAvailableMoves = (currentPos, perRow, initNum) => {
  let availableMoves = [];
  if (currentPos > perRow) {
    availableMoves.push('up')
  }
  if (currentPos <= initNum - perRow) {
    availableMoves.push('down')
  }
  if (currentPos % perRow !== 1) {
    availableMoves.push('left')
  }
  if (currentPos % perRow !== 0) {
    availableMoves.push('right')
  }
  return availableMoves
}

const move = (availableMoves, currentPos, perRow) => {
  const random = Math.floor(Math.random() * availableMoves.length);
  const sideToMove = availableMoves[random];
  let newPosition
  switch (sideToMove) {
    case 'up':
      newPosition = currentPos - perRow
      break
    case 'down':
      newPosition = currentPos + perRow
      break
    case 'left':
      newPosition = currentPos - 1
      break
    case 'right':
      newPosition = currentPos + 1
      break
    default:
      newPosition = currentPos
  }
  return [newPosition, sideToMove]
}