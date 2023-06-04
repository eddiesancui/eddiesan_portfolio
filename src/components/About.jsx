import React from 'react'

const About = () => {
  return (
    <div 
      name="about" 
      className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus necessitatibus quaerat fugiat delectus. Provident porro quos laborum dignissimos minus ducimus error qui, doloremque veritatis cumque id quam, aperiam praesentium nesciunt soluta fugiat aliquam repellat voluptatibus beatae neque ad sequi dolor repudiandae. Necessitatibus, harum debitis. Repellat alias placeat dignissimos dicta. Aut.
        </p>

        <br />

        <p className="text-xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium nihil itaque iste. Obcaecati reiciendis a eius ipsa ex temporibus cumque incidunt, perspiciatis laborum assumenda earum exercitationem pariatur sint dicta, ipsum alias facere ipsam eos odio voluptates illo! Culpa alias, itaque, nostrum sint reiciendis cumque sunt sed, sit voluptatem reprehenderit perspiciatis?
        </p>
      </div>

    </div>
  )
}

export default About
