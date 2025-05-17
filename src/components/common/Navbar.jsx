import Link from 'next/link';
import React from 'react'
import Image  from 'next/image';
import logo from '../../../public/logo.jpg';


const Navbar = () => {
  return (
    <nav className='bg-blue-200 p-6 flex justify-between items-center'>

    <div>
      <Image
      src={logo}
      alt='logo'
      width={80}
      height={80}
      />
    </div>
      <div className='space-x-8'>  
      <Link href = "/pages/home" className='text-black text-1xl font-bold hover:underline'>Home</Link>
      <Link href = "/pages/aboutus" className='text-black text-1xl font-bold hover:underline'>About Us</Link>
      <Link href = "/pages/room" className='text-black text-1xl font-bold hover:underline'>Room</Link>
      <Link href = "/pages/contactus" className='text-black text-1xl font-bold hover:underline'>Contact Us</Link>
      <Link href = "/pages/requestbooking" className='text-black text-1xl font-bold hover:underline'>Request Booking</Link>
      
      </div>

      </nav>
      
      );
    }
export default Navbar;