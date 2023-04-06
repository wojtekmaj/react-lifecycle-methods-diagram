function isUppercase(letter: string): boolean {
  return /[A-Z]/.test(letter);
}

// Splits camelCase with ZWJ characters to help with line breaking
export function splitUpperCase(str: string): string {
  if (!str) {
    return str;
  }

  return str
    .split('')
    .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '');
}
