import React from 'react';
import './AllocationResult.css';

const AllocationResult = ({ result }) => {
  return (
    <div className="result">
      <h2>Allocation Result</h2>
      <p>{result}</p>
    </div>
  );
};

export default AllocationResult;
