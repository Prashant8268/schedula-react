import React, { useState } from 'react';
import styles from './MyAppointments.module.css';
import { useNavigate } from 'react-router-dom';

const Appointment = () => {
    const [activeTab, setActiveTab] = useState('past');
    const navigate = useNavigate();

    const appointments = [
        {
            id: 1,
            date: '2023-11-10',
            status: 'past',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            id: 2,
            date: '2023-12-05',
            status: 'canceled',
            details: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
            id: 3,
            date: '2023-12-20',
            status: 'upcoming',
            details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
        },
        {
          id: 4,
          date: '2023-12-15',
          status: 'past',
          details: 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        },
        {
          id: 5,
          date: '2023-12-25',
          status: 'canceled',
          details: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 6,
          date: '2024-01-05',
          status: 'upcoming',
          details: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        },
      ];
      
      const handleClick = (id) =>{
        navigate(`/book-now/my-appointments/appointment/${id}`);

      }
      const filteredAppointments = appointments.filter(appointment => appointment.status === activeTab);

      return (
        <div className={styles.appointmentContainer}>
          <div className={styles.navBar}>
            <button
              className={`${styles.navButton} ${activeTab === 'past' ? styles.active : ''}`}
              onClick={() => setActiveTab('past')}
            >
              Past
            </button>
            <button
              className={`${styles.navButton} ${activeTab === 'canceled' ? styles.active : ''}`}
              onClick={() => setActiveTab('canceled')}
            >
              Canceled
            </button>
            <button
              className={`${styles.navButton} ${activeTab === 'upcoming' ? styles.active : ''}`}
              onClick={() => setActiveTab('upcoming')}
            >
              Upcoming
            </button>
          </div>
    
          <div className={styles.appointmentList}>
                <h2>{`${activeTab.charAt(0).toUpperCase()}${activeTab.slice(1)} Appointments`}</h2>
                {filteredAppointments.map(appointment => (
                <div key={appointment.id} className={styles.appointment}>
                    <p>Date: {appointment.date}</p>
                    <p>{appointment.details}</p>
                    <button onClick={()=>handleClick(appointment.id)} className={styles.viewButton}>View</button>
                </div>
                ))}
            </div>
        </div>
      );
    };
    
    export default Appointment;
