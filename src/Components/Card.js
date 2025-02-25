import React from 'react'
import {FaQuoteLeft, FaQuoteRight} from 'react-icons/fa';


const Card = (props) => {
    let reviews = props.reviews;
  return (
    <div className='flex flex-col md:relative'>
      <div className='md:absolute relative md:top-[-7rem] z-[10] mx-auto'>
        <img 
        className="aspect-square rounded-full w-[140px] h-[140px] z-[25]"
        src={reviews.image}
        alt=""
        />
        <div className='w-[140px] h-[140px] bg-pink-500 rounded-full absolute
         top-[-6px] z-[-10] left-[10px]'></div>
      </div>
      
      <div className='text-center mt-7'>
        <p className='tracking-wider font-bold text-2xl font-mono capitalize text-neutral-100'>{reviews.name}</p>
        <p className='text-pink-500 uppercase font-mono text-md'>{reviews.job}</p>
      </div>


      <div className='text-pink-400 mx-auto mt-5'>
        <FaQuoteLeft/>
      </div>

      <div className=' mt-4 text-slate-500 text-center '>
        {reviews.text}
      </div>

      <div  className='text-pink-400 mx-auto mt-5'>
        <FaQuoteRight/>
      </div>
    </div>
  )
}

export default Card