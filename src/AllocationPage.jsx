import React from 'react';
import './AllocationPage.css';

const AllocationPage = () => {
  const location = useLocation();
  const { applicant } = location.state || {};

  return (
    <div className="allocation-page">
      <h2>Applicant Details</h2>
      {applicant ? (
        <div className="applicant-details">
          <p><strong>Name:</strong> {applicant.name}</p>
          <p><strong>Percentage:</strong> {applicant.percentage}%</p>
          <p><strong>Allocation Result:</strong> {applicant.percentage >= 75 ? 'Seat allocated' : 'Seat not allocated'}</p>
        </div>
      ) : (
        <p>No applicant details available.</p>
      )}
    </div>
  );
};

export default AllocationPage;