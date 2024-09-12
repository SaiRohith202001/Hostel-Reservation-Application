import React, { useState } from 'react';
import axios from 'axios';
import './ApplicantForm.css';

const ApplicantForm = ({ onAllocate }) => {
  const [name, setName] = useState('');
  const [percentage, setPercentage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const applicant = {
      name,
      percentage: parseFloat(percentage),
    };

    try {
      const response = await axios.post('http://localhost:5000/api/applicants', applicant);
      console.log('Response:', response.data);
      
      // Call the onAllocate function to update the state
      onAllocate(applicant);
      
      // Set success message
      setSuccessMessage('Applicant submitted successfully!');
      
      // Reset the form fields
      setName('');
      setPercentage('');
      setErrorMessage(''); // Clear error message
    } catch (error) {
      console.error('Error submitting applicant:', error);
      setErrorMessage('Failed to submit applicant. Please try again.');
      setSuccessMessage(''); // Clear success message
    }
  };


  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Hostel Seat Allocation</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {successMessage && <p className="success-message">{successMessage}</p>}
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
