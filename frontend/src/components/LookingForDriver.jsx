import React from 'react'

const LookingForDriver = ({ setVehicleFound }) => {
   return (
      <div>
         <div
            className='w-full text-center relative -translate-y-6'
            onClick={() => setVehicleFound(false)}
         >
            <i className="ri-arrow-down-s-line relative text-xl right-5 bg-gray-300 rounded-md"></i>
         </div>

         <h3 className='text-2xl text-center font-semibold mb-5'>Looking For a Driver</h3>

         <div className='flex flex-col justify-between gap-3 items-center'>

            <img
               src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1569352630/assets/4b/28f11e-c97b-495a-bac1-171ae9b29362/original/BlackSUV.png"
               className='h-20'
            />

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

         </div>

      </div >
   )
}

export default LookingForDriver