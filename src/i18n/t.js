import '@babel/polyfill';

import { defaultLocale, getMatchingLocale, languageFiles } from './i18n';

export default async function t(string, args, locale) {
  if (!locale) {
    // eslint-disable-next-line no-param-reassign
    locale = getMatchingLocale();
  }

  async function getTranslatedString() {
    if (locale !== defaultLocale) {
      let languageFile;
      try {
        languageFile = await languageFiles[locale];
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error(`Unable to load locale: ${locale}`);
        return string;
      }

      if (typeof languageFile[string] === 'string') {
        return languageFile[string];
      }
    }

    return string;
  }

  const rawString = await getTranslatedString();

  if (!args) {
    return rawString;
  }

  let finalString = rawString;
  Object.entries(args).forEach(([key, value]) => {
    finalString = finalString.replace(`{${key}}`, value);
  });

  return finalString;
}
