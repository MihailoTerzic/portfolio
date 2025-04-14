import React from 'react'

export default function About() {
  return (
    <>
    <div className='h-[20vh] w-full'></div>
   <section className='w-full h-screen bg-black rounded-2xl px-5' style={{clipPath: 'polygon(5% 0, 94% 0, 100% 85%, 0% 100%)'}}>
    <div className='text-white px-20 pt-10'>
        <h1 className='text-center text-4xl font-bold pt-10'>About Me</h1>
        <p className='pt-20 px-15 text-2xl'>Software Developer with over 4 years of experience in all different areas of programming.</p>
        <p className='pt-20 px-15 text-2xl'>Software Developer with over 4 years of experience in all different areas of programming.</p>
        <p className='pt-20 px-15 text-2xl'>Software Developer with over 4 years of experience in all different areas of programming.</p>
        <p className='pt-20 px-15 text-2xl'>Software Developer with over 4 years of experience in all different areas of programming.</p>
    </div>
   </section>
    </>
  )
}
