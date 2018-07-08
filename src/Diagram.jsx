import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { isReactVersion } from './propTypes';

const diagramVersions = {
  16.4: import('./versions/16.4'),
};

export default class Diagram extends Component {
  static propTypes = {
    advanced: PropTypes.bool,
    reactVersion: isReactVersion.isRequired,
  };

  state = {
    diagramElements: null,
  };

  componentDidMount() {
    this.loadDiagramElements();
  }

  componentDidUpdate(prevProps) {
    if (this.props.reactVersion !== prevProps.reactVersion) {
      this.loadDiagramElements();
    }
  }

  async loadDiagramElements() {
    const diagramElements = (await diagramVersions[this.props.reactVersion]).default;

    this.setState({ diagramElements });
  }

  render() {
    const { advanced } = this.props;
    const { diagramElements } = this.state;

    if (!diagramElements) {
      return null;
    }

    const { Mounting, Updating, Unmounting } = diagramElements;

    return (
      <Fragment>
        <h2 className="hidden">Component lifecycle</h2>
        <Mounting advanced={advanced} />
        <Updating advanced={advanced} />
        <Unmounting advanced={advanced} />
      </Fragment>
    );
  }
}
