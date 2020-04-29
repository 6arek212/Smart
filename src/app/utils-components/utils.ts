import * as moment from 'moment';


export const dateFormat = (date: string) => {
  return moment(date).fromNow()
}
