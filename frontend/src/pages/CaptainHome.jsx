import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import CaptainDetails from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';

const CaptainHome = () => {

   const [ridePopUpPanel, setRidePopUpPanel] = useState(true);
   const [confirmRidePopUpPanel, setConfirmRidePopUpPanel] = useState(false);
   const ridePopUpPanelRef = useRef(null);
   const confirmRidePopUpPanelRef = useRef(null);

   useGSAP(function () {
      if (ridePopUpPanel) {
         gsap.to(ridePopUpPanelRef.current, {
            transform: 'translateY(0)'
         })
      }
      else {
         gsap.to(ridePopUpPanelRef.current, {
            transform: 'translateY(100%)'
         })
      }
   }, [ridePopUpPanel])

   useGSAP(function () {
      if (confirmRidePopUpPanel) {
         gsap.to(confirmRidePopUpPanelRef.current, {
            transform: 'translateY(0)'
         })
      }
      else {
         gsap.to(confirmRidePopUpPanelRef.current, {
            transform: 'translateY(100%)'
         })
      }
   }, [confirmRidePopUpPanel])

   return (
      <div className='h-screen'>

         <div className='fixed w-full p-3 top-0 flex items-center justify-between'>
            <img src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
               className='w-16'
            />
            <Link
               to={'/captain-login'}
               className='h-10 w-10 bg-white flex items-center justify-center rounded-full'
            >
               <i className="text-lg font-medium ri-logout-box-line"></i>
            </Link>
         </div>

         <div className='h-3/5'>
            <img
               className='h-full w-full object-cover'
               src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
            />
         </div>

         <div className='h-2/5 p-6'>
            <CaptainDetails />
         </div>

         <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <RidePopUp setRidePopUpPanel={setRidePopUpPanel} setConfirmRidePopUpPanelPanel={setConfirmRidePopUpPanel} />
         </div>

         <div ref={confirmRidePopUpPanelRef} className='fixed h-screen w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <ConfirmRidePopUp setConfirmRidePopUpPanelPanel={setConfirmRidePopUpPanel} setRidePopUpPanel={setRidePopUpPanel} />
         </div>

      </div >
   )
}

export default CaptainHome