import moment from 'moment';
import config from '../config';

export const getBaseUrl = (url) => {
  if (typeof url === 'string') {
    const pathArr = url.split('/');
    if (pathArr.length >= 2) {
      return `${pathArr[0]}//${pathArr[2]}`;
    }
  }
  return null;
};

export const checkMemo = (date) => moment(date)
  .add(config.memoization.amount, config.memoization.unit).isAfter(moment());
