import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import styles from './Navbar.module.css'; 

const Navbar = () => {
    const [data, setData] = useState('props hai bhai');
    return (
        <div>
            <div className={styles.navbar}>
                <NavLink exact  to="/book-now/" style={({ isActive }) => (isActive ? { backgroundColor: '#005a9e'} :null)}>
                    Find a Doc
                </NavLink>
                <NavLink exact to="/myrecord" style={({ isActive }) => (isActive ? { backgroundColor: '#005a9e'} :null)}>
                    My Record
                </NavLink>
                <NavLink exact to="/myappointments" style={({ isActive }) => (isActive ? { backgroundColor: '#005a9e'} :null)}>
                    My Appointments
                </NavLink>
                <NavLink exact to="/book-now/profile" style={({ isActive }) => (isActive ? { backgroundColor: '#005a9e'} :null)}>
                    My Profile
                </NavLink>
            </div>
            <Outlet data = {data} />
        </div>
    );
};
export default Navbar;
