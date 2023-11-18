import React from 'react';
import styles from '../appointmentDetail/AppointmentDetail.module.css';

const CancelAppointment = () => {
  // Dummy data for appointment details
  const appointmentDetails = {
    doctor: {
      name: 'Dr. John Doe',
      profile: 'Gastroenterologist',
      expertise: 'Stomach Specialist',
    },
    consultingTime: '2023-12-15 10:00 AM',
    patient: {
      name: 'Alice',
      age: 30,
      weight: '60 kg',
      sex: 'Female',
      complaint: 'Stomach Pain',
    },
  };

  return (
    <div className={styles.appointmentDetailContainer}>
      <h2>Appointment Detail</h2>
      <img
        className={styles.doctorImage}
        src="https://cdn-icons-png.flaticon.com/512/11500/11500575.png"
        alt="Doctor's Profile"
      />

      <div className={styles.doctorDetails}>
        <h3>About Doctor</h3>
        <p>Name: {appointmentDetails.doctor.name}</p>
        <p>Profile: {appointmentDetails.doctor.profile}</p>
        <p>Expertise: {appointmentDetails.doctor.expertise}</p>
      </div>

      <div className={styles.consultingTime}>
        <h3>Consulting Time</h3>
        <p>{appointmentDetails.consultingTime}</p>
      </div>

      <div className={styles.patientDetails}>
        <h3>Patient Details</h3>
        <p>Name: {appointmentDetails.patient.name}</p>
        <p>Age: {appointmentDetails.patient.age}</p>
        <p>Weight: {appointmentDetails.patient.weight}</p>
        <p>Sex: {appointmentDetails.patient.sex}</p>
        <p>Complaint: {appointmentDetails.patient.complaint}</p>
      </div>



      <div className={styles.note}>
        <p>You are about to cancel the appointment.</p>
      </div>

      <button className={styles.cancelAppointmentButton}>Confirm Appointment</button>
    </div>
  );
};

export default CancelAppointment;
