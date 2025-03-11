import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { UserDataContext } from '../context/UserContext';

const UserSignup = () => {

   const navigate = useNavigate();
   const { user, setUser } = useContext(UserDataContext);

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('');
   const [firstname, setFirstName] = useState('');
   const [lastname, setLastName] = useState('')

   const submitHandler = async (e) => {
      e.preventDefault();
      const newUser = {
         fullname: {
            firstname,
            lastname,
         },
         email,
         password,
      }

      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);

      if (response.status === 201) {
         const data = response.data;
         setUser(data?.user);
         localStorage.setItem('token', data?.token)
         navigate('/home');
      }

      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
   }


   return (
      <div className='p-7 h-screen flex flex-col justify-between'>
         <div>
            <img className='w-16 mb-10' src='https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png' />
            <form
               onSubmit={(e) => {
                  submitHandler(e)
               }}
            >
               <h3 className='text-lg font-medium mb-2'>What's your name</h3>
               <div className='flex gap-4 mb-6'>
                  <input
                     required
                     className='bg-[#EEEEEE] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none'
                     type='text'
                     placeholder='First name'
                     value={firstname}
                     onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                     required
                     className='bg-[#EEEEEE] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none'
                     type='text'
                     placeholder='Last name'
                     value={lastname}
                     onChange={(e) => setLastName(e.target.value)}
                  />
               </div>

               <h3 className='text-lg font-medium mb-2'>What's your email</h3>
               <input
                  required
                  className='bg-[#EEEEEE] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none'
                  type='email'
                  placeholder='email@example.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />

               <h3 className='text-lg font-medium mb-2'>Enter Password</h3>

               <input
                  className='bg-[#EEEEEE] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base outline-none'
                  required
                  type='password'
                  placeholder='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)} />

               <button
                  className='bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 border w-full text-lg '
               >
                  Create Account
               </button>
            </form>

            <p className='text-center'>
               Already have an Account?  <Link
                  to={'/login'}
                  className='text-blue-600'
               >
                  Login here
               </Link>
            </p>

         </div>

         <div>
            <p
               className='text-[10px] leading-tight'
            >
               This site is protected by reCAPTCHA and the
               <span className='underline'>Google Privacy Policy</span>
               and
               <span className='underline'>Terms of Service apply.</span>
            </p>
         </div>

      </div>
   )
}

export default UserSignup