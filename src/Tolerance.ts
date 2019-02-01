import Measurement from '@deboertool/vo-measurement'
import ITolerance from './ITolerance'

export default class Tolerance extends Measurement implements ITolerance
{
  public sign (): string 
  {
    return Math.sign(this.value()) >= 0 ? '+' : ''
  }

  public signed (): string 
  {
    return this.sign() + String(this.value())
  }

  public toString (): string 
  {
    return this.signed() + this._units.symbol()
  }
}
