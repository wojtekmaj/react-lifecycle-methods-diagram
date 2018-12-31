const isUppercase = letter => /[A-Z]/.test(letter);

// Splits camelCase with ZWJ characters to help with line breaking
export const splitUpperCase = str => (str
  ? str
    .split('')
    .reduce((res, letter) => res + (isUppercase(letter) ? `\u00ad${letter}` : letter), '')
  : str
);

// Translates 'a' to '🇦', 'b' to '🇧' and so on.
const letterToLetterEmoji = letter => String.fromCodePoint(
  letter.toLowerCase().charCodeAt() + 127365,
);

// Translates 'pl' to 'PL', 'en-US' to 'US' and so on.
const countryCodeToCountry = countryCode => countryCode.split('-').pop().toUpperCase();

// Translates 'pl-PL' to 🇵🇱 and so on.
export const countryCodeToFlagEmoji = str => Array.from(countryCodeToCountry(str)).map(letterToLetterEmoji).join('');
