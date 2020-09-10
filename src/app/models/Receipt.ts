import { Product } from './Product'

export class Receipt {
  fullName: string
  idNumber: string
  address: string
  phoneNumber: string
  products: Product[]
  notes: string
}
