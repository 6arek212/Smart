import { Exception } from "handlebars"

export class DataState {

}



export class Loading extends DataState {

}

export class Success extends DataState {
  data: any
  constructor(data) {
    super()
    this.data = data
  }
}


export class mError extends DataState {
  exception: Exception
  constructor(exception) {
    super()
    this.exception = exception
  }
}
