export const defaultLocale = 'en-US';

export const languageFiles = {
  'ar-YE': () => import(/* webpackChunkName: "ar-YE" */ './json/ar-YE.json'),
  'be-BY': () => import(/* webpackChunkName: "be-BY" */ './json/be-BY.json'),
  'de-DE': () => import(/* webpackChunkName: "de-DE" */ './json/de-DE.json'),
  'es-ES': () => import(/* webpackChunkName: "es-ES" */ './json/es-ES.json'),
  'fa-IR': () => import(/* webpackChunkName: "fa-IR" */ './json/fa-IR.json'),
  'fr-FR': () => import(/* webpackChunkName: "fr-FR" */ './json/fr-FR.json'),
  'hy-AM': () => import(/* webpackChunkName: "am-AM" */ './json/hy-AM.json'),
  'id-ID': () => import(/* webpackChunkName: "id-ID" */ './json/id-ID.json'),
  'it-IT': () => import(/* webpackChunkName: "it-IT" */ './json/it-IT.json'),
  'ja-JP': () => import(/* webpackChunkName: "ja-JP" */ './json/ja-JP.json'),
  'kk-KZ': () => import(/* webpackChunkName: "kk-KZ" */ './json/kk-KZ.json'),
  'ko-KR': () => import(/* webpackChunkName: "ko-KR" */ './json/ko-KR.json'),
  'pl-PL': () => import(/* webpackChunkName: "pl-PL" */ './json/pl-PL.json'),
  'pt-BR': () => import(/* webpackChunkName: "pt-BR" */ './json/pt-BR.json'),
  'ro-RO': () => import(/* webpackChunkName: "ro-RO" */ './json/ro-RO.json'),
  'ru-RU': () => import(/* webpackChunkName: "ru-RU" */ './json/ru-RU.json'),
  'sq-AL': () => import(/* webpackChunkName: "sq-AL" */ './json/sq-AL.json'),
  'sv-SE': () => import(/* webpackChunkName: "sv-SE" */ './json/sv-SE.json'),
  'th-TH': () => import(/* webpackChunkName: "th-TH" */ './json/th-TH.json'),
  'tr-TR': () => import(/* webpackChunkName: "tr-TR" */ './json/tr-TR.json'),
  'uk-UA': () => import(/* webpackChunkName: "uk-UA" */ './json/uk-UA.json'),
  'vi-VN': () => import(/* webpackChunkName: "vi-VN" */ './json/vi-VN.json'),
  'zh-Hans': () => import(/* webpackChunkName: "zh-Hans" */ './json/zh-Hans.json'),
  'zh-Hant': () => import(/* webpackChunkName: "zh-Hant" */ './json/zh-Hant.json'),
};

export const supportedLocales = [defaultLocale].concat(Object.keys(languageFiles));
