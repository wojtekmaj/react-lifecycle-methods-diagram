import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const { Provider, Consumer } = createContext();

export { Provider, Consumer };

export default class LangObserver extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    locale: document.documentElement.getAttribute('lang'),
  }

  componentDidMount() {
    this.observer = new MutationObserver(this.onLangAttributeChange);
    this.observer.observe(
      document.documentElement,
      {
        attributeFilter: ['lang'],
        attributes: true,
      },
    );
  }

  componentWillUnmount() {
    this.observer.disconnect();
  }

  onLangAttributeChange = () => {
    this.setState((prevState) => {
      const locale = document.documentElement.getAttribute('lang');

      if (locale === prevState.locale) {
        return null;
      }

      return { locale };
    });
  }

  render() {
    const { children } = this.props;
    const { locale } = this.state;

    return (
      <Provider value={locale}>
        {children}
      </Provider>
    );
  }
}
