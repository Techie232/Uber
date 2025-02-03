import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CaptainSignup = () => {

   const [email, setEmail] = useState('')
   const [password, setPassword] = useState('');
   const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('')

   const [captainData, setCaptainData] = useState({})

   const submitHandler = (e) => {
      e.preventDefault();
      setCaptainData({
         fullName: {
            firstName,
            lastName,
         },
         email,
         password,
      })
      console.log(userData);
      setEmail('');
      setFirstName('');
      setLastName('');
      setPassword('');
   }

   return (
      <div className='py-5 px-5 h-screen flex flex-col justify-between'>
         <div>
            <img className='w-20 mb-3' src='https://www.svgrepo.com/show/505031/uber-driver.svg' />
            <form
               onSubmit={(e) => {
                  submitHandler(e)
               }}
            >
               <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
               <div className='flex gap-4 mb-6'>
                  <input
                     required
                     className='bg-[#EEEEEE] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none'
                     type='text'
                     placeholder='First name'
                     value={firstName}
                     onChange={(e) => setFirstName(e.target.value)}
                  />
                  <input
                     required
                     className='bg-[#EEEEEE] rounded px-4 py-2 border w-1/2 text-lg placeholder:text-base outline-none'
                     type='text'
                     placeholder='Last name'
                     value={lastName}
                     onChange={(e) => setLastName(e.target.value)}
                  />
               </div>

               <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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
                  Login
               </button>
            </form>

            <p className='text-center'>
               Already have an Account?  <Link
                  to={'/captain-login'}
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

export default CaptainSignup