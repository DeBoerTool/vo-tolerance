import { Precision, IPrecision } from '@deboertool/vo-precision'
import { Unit, IUnit } from '@deboertool/vo-unit'
import { IMeasurement } from '@deboertool/vo-measurement'
import ITolerance from './ITolerance'

export default class EmptyTolerance implements ITolerance
{
  isGreaterThan(comparison: number | IMeasurement): boolean {
    return false
  }

  isGreaterThanOrEqualTo(comparison: number | IMeasurement): boolean {
    return false
  }

  isEqualTo(comparison: number | IMeasurement): boolean {
    return false
  }

  isLessThan(comparison: number | IMeasurement): boolean {
    return false
  }

  isLessThanOrEqualTo(comparison: number): boolean {
    return false
  }

  precision (): IPrecision 
  {
    return new Precision(0)
  }

  unit (): IUnit
  {
    return new Unit('none', 'No Units', '')
  }

  sign (): string {
    return ''
  }  
  
  signed (): string {
    return ''
  }

  toString (): string {
    return ''
  }

  value (): number {
    return 0
  }

  clone (value: number): IMeasurement
  {
    return this
  }
  
  times (value: number): IMeasurement
  {
    return this
  }

  minus (value: number): IMeasurement
  {
    return this
  }
}
