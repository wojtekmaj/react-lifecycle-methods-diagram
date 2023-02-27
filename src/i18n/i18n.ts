export const defaultLocale = 'en-US';

export const languageFiles = {
  'ar-AE': async () => (await import('./json/ar-AE.json')).default,
  'be-BY': async () => (await import('./json/be-BY.json')).default,
  'de-DE': async () => (await import('./json/de-DE.json')).default,
  'es-ES': async () => (await import('./json/es-ES.json')).default,
  'fa-IR': async () => (await import('./json/fa-IR.json')).default,
  'fr-FR': async () => (await import('./json/fr-FR.json')).default,
  'hu-HU': async () => (await import('./json/hu-HU.json')).default,
  'hy-AM': async () => (await import('./json/hy-AM.json')).default,
  'id-ID': async () => (await import('./json/id-ID.json')).default,
  'it-IT': async () => (await import('./json/it-IT.json')).default,
  'ja-JP': async () => (await import('./json/ja-JP.json')).default,
  'kk-KZ': async () => (await import('./json/kk-KZ.json')).default,
  'ko-KR': async () => (await import('./json/ko-KR.json')).default,
  'pl-PL': async () => (await import('./json/pl-PL.json')).default,
  'pt-BR': async () => (await import('./json/pt-BR.json')).default,
  'ro-RO': async () => (await import('./json/ro-RO.json')).default,
  'ru-RU': async () => (await import('./json/ru-RU.json')).default,
  'sq-AL': async () => (await import('./json/sq-AL.json')).default,
  'sv-SE': async () => (await import('./json/sv-SE.json')).default,
  'th-TH': async () => (await import('./json/th-TH.json')).default,
  'tr-TR': async () => (await import('./json/tr-TR.json')).default,
  'uk-UA': async () => (await import('./json/uk-UA.json')).default,
  'ur': async () => (await import('./json/ur.json')).default,
  'vi-VN': async () => (await import('./json/vi-VN.json')).default,
  'zh-Hans': async () => (await import('./json/zh-Hans.json')).default,
  'zh-Hant': async () => (await import('./json/zh-Hant.json')).default,
};

export const supportedLocales = [defaultLocale].concat(Object.keys(languageFiles));
