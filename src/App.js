import './App.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from './components/homepage/Homepage';
import SignIn from './components/signIn/SignIn';
import SignUp from './components/signup/Signup'
import ForgotPassword from "./components/forgetPassword/ForgetPassword";
import Navbar from './components/navbar/Navbar';
import FindADoc from './components/navbar/findADoc/FindADoc';
import Profile from './components/navbar/myProfile/MyProfile';
import DoctorProfile from './components/navbar/doctorProfile/DoctorProfile';
import Appointment from './components/navbar/myAppointments/MyAppointments';
import AppointmentDetail from './components/navbar/appointmentDetail/AppointmentDetail';
import CancelAppointment from './components/navbar/cancelAppointment/CancelAppointment';

function App() {

  const router= createBrowserRouter([
  {
    path: '/', element: <HomePage />
  },
  {
    path: '/signin', element: <SignIn />
  },
  {
    path: 'signup', element: <SignUp />
  },
  {
    path: '/forgot-password', element: <ForgotPassword />
  },
  {
    path: '/book-now/', element: <Navbar />,children: [
      {
        path: '/book-now/find-doc', element: <FindADoc />
      },
      {
        path: 'find-doc/doctor-profile/:id', element: <DoctorProfile />
      },
      {
        path: '/book-now/profile', element : <Profile />
      },
      {
        path: 'my-appointments', children:[
          {
            path:'', element: <Appointment />
          },
          {
            path:'appointment/:id' , element : <AppointmentDetail />
          },
          {
            path:'cancel-appointment/:id' , element : <CancelAppointment />
          }

        ]
      }
    ]
  }
])
  return (
        <RouterProvider router={router} />
  );
}

export default App;
