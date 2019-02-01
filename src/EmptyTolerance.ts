import ITolerance from './ITolerance'
import { IMeasurement } from '@deboertool/vo-measurement';

export default class EmptyTolerance implements ITolerance
{
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
