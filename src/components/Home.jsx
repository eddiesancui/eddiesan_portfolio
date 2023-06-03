import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight}from 'react-icons/md'

const Home = () => {
  return (
    <div 
      name="home" 
      className='h-screen w-full bg-gradient-to-b from-black to-gray-800'>

      <div className='max-w-screen-lg nx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
          <div>
            <h2>
              I'm a Front-End Developer
            </h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, distinctio eaque. Iusto, fuga! Porro consequuntur quia molestias rerum cupiditate debitis fugiat voluptatibus sint delectus aspernatur minima nam maxime harum eum voluptatem veritatis quae laborum officiis, eos dolores reiciendis repellat nihil perspiciatis. Vel tenetur earum enim at facere omnis, rem velit.
            </p>
            
            <div>
              <button>
                Portfolio
                <span>
                  <MdOutlineKeyboardArrowRight />
                </span>
              </button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Home