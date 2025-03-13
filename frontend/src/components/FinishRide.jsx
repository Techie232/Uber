import React from 'react'
import { Link } from 'react-router-dom'

const FinishRide = ({ setFinishRidePanel }) => {

   return (
      <div>
         <div
            className='w-full text-center relative -translate-y-6'
            onClick={() => setFinishRidePanel(false)}
         >
            <i className="ri-arrow-down-s-line relative text-xl right-5 bg-gray-300 rounded-md"></i>
         </div>

         <h3 className='text-2xl text-center font-semibold mb-5'>Finish this ride!</h3>

         <div className='flex items-center justify-between p-2 bg-yellow-400 rounded-lg'>
            <div className='flex items-center gap-3'>
               <img
                  className='h-12 w-12 object-cover rounded-full'
                  src='https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww'
               />
               <h2 className='text-lg font-medium'>John Doe</h2>
            </div>

            <h5 className='text-lg font-semibold'>2.2 KM</h5>

         </div>

         <div className='flex flex-col justify-between gap-3 items-center'>

            <div className='w-full mt-5'>
               <div className='flex items-center gap-4 p-3 border-b-2'>
                  <i className="text-lg ri-map-pin-fill"></i>
                  <div>
                     <h3 className='text-lg font-medium'>562/11-A</h3>
                     <p className='text-gray-600 text-sm -mt-1'>Kankariya Talab, Bhopal</p>
                  </div>
               </div>

               <div className='flex items-center gap-4 p-3 border-b-2'>
                  <i className="text-lg ri-map-pin-fill"></i>
                  <div>
                     <h3 className='text-lg font-medium'>562/11-A</h3>
                     <p className='text-gray-600 text-sm -mt-1'>Kankariya Talab, Bhopal</p>
                  </div>
               </div>

               <div className='flex items-center gap-4 p-3'>
                  <i className="ri-btc-fill"></i>
                  <div>
                     <h3 className='text-lg font-medium'>₹193.20</h3>
                     <p className='text-gray-600 text-sm -mt-1'>Cash Cash</p>
                  </div>
               </div>
            </div>


            <div className='w-full flex'>
               <Link
                  to={'/captain-home'}
                  className='w-full text-center text-lg mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>
                  Finish Ride
               </Link>

            </div>

         </div>

      </div >
   )
}

export default FinishRide