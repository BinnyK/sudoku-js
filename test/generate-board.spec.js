const expect = require('chai').expect
import { formatString } from '../js/utils/formatString'

describe('Format input', () => {
  it('should convert string value into multidimensional array', () => {
    const userInput = `
      800 406 007
      000 000 400
      010 000 650
      509 030 780
      000 070 000
      048 020 103
      052 000 090
      001 000 000
      300 902 005
     `

    expect(formatString(userInput)).to.equal([
      [ '8', '0', '0', '4', '0', '6', '0', '0', '7' ],
      [ '0', '0', '0', '0', '0', '0', '4', '0', '0' ],
      [ '0', '1', '0', '0', '0', '0', '6', '5', '0' ],
      [ '5', '0', '9', '0', '3', '0', '7', '8', '0' ],
      [ '0', '0', '0', '0', '7', '0', '0', '0', '0' ],
      [ '0', '4', '8', '0', '2', '0', '1', '0', '3' ],
      [ '0', '5', '2', '0', '0', '0', '0', '9', '0' ],
      [ '0', '0', '1', '0', '0', '0', '0', '0', '0' ],
      [ '3', '0', '0', '9', '0', '2', '0', '0', '5' ]
    ])
  });
})

