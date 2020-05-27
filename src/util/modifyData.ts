import { SpreadsheetObj, SpreadsheetText } from '../types/spreadsheet';

const formatKey = (key: SpreadsheetText) =>
  key
    .toString()
    .toLowerCase()
    .split(' ')
    .join('')
    .split('/')
    .join('')
    .replace('#', 'id');

const formatValue = (value: SpreadsheetText) =>
  typeof value === 'string'
    ? value.includes('=IMAGE(')
      ? parseImgUrlFromFormula(value)
      : value
    : value;

/**
 * convert spreadsheet data into an object
 * KEYS: taken from the first row of the sheet -> reformatted to not include spaces
 * VALUES: if image formula is included, the URL is parsed from it
 */
const arraysToObject = (keys: SpreadsheetText[], values: SpreadsheetText[]) =>
  keys.reduce(
    (obj: object, key, idx) => ({
      ...obj,
      [formatKey(key)]: formatValue(values[idx]),
    }),
    {},
  );

/**
 * every row of the spreadsheet is saved into object in an array
 * the first item of the array is sliced because this contains the header data
 */
export const spreadsheetToObjectArray = (
  spreadsheetValues: SpreadsheetText[][],
): SpreadsheetObj[] => {
  const spreadsheetHeader = spreadsheetValues[0];

  return spreadsheetValues
    .reduce(
      (array: SpreadsheetObj[], row: SpreadsheetText[]) => [
        ...array,
        arraysToObject(spreadsheetHeader, row),
      ],
      [],
    )
    .slice(1);
};

/**
 * get URL from e.g. '=IMAGE("https://acnhcdn.com/latest/NpcIcon/squ05.png")'
 */
export const parseImgUrlFromFormula = (formula: string) =>
  formula.split('"')[1];

export const capitalizeAllWords = (str: string) =>
  str.replace(/\b\w/g, c => c.toUpperCase());

export const monthName = (date: Date) =>
  [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    ' November',
    'December',
  ][date.getMonth()];

export const formatBirthday = (birthday: string) => {
  const digits = birthday.split('/');
  const date = new Date();
  date.setMonth(Number(digits[0]) - 1);
  const day = Number(digits[1]);
  return `${monthName(date)} ${addOrdinal(day)}`;
};

const addOrdinal = (n: number) =>
  `${n}${[undefined, 'st', 'nd', 'rd'][(n % 100 >> 3) ^ 1 && n % 10] || 'th'}`;
