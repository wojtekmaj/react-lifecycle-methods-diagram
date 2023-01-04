export const defaultLocale = 'en-US';

export const languageFiles = {
  'ar': async () => (await import(/* webpackChunkName: "ar" */ './json/ar.json')).default,
  'be-BY': async () => (await import(/* webpackChunkName: "be-BY" */ './json/be-BY.json')).default,
  'de-DE': async () => (await import(/* webpackChunkName: "de-DE" */ './json/de-DE.json')).default,
  'es-ES': async () => (await import(/* webpackChunkName: "es-ES" */ './json/es-ES.json')).default,
  'fa-IR': async () => (await import(/* webpackChunkName: "fa-IR" */ './json/fa-IR.json')).default,
  'fr-FR': async () => (await import(/* webpackChunkName: "fr-FR" */ './json/fr-FR.json')).default,
  'hu-HU': async () => (await import(/* webpackChunkName: "hu-HU" */ './json/hu-HU.json')).default,
  'hy-AM': async () => (await import(/* webpackChunkName: "am-AM" */ './json/hy-AM.json')).default,
  'id-ID': async () => (await import(/* webpackChunkName: "id-ID" */ './json/id-ID.json')).default,
  'it-IT': async () => (await import(/* webpackChunkName: "it-IT" */ './json/it-IT.json')).default,
  'ja-JP': async () => (await import(/* webpackChunkName: "ja-JP" */ './json/ja-JP.json')).default,
  'kk-KZ': async () => (await import(/* webpackChunkName: "kk-KZ" */ './json/kk-KZ.json')).default,
  'ko-KR': async () => (await import(/* webpackChunkName: "ko-KR" */ './json/ko-KR.json')).default,
  'pl-PL': async () => (await import(/* webpackChunkName: "pl-PL" */ './json/pl-PL.json')).default,
  'pt-BR': async () => (await import(/* webpackChunkName: "pt-BR" */ './json/pt-BR.json')).default,
  'ro-RO': async () => (await import(/* webpackChunkName: "ro-RO" */ './json/ro-RO.json')).default,
  'ru-RU': async () => (await import(/* webpackChunkName: "ru-RU" */ './json/ru-RU.json')).default,
  'sq-AL': async () => (await import(/* webpackChunkName: "sq-AL" */ './json/sq-AL.json')).default,
  'sv-SE': async () => (await import(/* webpackChunkName: "sv-SE" */ './json/sv-SE.json')).default,
  'th-TH': async () => (await import(/* webpackChunkName: "th-TH" */ './json/th-TH.json')).default,
  'tr-TR': async () => (await import(/* webpackChunkName: "tr-TR" */ './json/tr-TR.json')).default,
  'uk-UA': async () => (await import(/* webpackChunkName: "uk-UA" */ './json/uk-UA.json')).default,
  'ur': async () => (await import(/* webpackChunkName: "ur" */ './json/ur.json')).default,
  'vi-VN': async () => (await import(/* webpackChunkName: "vi-VN" */ './json/vi-VN.json')).default,
  'zh-Hans': async () =>
    (await import(/* webpackChunkName: "zh-Hans" */ './json/zh-Hans.json')).default,
  'zh-Hant': async () =>
    (await import(/* webpackChunkName: "zh-Hant" */ './json/zh-Hant.json')).default,
};

export const supportedLocales = [defaultLocale].concat(Object.keys(languageFiles));
