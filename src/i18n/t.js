import { defaultLocale, getMatchingLocale, languageFiles } from './i18n';

function getTranslatedString(string, locale) {
  if (locale === defaultLocale || !languageFiles[locale]) {
    return Promise.resolve(string);
  }

  return languageFiles[locale]()
    .then((languageFile) => {
      if (typeof languageFile[string] === 'string') {
        return languageFile[string];
      }

      return string;
    })
    .catch(() => {
      // eslint-disable-next-line no-console
      console.error(`Unable to load locale: ${locale}`);
      return string;
    });
}

export default function t(string, args, locale) {
  if (!locale) {
    // eslint-disable-next-line no-param-reassign
    locale = getMatchingLocale();
  }

  return getTranslatedString(string, locale).then((rawString) => {
    if (!args) {
      return rawString;
    }

    let finalString = rawString;
    Object.entries(args).forEach(([key, value]) => {
      finalString = finalString.replace(`{${key}}`, value);
    });

    return finalString;
  });
}
