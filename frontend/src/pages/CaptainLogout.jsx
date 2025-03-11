import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const CaptainLogout = () => {

   const token = localStorage.getItem('token');
   const navigate = useNavigate();

   useEffect(() => {
      const logout = async () => {
         await axios.get(`${import.meta.env.VITE_BASE_URL}/captains/logout`, {
            headers: {
               authorization: `Bearer ${token}`
            }
         }).then(response => {
            if (response.status === 200) {
               localStorage.removeItem('token');
               navigate('/captain-login');
            }
         })
      }
      logout();
   }, [])

   return (
      <div></div>
   )
}

export default CaptainLogout