import React from 'react';
import Hazina from '../assets/Hazina.png'
import SneakerApp from '../assets/SneakeraApp.png';
import WatchList from '../assets/watchlist.png';
import TranslatorApp from '../assets/TranslatorApp.png';

function Work() {
  return (
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
       
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Projects</p>
                <p className='py-6'>Check Out some of my recent work</p>
            </div>
        {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Grid Item */}
                <div style={{backgroundImage: `url(${Hazina})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React-Ruby on Rails Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://hazina-fe.vercel.app/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/Beulah-Matt/hazina-backend'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${TranslatorApp})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://yegobaroni.github.io/Final-project-phase-1'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/yegobaroni/Final-project-phase-1'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${SneakerApp})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/hafsa-nuh/react-project-4'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${WatchList})`}}
                className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                   
                   {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            React JS Application
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://yegobaroni.github.io/Phase2/'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/yegobaroni/Phase2'>
                                <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>
        
            </div>

        </div>
    </div>
  )
}

export default Work;