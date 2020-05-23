// convert spreadsheet data into an object
// keys are taken from the first row of the sheet -> have to be reformatted
export const createObjectFromArrays = (keys: string[], values: string[]) =>
  keys.reduce(
    (obj: object, key, idx) => ({
      ...obj,
      [key
        .toLowerCase()
        .split(' ')
        .join('_')]: values[idx],
    }),
    {},
  );
