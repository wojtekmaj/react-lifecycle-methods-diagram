import once from 'lodash.once';

export const defaultLocale = 'en-US';

export const languageFiles = {
  'pl-PL': import('./pl-PL.json'),
  'pt-BR': import('./pt-BR.json'),
};

const supportedLocales = [
  defaultLocale,
  ...Object.keys(languageFiles),
];

/**
 * Extends language codes if necessary. For example, given:
 *   ['en-US', 'pl']
 * will return:
 *   ['en-US', 'pl-PL']
 *
 * @param {String[]} arr
 */
const extendLanguageCodes = arr => arr.map(el => (
  el.includes('-') ? el : `${el}-${el.toUpperCase()}`
));

export const getPreferredLocales = once(() => {
  const languageList = [];

  if (typeof window !== 'undefined') {
    if (window.navigator.languages) {
      languageList.push(...window.navigator.languages);
    } else if (window.navigator.userLanguage) {
      languageList.push(window.navigator.userLanguage);
    }
  }

  languageList.push('en-US'); // Fallback

  return extendLanguageCodes(languageList);
});

/**
 * Finds a locale which both we support and user prefers.
 */
export const getMatchingLocale = once(
  () => {
    const matchingLocale = getPreferredLocales().find(locale => supportedLocales.includes(locale));
    document.documentElement.setAttribute('lang', matchingLocale);
    return matchingLocale;
  },
);
