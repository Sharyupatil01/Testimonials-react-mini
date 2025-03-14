import logo from './logo.svg';
import './App.css';
import Testimonials from './Components/Testimonials';
import reviews from './data';
import React from 'react';

function App() {

  return (
    <div className="flex flex-col w-[100vw] min-h-[100vh] justify-center items-center bg-gray-200 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Our Testimonials </h1>
      
      <div className="bg-pink-700 h-[4px] w-1/5 mt-1 mx-auto"></div>
      <Testimonials reviews={reviews} ></Testimonials>
      </div>
    </div>
  );
}

export default App;
