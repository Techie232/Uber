import React from 'react'

const CaptainDetails = () => {
   return (
      <div><div className='flex items-center justify-between'>
         <div className='flex items-center justify-start gap-3'>
            <img
               className='h-10 w-10 rounded-full object-cover'
               src="https://www.shutterstock.com/image-photo/handsome-indonesian-southeast-asian-man-260nw-2476654675.jpg" alt="" />
            <h4 className='text-lg font-medium'>Harsh Patel</h4>
         </div>
         <div className=''>
            <h4 className='text-xl font-semibold'>₹295.2</h4>
            <p className='text-sm text-gray-600'>Earned</p>
         </div>
      </div>


         <div className='flex p-3 mt-8 bg-gray-50 rounded-xl items-start justify-center gap-4'>
            <div className='text-center'>
               <i className="text-3xl font-thin ri-time-line"></i>
               <h5 className='text-lg font-medium'>10.2</h5>
               <p className='text-sm texxt-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
               <i className="text-3xl font-thin ri-speed-up-line"></i>
               <h5 className='text-lg font-medium'>10.2</h5>
               <p className='text-sm texxt-gray-600'>Hours Online</p>
            </div>
            <div className='text-center'>
               <i className="text-3xl font-thin ri-booklet-line"></i>
               <h5 className='text-lg font-medium'>10.2</h5>
               <p className='text-sm texxt-gray-600'>Hours Online</p>
            </div>
         </div>
      </div>
   )
}

export default CaptainDetails