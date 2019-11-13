import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

function getLocaleFromDocument() {
  return document.documentElement.getAttribute('lang');
}

function useLocale() {
  const observer = useRef();
  const [locale, setLocale] = useState(getLocaleFromDocument);

  function onLangAttributeChange() {
    setLocale(getLocaleFromDocument);
  }

  useEffect(() => {
    onLangAttributeChange();
    observer.current = new MutationObserver(onLangAttributeChange);
    observer.current.observe(
      document.documentElement,
      {
        attributeFilter: ['lang'],
        attributes: true,
      },
    );

    return () => observer.current.disconnect();
  }, []);

  return locale;
}

export default function LangObserver({ children }) {
  const locale = useLocale();

  return (
    <Context.Provider value={locale}>
      {children}
    </Context.Provider>
  );
}

LangObserver.propTypes = {
  children: PropTypes.node,
};
