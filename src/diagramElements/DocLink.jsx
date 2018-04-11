import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { splitUpperCase } from '../shared/utils';

import { t } from '../i18n/T';

export default class DocLink extends Component {
  static propTypes = {
    docname: PropTypes.string,
    name: PropTypes.string.isRequired,
  };

  state = {
    translatedName: null,
    translatedTitle: null,
  }

  componentDidMount() {
    this.getTranslation();
  }

  async getTranslation() {
    const { name } = this.props;
    const translatedName = await t(name);
    const translatedTitle = await t('Read docs for {name} (opens in a new tab)', { name });
    this.setState({ translatedName, translatedTitle });
  }

  render() {
    const { docname } = this.props;
    const { translatedTitle: title, translatedName: name } = this.state;

    const children = splitUpperCase(name);

    return (
      docname ?
        <a
          href={`https://reactjs.org/docs/react-component.html#${docname}`}
          target="_blank"
          rel="noopener noreferrer"
          title={title}
        >
          {children}
        </a> :
        <span>{children}</span>
    );
  }
}
