import '@babel/polyfill';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { t } from '.';
import { Consumer } from './LangObserver';

class TInternal extends Component {
  static propTypes = {
    children: PropTypes.string,
    locale: PropTypes.string,
  }

  state = {
    translatedChildren: null,
  }

  componentDidMount() {
    this.isComponentMounted = true;
    this.getTranslation();
  }

  componentDidUpdate(prevProps) {
    // Update only if props changed, ignore updates from state change
    // eslint-disable-next-line react/destructuring-assignment
    if (Object.keys(this.props).some(key => this.props[key] !== prevProps[key])) {
      this.getTranslation();
    }
  }

  componentWillUnmount() {
    this.isComponentMounted = false;
  }

  async getTranslation() {
    const { children, locale, ...args } = this.props;

    const translatedChildren = await t(children, args, locale);

    if (!this.isComponentMounted) {
      return;
    }

    this.setState({ translatedChildren });
  }

  render() {
    const { translatedChildren } = this.state;

    return translatedChildren;
  }
}

const T = props => (
  <Consumer>
    {locale => <TInternal locale={locale} {...props} />}
  </Consumer>
);

export default T;
