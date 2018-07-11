const isUppercase = letter => /[A-Z]/.test(letter);

// Splits camelCase with ZWJ characters to help with line breaking
export const splitUpperCase = str => (str
  ? str
    .split('')
    .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '')
  : str
);
