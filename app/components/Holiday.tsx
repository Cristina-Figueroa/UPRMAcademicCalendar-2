'use client';

import React, { useEffect, useState } from 'react';

interface Holiday {
  id: number; // Adjust types based on your API response structure
  date: string;
  description: string;
}

const HolidaysTable: React.FC = () => {
  const [holidays, setHolidays] = useState<Holiday[]>([]); // Explicitly typed as an array of Holiday
  const [error, setError] = useState<string | null>(null); // State for error messages

  useEffect(() => {
    // Fetch holidays from the backend
    fetch('http://127.0.0.1:5000/holidays', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data: Holiday[]) => {
        setHolidays(data); // Save the data to state
      })
      .catch((error: Error) => {
        console.error('Error fetching holidays:', error);
        setError(error.message); // Save error to state
      });
  }, []); // Empty dependency array means this runs once when the component mounts

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h3>Holidays</h3>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Date</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {holidays.map((holiday) => (
            <tr key={holiday.id}>
              <td>{holiday.id}</td>
              <td>{holiday.date}</td>
              <td>{holiday.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default HolidaysTable;
