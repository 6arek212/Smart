import * as moment from 'moment';
moment.locale('he')


export const dateFormat = (date: string) => {
  return moment(date).fromNow()
}
