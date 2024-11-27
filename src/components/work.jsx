import React from 'react';

const Work = () => {
  return (
    <section id="work">
      <div name='work' className='w-full h-600px pt-20 bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full gap-8'>
          <div className='sm:text-center pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              Project
            </p>
          </div>
          </div>
          <div className='max-w-[1000px] w-full gap-8 px-4'>
            <div className='sm:text-center text-xl font-bold'>
              <p>So this is one of my projects</p>
              <button className="text-white group border-2 px-5 py-3 my-4 center items-center hover:bg-pink-600 hover:border-pink-600">
        <a href="src/assets/p/index.html" className="text-blue-200 hover:text-gray-400">~Link~</a>
        </button> 
            </div>
          </div>
      </div>
    </div>
    </section>
  );
}

export default Work;
