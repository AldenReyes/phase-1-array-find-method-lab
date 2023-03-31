superbowlWin = (statArray) => {
  const winFound = statArray.find(object => object.result === "W")
  if (winFound) {
    return winFound.year
  } else {
    return undefined
  }
}