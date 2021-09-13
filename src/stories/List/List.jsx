import React from 'react';
import PropTypes from 'prop-types';
import './list.css';
import styled from 'styled-components';
export const List = () => {
  
  return (
    <ul class="a">
    <li>Coffee</li>
    <li>Tea</li>
    <li>Coca Cola</li>
  </ul>
  );
};


List.propTypes = {
 
};

List.defaultProps = {
  backgroundColor: null
};
