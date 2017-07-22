// remove '0's
const removeZero = arr =>
  arr.filter(function(el) {
    return el !== '0'
  })

// check for duplicates
const isValid = arr => {
  arr = removeZero(arr)
  return arr.length === new Set(arr).size

}

// validate row
const checkValidRows = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (isValid(arr[i]) === false) {
      return false
    }
  }
  return true
}

// validate col
const checkValidCols = arr => {
  for (let i = 0; i < arr.length; i++) {
    if (isValid([
        arr[0][i],
        arr[1][i],
        arr[2][i],
        arr[3][i],
        arr[4][i],
        arr[5][i],
        arr[6][i],
        arr[7][i],
        arr[8][i]]
      ) === false) {
      return false
    }
  }
  return true
}

// create new region array
const createRegions = arr => {
  return [
    // region 1
    [arr[0][0], arr[0][1], arr[0][2], arr[1][0], arr[1][1], arr[1][2], arr[2][0], arr[2][1], arr[2][2]],
    // region 2
    [arr[0][3], arr[0][4], arr[0][5], arr[1][3], arr[1][4], arr[1][5], arr[2][3], arr[2][4], arr[2][5]],
    // region 3
    [arr[0][6], arr[0][7], arr[0][8], arr[1][6], arr[1][7], arr[1][8], arr[2][6], arr[2][7], arr[2][8]],
    // region 4
    [arr[3][0], arr[3][1], arr[3][2], arr[4][0], arr[4][1], arr[4][2], arr[5][0], arr[5][1], arr[5][2]],
    // region 5
    [arr[3][3], arr[3][4], arr[3][5], arr[4][3], arr[4][4], arr[4][5], arr[5][3], arr[5][4], arr[5][5]],
    // region 6
    [arr[3][6], arr[3][7], arr[3][8], arr[4][6], arr[4][7], arr[4][8], arr[5][6], arr[5][7], arr[5][8]],
    // region 7
    [arr[6][0], arr[6][1], arr[6][2], arr[7][0], arr[7][1], arr[7][2], arr[8][0], arr[8][1], arr[8][2]],
    // region 8
    [arr[6][3], arr[6][4], arr[6][5], arr[7][3], arr[7][4], arr[7][5], arr[8][3], arr[8][4], arr[8][5]],
    // region 9
    [arr[6][6], arr[6][7], arr[6][8], arr[7][6], arr[7][7], arr[7][8], arr[8][6], arr[8][7], arr[8][8]],
  ]
}

// validate region
const checkValidRegs = arr => {
  arr = createRegions(arr)
  for (let i = 0; i < arr.length; i++) {
    if (isValid(arr[i]) === false) {
      return false
    }
  }
  return true
}

// validate row, col and region
const checkAllValid = arr =>
  !!(checkValidRows(arr) && checkValidCols(arr) && checkValidRegs(arr))

export {
  isValid,
  checkValidRows,
  checkValidCols,
  checkValidRegs,
  checkAllValid
}
