import React from 'react'

// Reusable Card component
const Card = ({ img }) => {
  return (
    <div className='min-w-[8rem] min-h-[8rem] rounded-2xl flex items-center justify-center m-2 bg-white/10 backdrop-blur-sm hover:scale-105 transition-transform duration-300'>
      <img src={img} alt="tech stack icon" className='w-20 h-20 object-contain brightness-0' />
    </div>
  )
}

// Replace with your actual icons or logos
const images = [
  '/images/react.webp',
  '/images/mobile.png',
  '/images/javascript.png',
  '/images/three.png',
  '/images/tailwind.png',
  '/images/java.png',
  '/images/csharp.png',
  '/images/appwrite.png',
  '/images/vue.png',
  '/images/python.png',
  
]

export default function TechStack() {
  return (
    <div className='w-full overflow-x-auto flex  items-stretch whitespace-nowrap px-5 py-10'>
      
      <div className='inline-flex'>
        {images.map((img, index) => (
          <Card key={index} img={img} />
        ))}
      </div>
    </div>
  )
}
