import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import FinishRide from '../components/FinishRide';

const CaptainRiding = () => {

   const [finishRidePanel, setFinishRidePanel] = useState(false);
   const finishRidePanelRef = useRef(null);

   useGSAP(function () {
      if (finishRidePanel) {
         gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(0)'
         })
      }
      else {
         gsap.to(finishRidePanelRef.current, {
            transform: 'translateY(100%)'
         })
      }
   }, [finishRidePanel])

   return (
      <div className='h-screen'>

         <div className='fixed w-full p-3 top-0 flex items-center justify-between'>
            <img src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
               className='w-16'
            />
            <Link
               to={'/captain-home'}
               className='h-10 w-10 bg-white flex items-center justify-center rounded-full'
            >
               <i className="text-lg font-medium ri-logout-box-line"></i>
            </Link>
         </div>

         <div className='h-4/5'>
            <img
               className='h-full w-full object-cover'
               src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
            />
         </div>

         <div className='h-1/5 p-6 flex items-center relative justify-between bg-yellow-400'
            onClick={() => setFinishRidePanel(true)}
         >
            <div
               className='w-full text-center left-2 absolute right-1 top-6 -translate-y-6'
            >
               <i className="ri-arrow-up-s-line relative px-10 py-1 text-xl right-5 bg-gray-300 rounded-md"></i>
            </div>
            <h4 className='text-xl font-semibold'>4 KM away</h4>
            <button
               className='bg-green-600 text-white font-semibold p-3 px-8 rounded-lg ml-4'
            >
               Complete Ride
            </button>
         </div>

         <div ref={finishRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <FinishRide setFinishRidePanel={setFinishRidePanel} />
         </div>

      </div >
   )
}

export default CaptainRiding