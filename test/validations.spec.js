const expect = require('chai').expect
import {
  isValid,
  checkValidRows,
  checkValidCols,
  checkValidRegs,
  checkAllValid
} from '../js/utils/validations'

describe('Validations', () => {
  let currentState

  beforeEach('set currentState', () => {
    currentState = [
      [ '8', '0', '0', '4', '0', '6', '0', '0', '7' ],
      [ '0', '0', '0', '0', '0', '0', '4', '0', '0' ],
      [ '0', '1', '0', '0', '0', '0', '6', '5', '0' ],
      [ '5', '0', '9', '0', '3', '0', '7', '8', '0' ],
      [ '0', '0', '0', '0', '7', '0', '0', '0', '0' ],
      [ '0', '4', '8', '0', '2', '0', '1', '0', '3' ],
      [ '0', '5', '2', '0', '0', '0', '0', '9', '0' ],
      [ '0', '0', '1', '0', '0', '0', '0', '0', '0' ],
      [ '3', '0', '0', '9', '0', '2', '0', '0', '5' ]
    ]
  })

  it('should remove zeros and check for duplicates', () => {
    expect(
      isValid([ '8', '0', '0', '4', '0', '6', '0', '0', '7' ])
    ).to.equal(true)
  })

  it('should check rows are valid', () => {
    expect(checkValidRows(currentState)).to.equal(true)
  });

  it('should check columns are valid', () => {
    expect(checkValidCols(currentState)).to.equal(true)
  });

  it('should check region are valid', () => {
    expect(checkValidRegs(currentState)).to.equal(true)
  });

  it('should check rows, cols and regions are valid', () => {
    expect(checkAllValid(currentState)).to.equal(true)
  });
})