import { Customer } from './Customer'
import { Device } from './Device'

export class Repair {
  _id: string
  createdAt: Date
  notes: string
  price: number
  status: boolean
  problems: string[]
  customer: Customer
  device: Device
}
