import Measurement from '@deboertool/vo-measurement'

export default class Tolerance extends Measurement 
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
