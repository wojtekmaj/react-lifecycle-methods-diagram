import { defaultLocale, getMatchingLocale, languageFiles } from './i18n';

const locale = getMatchingLocale();

const t = async (string, args = {}) => {
  const getTranslatedString = async () => {
    if (locale === defaultLocale) {
      return string;
    }
    const languageFile = await languageFiles[locale];
    return languageFile[string] || string;
  };

  const rawString = await getTranslatedString();

  let finalString = rawString;
  Object.entries(args).forEach(([key, value]) => {
    finalString = finalString.replace(`{${key}}`, value);
  });

  return finalString;
};

export default t;
