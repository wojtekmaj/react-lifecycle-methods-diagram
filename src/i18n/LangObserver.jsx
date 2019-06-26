import React, {
  createContext,
  useEffect,
  useRef,
  useState,
} from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

export default function LangObserver({ children }) {
  const observer = useRef();
  const [locale, setLocale] = useState(document.documentElement.getAttribute('lang'));

  function onLangAttributeChange() {
    setLocale(document.documentElement.getAttribute('lang'));
  }

  useEffect(() => {
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

  return (
    <Context.Provider value={locale}>
      {children}
    </Context.Provider>
  );
}

LangObserver.propTypes = {
  children: PropTypes.node,
};
