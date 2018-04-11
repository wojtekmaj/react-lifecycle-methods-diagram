import 'babel-polyfill';
import { Component } from 'react';
import PropTypes from 'prop-types';

import { defaultLocale, getMatchingLocale } from './i18n';

const locale = getMatchingLocale();

const languageFiles = {
  'pl-PL': import('./pl-PL.json'),
  'pt-BR': import('./pt-BR.json')
};

export default class T extends Component {
  static propTypes = {
    children: PropTypes.string,
  }

  state = {
    translatedChildren: null,
  }

  componentDidMount() {
    if (locale !== defaultLocale) {
      this.getTranslation();
    }
  }

  async getTranslation() {
    const languageFile = await languageFiles[locale];
    this.setState({ translatedChildren: languageFile[this.props.children] });
  }

  render() {
    const { children, ...args } = this.props;
    const { translatedChildren } = this.state;

    const rawString = translatedChildren || children;

    let finalString = rawString;
    Object.entries(args).forEach(([key, value]) => {
      finalString = finalString.replace(`{${key}}`, value);
    });

    return finalString;
  }
}
