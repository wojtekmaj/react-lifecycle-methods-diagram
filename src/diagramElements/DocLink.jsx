import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { splitUpperCase } from '../shared/utils';

import { t } from '../i18n';
import { Consumer } from '../i18n/LangObserver';

class DocLinkInternal extends Component {
  static propTypes = {
    docname: PropTypes.string,
    locale: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  state = {
    translatedName: null,
    translatedTitle: null,
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
    const { locale, name } = this.props;

    const translatedName = await t(name, null, locale);
    const translatedTitle = await t('Read docs for {name} (opens in a new tab)', { name }, locale);

    if (!this.isComponentMounted) {
      return;
    }

    this.setState({ translatedName, translatedTitle });
  }

  render() {
    const { docname } = this.props;
    const { translatedTitle: title, translatedName: name } = this.state;

    const children = splitUpperCase(name);

    return (
      docname
        ? (
          <a
            href={`https://reactjs.org/docs/react-component.html#${docname}`}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
          >
            {children}
          </a>
        )
        : (
          <span>
            {children}
          </span>
        )
    );
  }
}

const DocLink = props => (
  <Consumer>
    {locale => <DocLinkInternal locale={locale} {...props} />}
  </Consumer>
);

export default DocLink;
