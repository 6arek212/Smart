export class Device {
  company:string
  model: string
  released: Date
  _id: string

  constructor(){
    this.model="iPhone X"
    this.released=new Date()
    this._id="1"
  }
}
