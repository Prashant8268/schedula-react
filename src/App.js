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
    path: '/book-now', element: <Navbar />,children: [
      {
        path: '/book-now/', element: <FindADoc />
      },
      {
        path: 'doctor-profile/:id', element: <DoctorProfile />
      },
      {
        path: 'profile', element : <Profile />
      }
    ]
  }
])
  return (
        <RouterProvider router={router} />
  );
}

export default App;
