import { expect } from 'chai'
import Empty from '../src/EmptyTolerance'

const vo = new Empty()

describe('Tolerance', () => {
  it('has zero value', () => expect(vo.value()).to.equal(0))

  it('is an empty string', () => {
    const methods = ['sign', 'signed', 'toString']

    methods.forEach(
      method => expect(vo[method]()).to.equal('')
    )
  })

  it('is immutable', () => {
    const methods = ['times', 'minus', 'clone']

    methods.forEach(
      method => expect(vo[method](5)).to.eql(vo)
    )
  })
})