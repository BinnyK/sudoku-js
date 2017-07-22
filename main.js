// utils
import { formatSudokuString } from './js/utils/formatString'
import { checkAllValid } from './js/utils/validations'

$(document).ready(function() {

  // Generate sudoku board from user input
  $('#generate-board button').click(function(){

    // User input
    const userInput = $('#generate-board input').val()
    const initialValues = formatSudokuString(userInput)

    // Populate with inital values
    for(let i = 0; i < initialValues.length; i++) {
      for(let j = 0; j < initialValues[i].length; j++) {
        if (initialValues[i][j] !== '0') {
          $(`#row${i+1} .col${j+1}`).text(initialValues[i][j])
        }
      }
    }
  })

  // Reset board
  $('#reset').click(function() {
    $('.box').text('')
  })

  // Sudoku validation
  $('#check-valid').click(function() {

    // Get current state of board
    const getCurrentState = arr => {
      for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr[i].length; j++) {

          // Replace '0's with value
          if (arr[i][j] === '0') {
            let value = $(`#row${i+1} .col${j+1} input`).val()
            if (value.toString() === '') {
              arr[i][j] = '0'
            } else {
              arr[i][j] = value.toString()
            }
          }
        }
      }
      return arr
    }

    // Update state
    const newState = getCurrentState(initialValues)

    // Alerts
    if (checkAllValid(newState) === true) {
      alert("Yo it's valid")
    } else {
      alert("Sorry matey, there's a mistake")
    }
  })
});






























