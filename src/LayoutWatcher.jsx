import React, { Component, createContext } from 'react';
import PropTypes from 'prop-types';

const { Consumer, Provider } = createContext();

export default class LayoutWatcher extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  state = {
    layout: document.documentElement.clientWidth > 720 ? 'desktop' : 'mobile',
  }

  componentDidMount() {
    this.checkLayout();
    window.addEventListener('resize', this.checkLayout);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.checkLayout);
  }

  checkLayout = () => {
    this.setState({ layout: document.documentElement.clientWidth > 720 ? 'desktop' : 'mobile' });
  };

  render() {
    return (
      <Provider value={this.state.layout}>
        {this.props.children}
      </Provider>
    );
  }
}

export { Consumer };
