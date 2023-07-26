import React from 'react';
// import AWS from '../assets/aws.png';
import CSS from '../assets/css.png';
import Firebase from '../assets/firebase.png';
import Github from '../assets/github.png';
import HTML from '../assets/html.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Tailwind from '../assets/tailwind.png';
// import Node from '../assets/node.png';
import Ruby from '../assets/ruby.png';
// import Mongo from '../assets/mongo.png';




function Skills() {
  return (
    <div name='skills' className=' w-full h-screen bg-[#0a192f]  text-gray-300'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 '>Software Stack</p>
                <p className='py-4'> These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={HTML} alt='HTML icon' />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={CSS} alt='css icon' />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={JavaScript} alt='Javascript icon' />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={ReactImg} alt='React icon' />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Github} alt='github icon' />
                    <p className='my-4'>GIT & GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Ruby} alt='node icon' />
                    <p className='my-4'>RUBY</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Tailwind} alt='Tailwind icon' />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Firebase} alt='HTML icon' />
                    <p className='my-4'>FIREBASE</p>
                </div>
                {/* <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={AWS} alt='Aws icon' />
                    <p className='my-4'>AWS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500]'>
                    <img className='w-20 mx-auto' src={Mongo} alt='Mongo icon' />
                    <p className='my-4'>MONGO DB</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Skills;