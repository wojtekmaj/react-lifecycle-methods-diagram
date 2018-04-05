
const isUppercase = letter => letter.toUpperCase() === letter;

// Splits camelCase with ZWJ characters to help with line breaking
export const splitUpperCase = str => str
  .split('')
  .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '');
