import * as moment from 'moment';
moment.locale('Asia/hebron')


export const dateFormat = (date: string) => {
  return moment(date).fromNow()
}
