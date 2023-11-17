import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';
import styles from '../signIn/SignIn.module.css'; 

const SignUp = () => {
    return (
        <div className={styles.container} style={{ backgroundColor: '#f2f6ff' }}>
            <div className={styles['sign-in-container']}>
                <h1>Sign Up for Schedula</h1>
                <form>
                    <div className={styles['form-group']}>
                        <label htmlFor="name">Name</label>
                        <div className={styles['input-icon']}>
                            <FontAwesomeIcon icon={faUser} />
                            <input type="text" id="name" name="name" placeholder="Enter your name" />
                        </div>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email</label>
                        <div className={styles['input-icon']}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                    </div>
                    <div className={styles['form-group']}>
                        <label htmlFor="password">Password</label>
                        <div className={styles['input-icon']}>
                            <FontAwesomeIcon icon={faLock} />
                            <input type="password" name="password" id="password" placeholder="Create a password" />
                        </div>
                    </div>
                    <button type="submit" className={styles['sign-in-button']}>Sign Up</button>
                </form>
                <div className={styles['action-links']}>
                    <Link to="/signin">Sign In</Link>
                    <span>|</span>
                    <Link to="/forgot-password">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
