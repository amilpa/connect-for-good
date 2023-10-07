import React from 'react'

const add_event = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-screen bg-yellow-200 ">

        <div>
          <h1 className='text-center text-5xl pt-5 text-[#006f9e] font-extrabold'>Create New Event</h1>
        </div>

        <div className='mt-5'>
          <h2 className='text-2xl font-semibold text-[#006f9e]'>Please add details about your event</h2>
        </div>

        <div className='flex flex-col mt-7 ml-16 w-3/5'>
          <span className='pb-4 text-xl text-[#006f9e] font-bold'>Event Name</span>
          <input type="text" placeholder='Enter Project title' className='rounded-lg h-8 border-1 border-[#006f9e]' />
        </div>

        <div className='flex flex-col mt-7 ml-16 w-3/5'>
          <span className='pb-4 text-xl text-[#006f9e] font-bold'>Event Description</span>
          <input type="text" className='rounded-lg h-8 border-1 border-[#006f9e]' />
        </div>

        <div className='flex flex-col mt-7 ml-16 w-3/5'>
          <span className='pb-4 text-xl text-[#006f9e] font-bold'>Upload Featuring Photo</span>
          <input type="text" className='rounded-lg h-8 border-1 border-[#006f9e]' />
        </div>

        <div className='flex flex-col mt-7 ml-16 w-3/5'>
          <span className='pb-4 text-xl text-[#006f9e] font-bold'>Team Members</span>
          <input type="text" placeholder='Enter Team members name' className='rounded-lg h-8 border-1 border-[#006f9e]' />
        </div>


        <div className='flex mt-7 ml-16 w-3/5 justify-evenly'>

          <div className='flex flex-col w-2/5'>
            <span className='pb-4 text-xl text-[#006f9e] font-bold'>Contact No</span>
            <input type="text" placeholder='Enter your contact No' className='rounded-lg h-8 border-1 border-[#006f9e]' />
          </div>
          
          <div className='flex flex-col w-2/5'>
            <span className='pb-4 text-xl text-[#006f9e] font-bold'>LinkedIn Link</span>
            <input type="text" className='rounded-lg h-8 border-1 border-[#006f9e]' />
          </div>
          
        </div>


        <div className='mt-6'>
          <button className='bg-red-400 text-white'>Submit</button>
        </div>

      </div>
    </div>
  )
}

export default add_event
