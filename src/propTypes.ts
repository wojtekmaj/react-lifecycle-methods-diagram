import PropTypes from 'prop-types';

export const supportedReactVersions = ['16.3', '16.4'] as const;

export const isReactVersion = PropTypes.oneOf(supportedReactVersions);
