import { IMeasurement } from '@deboertool/vo-measurement'

export default interface ITolerance extends IMeasurement
{
  sign (): string
  signed (): string
  toString (): string
}