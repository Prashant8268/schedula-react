import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Homepage.module.css'; 

const HomePage = () => {
    
    return (
        <div >
            <header className={styles.header}> 
                <h1 className={styles.title}>Welcome to Schedula</h1>
                <p>Book doctors online, anytime, anywhere. Your health, your schedule, with Schedula.</p>
            </header>

            <div className={styles.container}> 
                <img
                    src="https://cdn-icons-png.flaticon.com/512/5996/5996258.png"
                    alt="Schedula App"
                    className={styles['app-image']} 
                />
                <div className={styles['cta-buttons']}> 
                    <Link to="/signin" className={styles['cta-button']}>Sign In</Link> 
                    <Link to="/signup" className={styles['cta-button']}>Sign Up</Link> 
                    <Link to="/book-now/"   className={styles['cta-button']}>Book Now</Link> 
                </div>
            </div>
        </div>
    );
};

export default HomePage;
