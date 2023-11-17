import React, { useState } from 'react';
import styles from './MyProfile.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john@example.com');
  const [phone, setPhone] = useState('(123) 456-7890');
  const [img, setImg] = useState('https://cdn-icons-png.flaticon.com/512/201/201634.png')

  const handleUpdate = () => {
    // Perform update logic here (e.g., make API calls, update state, etc.)
    // For now, let's just log the updated values
    console.log('Updated Name:', name);
    console.log('Updated Email:', email);
    console.log('Updated Phone:', phone);

    // Set isEditing back to false after updating
    setIsEditing(false);
  };

  return (
    <div className={styles['profileContainer']}>
      <div className={styles['profileHeader']}>
        <FontAwesomeIcon icon={faUserEdit} className={styles['profileIcon']} onClick={() => setIsEditing(!isEditing)} />
        <h2>My Profile</h2>
      </div>
      <div className={styles['profileInfo']}>
        <div className={styles['profileImage']}>
          {/* Replace the src with your profile picture */}
          <img src={img} alt="Profile" />
        </div>
        <div className={styles['userData']}>
          {isEditing ? (
            <form>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
              />
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
              />
            </form>
          ) : (
            <>
              <p>Name: {name}</p>
              <p>Email: {email}</p>
              <p>Phone: {phone}</p>
            </>
          )}
          {isEditing && (
            <button className={styles['updateButton']} onClick={handleUpdate}>
              Update
            </button>
          )}
        </div>
      </div>
      <button className={styles['signOutButton']}>
        <FontAwesomeIcon icon={faSignOutAlt} />
        Sign Out
      </button>
    </div>
  );
};

export default Profile;
