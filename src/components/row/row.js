import React from 'react';
import './row.css';

const Row = ({ left, right }) => {
  return (
    <div className="row mb2">
      { left }
      { right }
    </div>
  );
}

export default Row;