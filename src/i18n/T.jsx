import PropTypes from 'prop-types';

import useTranslation from './useTranslation';

export default function T({ children, ...args }) {
  const translatedChildren = useTranslation(children, args);
  return translatedChildren;
}

T.propTypes = {
  children: PropTypes.string,
  locale: PropTypes.string,
};
