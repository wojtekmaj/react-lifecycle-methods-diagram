import { useEffect } from 'react';
import T from '@wojtekmaj/react-t';
import { getMatchingLocale } from '@wojtekmaj/react-t/src/utils';
import { useLocalStorage } from '@wojtekmaj/react-hooks';

import Options from './Options';
import DiagramWithLegend from './DiagramWithLegend';
import Footer from './Footer';

import { supportedReactVersions } from './propTypes';

import { supportedLocales } from './i18n/i18n';

function getLocalStorage(key, defaultValue) {
  return key in localStorage ? localStorage[key] : defaultValue;
}

const rtlLanguages = ['ar', 'fa'];

function setLocaleToDocument(locale) {
  const localeWithDefault = supportedLocales.includes(locale) ? locale : 'en-US';
  document.documentElement.setAttribute('lang', localeWithDefault);
  const [languageCode] = localeWithDefault.split('-');
  document.documentElement.setAttribute('dir', rtlLanguages.includes(languageCode) ? 'rtl' : 'ltr');
}

const userLocale = getLocalStorage('locale', getMatchingLocale(supportedLocales));
const latestReactVersion = supportedReactVersions[supportedReactVersions.length - 1];
setLocaleToDocument(userLocale);

export default function Root() {
  const [advanced, setAdvanced] = useLocalStorage('showAdvanced', false);
  const [locale, setLocale] = useLocalStorage('locale', userLocale);
  const [reactVersion, setReactVersion] = useLocalStorage('reactVersion', latestReactVersion);

  function toggleAdvanced() {
    setAdvanced((prevAdvanced) => !prevAdvanced);
  }

  function toggleLocale(event) {
    const { value } = event.target;
    setLocale(value);
  }

  function toggleReactVersion(event) {
    const { value } = event.target;
    setReactVersion(value);
  }

  useEffect(() => {
    setLocaleToDocument(locale);
  }, [locale]);

  return (
    <div>
      <h1 className="hidden">
        <T>React lifecycle methods diagram</T>
      </h1>
      <Options
        advanced={advanced}
        locale={locale}
        reactVersion={reactVersion}
        toggleAdvanced={toggleAdvanced}
        toggleLocale={toggleLocale}
        toggleReactVersion={toggleReactVersion}
      />
      <DiagramWithLegend advanced={advanced} reactVersion={reactVersion} />
      <Footer />
    </div>
  );
}
