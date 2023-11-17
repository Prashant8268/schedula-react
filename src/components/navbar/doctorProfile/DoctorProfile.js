import React from 'react';
import styles from './DoctorProfile.module.css';
import { FaCalendarAlt } from 'react-icons/fa'; 
import { useParams } from 'react-router-dom';
import doctorsData from '../findADoc/Doctors.json';

const DoctorProfile = () => {
  const { id } = useParams();

  // Find the doctor using the ID
  const doctor = doctorsData.find((doc) => doc.id.toString() === id);

  return (
    <div className={styles['doctorProfileContainer']}>
      {doctor && (
        <div className={styles['profileSection']}>
          {/* Doctor's Profile Picture and Name */}
          <div className={styles['doctorInfo']}>
            <img src={doctor.profilePicture} alt="Doctor Profile" className={styles['profilePicture']} />
            <h2 className={styles['doctorName']}>{doctor.name}</h2>
          </div>
          {/* About Doctor */}
          <div className={styles['correction']}> 
            <div className={styles['aboutDoctor']}>
              <h3>About Doctor</h3>
              <p>Experience: {doctor.experience}</p>
              <p>Doctor Type: {doctor.specialization}</p>
              <p>Achievement: {doctor.achievements.join(', ')}</p>
            </div>
            {/* Services Provided */}
            <div className={styles['servicesSection']}>
              <h3>Services Provided</h3>
              <ul className={styles['servicesList']}>
                {doctor.services.map((service, index) => (
                  <li key={index}>{service}</li>
                ))}
              </ul>
            </div>
          </div>
          {/* Doctor's Availability */}
          <div className={styles['availabilitySection']}>
            <h3>Availability</h3>
            <div className={styles['availabilityDetails']}>
              {Object.entries(doctor.availability).map(([day, time], index) => (
                <div key={index} className={styles['availabilityDay']}>
                  <FaCalendarAlt className={styles['calendarIcon']} />
                  <p>{day}: {time}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Book Appointment Button */}
          <button className={styles['bookAppointmentButton']}>Book Appointment</button>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
