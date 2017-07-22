import { compose, map, split } from 'ramda'

const removeWhitespace = string =>
  string.replace(/\s/g,'')

const splitEvery9th = string =>
  string.match(/.{1,9}/g)


const formatString = compose(
  map(
    split("")
  ),
  splitEvery9th,
  removeWhitespace
)

export {
  formatString
}
