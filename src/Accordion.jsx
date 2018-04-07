import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Consumer } from './LayoutWatcher';

export class AccordionInternal extends Component {
  static propTypes = {
    children: PropTypes.node,
    layout: PropTypes.oneOf(['desktop', 'mobile']),
  }

  state = {
    openedIndex: 1,
  }

  open = (event, openedIndex) => {
    event.preventDefault();
    this.setState({ openedIndex });
  };

  render() {
    const { children, layout } = this.props;
    const { openedIndex } = this.state;

    return (
      React.Children.map(children, (child, index) =>
        React.cloneElement(
          child,
          {
            isOpened: layout === 'desktop' || openedIndex === index,
            layout,
            openedIndex,
            open: event => this.open(event, index),
          },
          child.props,
        ),
      )
    );
  }
}

export default props => (
  <Consumer>
    {layout => <AccordionInternal layout={layout} {...props} />}
  </Consumer>
);
