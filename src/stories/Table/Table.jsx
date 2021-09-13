import React from 'react';
import PropTypes from 'prop-types';
import './table.css';

export const Table = () => {
  
  return (
    <table className="ns-table">
        <tr>
            <th>One</th><th>Two</th><th>Three</th>
        </tr>
        <tr>
            <td>1</td><td>1</td><td>1</td>
        </tr>
    </table>
  );
};


Table.propTypes = {
 
};

Table.defaultProps = {
  backgroundColor: null
};
