import React, { useState } from 'react';
import ApplicantForm from './ApplicantForm';
import AllocationResult from './AllocationResult';
import './App.css';

const App = () => {
  const [result, setResult] = useState('');

  const handleAllocate = (applicant) => {
    if (applicant.percentage >= 75) {
      setResult('Seat allocated');
    } else {
      setResult('Seat not allocated');
    }
  };

  return (
    <div className="app">
      <ApplicantForm onAllocate={handleAllocate} />
      {result && <AllocationResult result={result} />}
    </div>
  );
};

export default App;
