import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';

function Header(props) {
  const { title } = props;
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
