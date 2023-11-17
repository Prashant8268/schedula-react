import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import styles from './SignIn.module.css';

const SignIn = () => {
    return (
        <div className={styles.container}>
            <div className={styles['sign-in-container']}>
                <h1>Sign In to Schedula</h1>
                <form>
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
                            <input type="password" name="password" id="password" placeholder="Enter your password" />
                        </div>
                    </div>
                    <button type="submit" className={styles['sign-in-button']}>Sign In</button>
                </form>
                <div className={styles['action-links']}>
                    <Link to="/signup">Sign Up</Link>
                    <span>|</span>
                    <Link to="/forgot-password">Forgot Password</Link>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
