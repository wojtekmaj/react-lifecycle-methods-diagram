import 'babel-polyfill';
import { defaultLocale, getMatchingLocale, languageFiles } from './i18n';

export default async (string, args, locale) => {
  if (!args) {
    // eslint-disable-next-line no-param-reassign
    args = {};
  }

  if (!locale) {
    // eslint-disable-next-line no-param-reassign
    locale = getMatchingLocale();
  }

  const getTranslatedString = async () => {
    if (locale !== defaultLocale) {
      const languageFile = await languageFiles[locale];
      if (!languageFile) {
        // eslint-disable-next-line no-console
        console.error(`Unable to load locale: ${locale}`);
        return string;
      }
      if (typeof languageFile[string] === 'string') {
        return languageFile[string];
      }
    }
    return string;
  };

  const rawString = await getTranslatedString();

  let finalString = rawString;
  Object.entries(args).forEach(([key, value]) => {
    finalString = finalString.replace(`{${key}}`, value);
  });

  return finalString;
};
