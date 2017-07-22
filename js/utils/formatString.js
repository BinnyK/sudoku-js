import { compose, map, split } from 'ramda'

// remove whitespace
const removeWhitespace = string =>
  string.replace(/\s/g,'')

// split at each row
const splitEvery9th = string =>
  string.match(/.{1,9}/g)

// Format string into multi dimensional array
const formatSudokuString = compose(
  console.log.bind(console),
  map(
    split("")
  ),
  splitEvery9th,
  removeWhitespace
)

export {
  formatSudokuString
}
