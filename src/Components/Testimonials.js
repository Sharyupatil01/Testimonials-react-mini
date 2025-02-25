import React from "react";
import Card from "./Card";
import { PiSkipForwardFill } from "react-icons/pi";
import { FaBackwardStep } from "react-icons/fa6";
import { useState } from "react";

const Testimonials = (props) => {
    let reviews = props.reviews;

    const[index,setindex]=useState(0);

    function lefthandler()
    {
       if(index-1<0)
       {
         setindex(reviews.length-1);
       }
       else{
        setindex(index-1);
       }
    }
    function righthandler()
    {
       if(index+1>=reviews.length)
       {
        setindex(0);
       }
       else{
        setindex(index+1);
       }

    }
    function surprisehandler()
    {
         let value= Math.floor(Math.random()*reviews.length);
         setindex(value);
    }




    return (
        <div className='w-[85vw] md:w-[700px] bg-slate-900 flex flex-col justify-center items-center
        mt-10 p-10 transition-all duration-700 shadow-lg hover:shadow-xl shadow-pink-700  rounded-md' >
            <Card reviews={reviews[index]}></Card>
            <div className='flex text-3xl mt-10 gap-3 text-pink-500 font-bold mx-auto'>
                <button 
                onClick={lefthandler}
                className='cursor-pointer hover:text-pink-300'>
                    <FaBackwardStep />
                </button>
                <button 
                onClick={righthandler}
                className='cursor-pointer hover:text-pink-300'>
                    <PiSkipForwardFill />
                </button>

            </div>

            <div className='mt-6'>
                <button

onClick={surprisehandler}
                
                
                
                className='bg-pink-500 hover:bg-pink-300 transition-all font-mono duration-200
        cursor-pointer px-10 py-2 rounded-md font-semibold text-white text-lg'>
                    Surprise Me
                </button>
            </div>


        </div>
    )
}
export default Testimonials;