function isUppercase(letter) {
  return /[A-Z]/.test(letter);
}

// Splits camelCase with ZWJ characters to help with line breaking
export function splitUpperCase(str) {
  return (str
    ? str
      .split('')
      .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '')
    : str
  );
}
