import React from 'react'

const VehiclePanel = ({ setVechiclePanelOpen, setConfirmRidePanel }) => {
   return (
      <div>
         <div className='flex justify-between'>
            <h3 className='text-2xl font-semibold mb-5'>Choose a Vehicle</h3>
            <div
               onClick={() => setVechiclePanelOpen(false)}
            >
               <i className="ri-arrow-down-s-line relative text-xl right-5"></i>
            </div>
         </div>

         <div
            onClick={() => setConfirmRidePanel(true)}
            className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img
               className='h-12'
               src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png' />

            <div className=' w-1/2'>
               <h4 className='font-medium text-base'>UberGO <span><i className="ri-user-fill"></i>4</span></h4>
               <h5 className='font-medium text-sm'>2 mins away</h5>
               <p className='font-normal text-xs text-gray-600'>Affordable, Compact rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹193.20</h2>
         </div>

         <div
            onClick={() => setConfirmRidePanel(true)}
            className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img
               className='h-12'
               src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png'
            />

            <div className=' w-1/2'>
               <h4 className='font-medium text-base'>Moto <span><i className="ri-user-fill"></i>1</span></h4>
               <h5 className='font-medium text-sm'>3 mins away</h5>
               <p className='font-normal text-xs text-gray-600'>Affordable, motorcycle rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹65.19</h2>
         </div>

         <div
            onClick={() => setConfirmRidePanel(true)}
            className='flex border-2 active:border-black mb-2 rounded-xl w-full p-3 items-center justify-between'>
            <img
               className='h-12'
               src='https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png'
            />

            <div className=' w-1/2'>
               <h4 className='font-medium text-base'>UberAuto <span><i className="ri-user-fill"></i>3</span></h4>
               <h5 className='font-medium text-sm'>1 mins away</h5>
               <p className='font-normal text-xs text-gray-600'>Affordable, Auto rides</p>
            </div>
            <h2 className='text-lg font-semibold'>₹118</h2>
         </div>
      </div>
   )
}

export default VehiclePanel