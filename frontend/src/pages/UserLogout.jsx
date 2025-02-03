import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const UserLogout = () => {

   const token = localStorage.getItem('token');
   console.log('tokennnn', token);
   const navigate = useNavigate();

   useEffect(() => {
      const logout = async () => {
         await axios.get(`${import.meta.env.VITE_BASE_URL}/users/logout`, {
            headers: {
               authorization: `Bearer ${token}`
            }
         }).then(response => {
            if (response.status === 200) {
               localStorage.removeItem('token');
               navigate('/login');
            }
         })
      }
      logout();
   }, [])

   return (
      <div></div>
   )
}

export default UserLogout