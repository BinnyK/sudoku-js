// utils
import { formatString } from './js/utils/formatString'

$(document).ready(function() {

  // Generate sudoku board from user input
  $('#generate-board button').click(function(){

    // get user input
    const userInput = $('#generate-board input').val()
    const initialValues = formatString(userInput)

    // set board with inital values
    for(let i = 0; i < initialValues.length; i++) {
      console.log("we're on row", i+1)
      for(let j = 0; j < initialValues[i].length; j++) {
        console.log("col", j+1)
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

});