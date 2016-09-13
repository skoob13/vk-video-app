import { strings } from './localization';

export function convertDateToString(timestamp) {
  let date = new Date(timestamp * 1000);

  let _date = getCorrectDate(date.getDate()) + " "
              + getCorrectMonth(date.getMonth()) + " "
              + date.getFullYear();

  return _date;
}

function getCorrectMonth(month) {
  switch (month) {
    case 1:
      return strings.January;
    case 2:
      return strings.February;
    case 3:
      return strings.March;
    case 4:
      return strings.April;
    case 5:
      return strings.May;
    case 6:
      return strings.June;
    case 7:
      return strings.July;
    case 8:
      return strings.August;
    case 9:
      return strings.September;
    case 10:
      return strings.October;
    case 11:
      return strings.November;
    case 12:
      return strings.December;
    default:

  }
}

function getCorrectDate(num) {
  if (num < 10 && num >= 1) {
    return "0"+num;
  }
  return num;
}
