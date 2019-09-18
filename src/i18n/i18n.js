import once from 'lodash.once';
import { getUserLocales } from 'get-user-locale';

export const defaultLocale = 'en-US';

export const languageFiles = {
  'be-BY': import('./json/be-BY.json'),
  'de-DE': import('./json/de-DE.json'),
  'es-ES': import('./json/es-ES.json'),
  'fa-IR': import('./json/fa-IR.json'),
  'fr-FR': import('./json/fr-FR.json'),
  'id-ID': import('./json/id-ID.json'),
  'it-IT': import('./json/it-IT.json'),
  'ja-JP': import('./json/ja-JP.json'),
  'ko-KR': import('./json/ko-KR.json'),
  'kz-KZ': import('./json/kz-KZ.json'),
  'pl-PL': import('./json/pl-PL.json'),
  'pt-BR': import('./json/pt-BR.json'),
  'ru-RU': import('./json/ru-RU.json'),
  'sq-AL': import('./json/sq-AL.json'),
  'tr-TR': import('./json/tr-TR.json'),
  'uk-UA': import('./json/uk-UA.json'),
  'vn-VN': import('./json/vn-VN.json'),
  'zh-CN': import('./json/zh-CN.json'),
  'zh-TW': import('./json/zh-TW.json'),
};

export const supportedLocales = [defaultLocale].concat(Object.keys(languageFiles));

/**
 * Extends language codes if necessary. For example, given:
 *   ['en-US', 'pl']
 * will return:
 *   ['en-US', 'pl-PL']
 *
 * @param {String[]} arr
 */
function extendLanguageCodes(arr) {
  return arr.map(el => (
    el.includes('-') ? el : `${el}-${el.toUpperCase()}`
  ));
}

const getExtendedUserLocales = once(() => {
  const userLocales = getUserLocales();
  return extendLanguageCodes(userLocales);
});

/**
 * Finds a locale which both we support and user prefers.
 */
export const getMatchingLocale = once(() => {
  const extendedUserLocales = getExtendedUserLocales();
  const matchingLocale = extendedUserLocales.find(locale => supportedLocales.includes(locale));
  document.documentElement.setAttribute('lang', matchingLocale);
  return matchingLocale;
});
