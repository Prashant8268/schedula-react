// MyRecords.js

import React from 'react';
import styles from './MyRecords.module.css';
import { IoMdTrash } from 'react-icons/io';

const MyRecords = () => {
  // Dummy data for booking records
  const bookingRecords = [
    {
      id: 1,
      doctor: 'Dr. Smith',
      specialty: 'Cardiologist',
      date: '2023-11-15',
      time: '10:00 AM',
      status: 'Confirmed',
    },
    {
      id: 2,
      doctor: 'Dr. Johnson',
      specialty: 'Dermatologist',
      date: '2023-11-20',
      time: '02:30 PM',
      status: 'Pending',
    },
    // Add more booking records as needed
  ];

  // Function to handle record deletion
  const handleDelete = (id) => {
    // Implement logic to delete the record with the given id
    // For example:
    // const updatedRecords = bookingRecords.filter(record => record.id !== id);
    // Update state or perform other actions with updatedRecords
  };

  return (
    <div className={styles["myRecordContainer"]}>
      <h2>My Booking Records</h2>
      {bookingRecords.map((record) => (
        <div key={record.id} className={styles["bookingRecord"]}>
          <div>
            <h3>{record.doctor}</h3>
            <p>{record.specialty}</p>
          </div>
          <div>
            <p>Date: {record.date}</p>
            <p>Time: {record.time}</p>
            <p>Status: {record.status}</p>
            <button className={styles["deleteButton"]} onClick={() => handleDelete(record.id)}>
              <IoMdTrash /> {/* Render delete icon */}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MyRecords;
