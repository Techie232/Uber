import React from 'react'

const LocationSearchPanel = ({ setVechiclePanelOpen, setPanelOpen }) => {

   // sample array for location
   const locations = [
      '24B, Near Kapoor\'s Cafe, Sheriyans Coding School, BHOPAL',
      '22B, Near Malhotra\'s Cafe, Sheriyans Coding School, BHOPAL',
      '20B, Near Singhanai\'s Cafe, Sheriyans Coding School, BHOPAL',
      '18B, Near Sharma\'s Cafe, Sheriyans Coding School, BHOPAL',
   ]

   return (
      <div className='flex flex-col gap-3'>
         {/* This is just sample data */}

         {
            locations.map(function (elem, index) {
               return <div
                  key={index}
                  className='flex border-2 p-1 rounded-xl py-2 border-gray-50 active:border-black items-center justify-start gap-4'
                  onClick={() => { setVechiclePanelOpen(true), setPanelOpen(false) }}
               >
                  <h2 className='bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full'>
                     <i className="ri-map-pin-fill text-xl"></i>
                  </h2>
                  <h4 className='font-medium'>{elem}</h4>
               </div>
            })
         }
      </div>
   )
}

export default LocationSearchPanel