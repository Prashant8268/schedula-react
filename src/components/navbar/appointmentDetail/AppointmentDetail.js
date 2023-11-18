import React from 'react';
import styles from './AppointmentDetail.module.css';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const AppointmentDetail = () => {
  // Dummy data for appointment details
  const {id} = useParams();
  const navigate = useNavigate();
  const handleCancel = () =>{
    navigate(`/book-now/my-appointments/cancel-appointment/${id}`)
  }

  const appointmentDetails = {
    doctor: {
      id:1,
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

      <div className={styles.buttons}>
        <button className={styles.cancelButton} onClick={handleCancel}>Cancel</button>
        <button className={styles.rescheduleButton}>
          <Link className={styles.Link} to={`/book-now/find-doc/doctor-profile/${appointmentDetails.doctor.id}`}>Reschedule</Link>
          </button>
        <button className={styles.waitingButton}>Waiting</button>
        <button className={styles.consultedButton}>Consulted</button>
        <button className={styles.unableButton}>Unable to Meet</button>
      </div>

      <div className={styles.note}>
        <p>Visit early for the appointment.</p>
      </div>
      <button className={styles.paymentButton}>Make Payment</button>
    </div>
  );
};

export default AppointmentDetail;
