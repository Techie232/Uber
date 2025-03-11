import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

const Home = () => {

   const [pickup, setPickup] = useState('');
   const [destination, setDestination] = useState('');
   const [panelOpen, setPanelOpen] = useState(false);
   const [vechiclePanelOpen, setVechiclePanelOpen] = useState(false);
   const [confirmRidePanel, setConfirmRidePanel] = useState(false);
   const [vehicleFound, setVehicleFound] = useState(false);
   const [waitingForDriver, setWaitingForDriver] = useState(false);

   const panelRef = useRef(null);
   const vehiclePanelRef = useRef(null);
   const confirmRidePanelRef = useRef(null);
   const vehicleFoundRef = useRef(null);
   const waitingForDriverRef = useRef(null);

   const submitHandler = (e) => {
      e.preventDefault();
   }

   useGSAP(function () {
      if (panelOpen) {
         gsap.to(panelRef.current, {
            height: '70%',
            opacity: 1,
            padding: 26,
         })
      }
      else {
         gsap.to(panelRef.current, {
            height: 0,
            opacity: 0,
            padding: 0,
         })
      }
   }, [panelOpen])

   useGSAP(function () {
      if (vechiclePanelOpen) {
         gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(0)'
         })
      }
      else {
         gsap.to(vehiclePanelRef.current, {
            transform: 'translateY(100%)'
         })
      }
   }, [vechiclePanelOpen])

   useGSAP(function () {
      if (confirmRidePanel) {
         gsap.to(confirmRidePanelRef.current, {
            transform: 'translateY(0)'
         })
      }
      else {
         gsap.to(confirmRidePanelRef.current, {
            transform: 'translateY(100%)'
         })
      }
   }, [confirmRidePanel])

   useGSAP(function () {
      if (vehicleFound) {
         gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(0)'
         })
      }
      else {
         gsap.to(vehicleFoundRef.current, {
            transform: 'translateY(100%)'
         })
      }
   }, [vehicleFound])

   // useGSAP(function () {
   //    if (waitingForDriver) {
   //       gsap.to(waitingForDriverRef.current, {
   //          transform: 'translateY(0)'
   //       })
   //    }
   //    else {
   //       gsap.to(waitingForDriverRef.current, {
   //          transform: 'translateY(100%)'
   //       })
   //    }
   // }, [waitingForDriver])

   return (
      <div className='h-screen relative overflow-hidden'>
         <img
            className='w-16 absolute left-5 top-5'
            src='https://download.logo.wine/logo/Uber/Uber-Logo.wine.png'
         />

         <div
            className='h-screen w-screen'
         >
            {/* image for temporary use */}
            <img
               className='h-full w-full object-cover'
               src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
            />
         </div>

         <div
            className='flex flex-col justify-end h-screen absolute w-full top-0'
         >
            <div className='h-[30%] p-6 bg-white relative'>
               {
                  panelOpen &&
                  <h5 className='absolute top-6 right-8 text-2xl'
                     onClick={() => setPanelOpen(false)}>
                     <i className="ri-arrow-down-wide-line"></i>
                  </h5>
               }
               <h4 className='text-2xl font-semibold'>Find a Trip</h4>
               <form onSubmit={(e) => submitHandler(e)}>

                  <div className='line absolute h-16 w-1 top-[45%] left-8 bg-gray-900 rounded-full'></div>
                  <input
                     className='bg-[#eee] px-12 py-2 text-lg rounded-lg mt-5 w-full'
                     type='text'
                     placeholder='Add a pick-up location'
                     value={pickup}
                     onChange={(e) => setPickup(e.target.value)}
                     onClick={() => setPanelOpen(true)}
                  />
                  <input
                     className='bg-[#eee] px-12 py-2 text-lg mt-3 rounded-lg w-full'
                     type='text'
                     placeholder='Enter your destination'
                     value={destination}
                     onChange={(e) => setDestination(e.target.value)}
                     onClick={() => setPanelOpen(true)}
                  />
               </form>
            </div>

            <div
               ref={panelRef}
               className='bg-white h-0'
            >
               <LocationSearchPanel setPanelOpen={setPanelOpen} setVechiclePanelOpen={setVechiclePanelOpen} />
            </div>
         </div>

         <div ref={vehiclePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <VehiclePanel setVechiclePanelOpen={setVechiclePanelOpen} setConfirmRidePanel={setConfirmRidePanel} />
         </div>

         <div ref={confirmRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <ConfirmRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
         </div>

         <div ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <LookingForDriver setVehicleFound={setVehicleFound} />
         </div>

         <div ref={waitingForDriverRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-8 translate-y-full'>
            <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
         </div>

      </div>
   )
}

export default Home