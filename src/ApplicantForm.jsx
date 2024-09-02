import React, { useState } from 'react';
import './ApplicantForm.css';

const ApplicantForm = ({ onAllocate }) => {
  const [name, setName] = useState('');
  const [percentage, setPercentage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const applicant = {
      name,
      percentage: parseFloat(percentage),
    };
    onAllocate(applicant);
    setName('');
    setPercentage('');
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Hostel Seat Allocation</h2>
      <div className="form-group">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label>Percentage:</label>
        <input
          type="number"
          value={percentage}
          onChange={(e) => setPercentage(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ApplicantForm;
