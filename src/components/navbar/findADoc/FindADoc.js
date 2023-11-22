import React, { useState } from 'react';
import styles from './FindADoc.module.css';
import { FaStar,FaStarHalfAlt } from 'react-icons/fa'; //
import { Link } from 'react-router-dom';
import doctorsData from './Doctors.json'



const DoctorList = (props) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

  };

  const filteredDoctors = doctorsData.filter(
    (doctor) =>
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialization.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={styles['doctorListContainer']}>
        <div className={styles['searchBar']}>
            <input
            type="text"
            placeholder="Search doctors..."
            value={searchQuery}
            onChange={handleSearch}
            className={styles['searchInput']}
            />
        </div>
      <div className={styles['doctorCardsContainer']}>
        {filteredDoctors.map((doctor) => (
          <Link key={doctor.id} to={`doctor-profile/${doctor.id}`} className={styles['doctorCardLink']}>
            <div className={styles['doctorCard']}>
              <img src={doctor.profilePicture} alt="Doctor Profile" className={styles['doctorImage']} />
              <div className={styles['doctorInfo']}>
                <h3 className={styles['doctorName']}>{doctor.name}</h3>
                <p className={styles['doctorSpecialization']}>{doctor.specialization}</p>
                <div className={styles['rating']}>
                  {Array.from({ length: Math.floor(doctor.rating) }, (_, index) => (
                    <FaStar key={index} className={styles['star']} />
                  ))}
                  {doctor.rating % 1 !== 0 && (
                    <FaStarHalfAlt className={styles['star']} />
                  )}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DoctorList;
