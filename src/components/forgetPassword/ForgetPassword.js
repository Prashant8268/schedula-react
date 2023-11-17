import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from '../signIn/SignIn.module.css'

const ForgotPassword = () => {
    return (
        <div className={styles.container}>
            <div className={styles['sign-in-container']}>
                <h1>Forgot Password</h1>
                <p>Enter your email to reset your password.</p>
                <form>
                    <div className={styles['form-group']}>
                        <label htmlFor="email">Email</label>
                        <div className={styles['input-icon']}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <input type="email" id="email" name="email" placeholder="Enter your email" />
                        </div>
                    </div>
                    <button type="submit" className={styles['sign-in-button']}>Reset Password</button>
                </form>
                <div className={styles['action-links']}>
                    <Link to="/signin">Sign In</Link>
                    <span>|</span>
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
