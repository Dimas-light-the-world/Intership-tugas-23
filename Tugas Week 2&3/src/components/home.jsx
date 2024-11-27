import React from 'react';
import Images from '../assets/fotongawi.jpg';

const Home = () => {
  return (
    <section id="home">
  <div name='home' className='w-full h-1000px pt-20  bg-[#0a192f]'>
    {/* Container */}
    <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center h-full">
      <div className="flex flex-col items-start md:mr-10">
        <p className="text-pink-600 pt-10 sm:text-2xl">Hi, my name is</p>
        <h1 className="text-3xl sm:text-4xl font-bold text-[#ccd6f6]">
          Dimas Ahmad
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold text-[#8892b0]">
          I'm a Trainee in FE Exercise.
        </h2>
        <p className="text-[#8892b0] text-xl py-4 max-w-[600px]">
          I'm an undergraduate electrical engineering who interest in coding and gaming.<br></br>
          I can't wait to work with you! 
        </p>
        <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600">
        <a href="#work" className="text-blue-200 hover:text-gray-400">View Work</a>
        </button>
      </div>
      <div className="flex justify-center 1  items-center">
        <img src={Images} alt="fotongawi" className="w-64 h-64 object-cover rounded-lg shadow-lg" />
      </div>
    </div>
  </div>
</section>
  );
};

export default Home;
