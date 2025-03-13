import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
   return (
      <div className='h-screen'>

         <Link
            to={'/home'}
            className='fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full'
         >
            <i className="text-lg font-medium ri-home-9-fill"></i>
         </Link>

         <div className='h-1/2'>
            <img
               className='h-full w-full object-cover'
               src='https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg'
            />
         </div>

         <div className='h-1/2 p-4'>
            <div className='flex items-center justify-between'>
               <img
                  src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png"
                  className='h-12'
               />
               <div className='text-right'>
                  <h2 className='text-lg font-medium opacity-65'>Sarthak</h2>
                  <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234</h4>
                  <p className='text-sm text-gray-600'>Maruti Suzuki Alto</p>
               </div>
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

                  <div className='flex items-center gap-4 p-3'>
                     <i className="ri-btc-fill"></i>
                     <div>
                        <h3 className='text-lg font-medium'>₹193.20</h3>
                        <p className='text-gray-600 text-sm -mt-1'>Cash Cash</p>
                     </div>
                  </div>

               </div>

            </div>


            <button
               className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'
            >
               Make a Payment
            </button>
         </div>

      </div>
   )
}

export default Riding