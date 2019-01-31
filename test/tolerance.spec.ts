import Precision from '@deboertool/vo-precision'
import { Factory } from '@deboertool/vo-unit'
import { expect } from 'chai'
import { Tolerance } from '../'

const positiveValue = 99.99
const negativeValue = -84
const units = new Factory()
const positiveVo = new Tolerance(positiveValue, new Precision(2), units.make('in'))
const negativeVo = new Tolerance(negativeValue, new Precision(2), units.make('mm'))

describe('Tolerance', () => {
  it(
    'returns the value', 
    () => expect(positiveVo.value()).to.equal(positiveValue)
  )
  
  it(
    'returns a plus for positive values',
    () => expect(positiveVo.sign()).to.equal('+')
  )

  it(
    'returns no sign for positive values since negative values are already signed',
    () => expect(negativeVo.sign()).to.equal('')
  )

  it(
    'returns the signed value as a string',
    () => {
      expect(positiveVo.signed()).to.equal('+99.99')
      expect(negativeVo.signed()).to.equal('-84')
    }
  )

  it(
    'returns a fully formatted string with units',
    () => {
      expect(positiveVo.toString()).to.equal('+99.99"')
      expect(negativeVo.toString()).to.equal('-84mm')
    }
  )
})