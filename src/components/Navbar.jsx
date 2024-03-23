import React from 'react'

function Navbar() {
  return (
    <>
     <div className="w-full bg-inherit flex justify-between items-center p-4 shadow-sm text-white">
        <h3 className='text-white font-bold text-xl'>Doto<span className='text-[var(--primary)]'>Z</span></h3>
        <div className='flex gap-8'>
           <a href="https://github.com/Zahid40"><img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" className='w-6 invert' alt="" /></a>
           <a href="https://www.instagram.com/zahid_w83"><img src="https://cdn-icons-png.flaticon.com/128/174/174855.png" className='w-6' alt="" /></a>
           <a href="/"><img src="https://lh3.googleusercontent.com/a/ACg8ocJxADMIkIBvfexyntm-vXTsASjSikBYNQoM5X-Lta8KIB4=s96-c" className='rounded-full w-6' alt="" /></a>
        </div>
     </div>
    </>
  )
}

export default Navbar
