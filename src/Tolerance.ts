import Measurement from '@deboertool/vo-measurement'

export default class Tolerance extends Measurement {
  public sign (): string {
    return Math.sign(this.value()) >= 0 ? '+' : ''
  }

  public signed (): string {
    return String(
      this.sign() + this.value()
    )
  }

  public git push -u origin master
}
