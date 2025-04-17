import React from 'react'

export default function About() {
  return (
    <>
    <div className='h-[20vh] w-full'></div>
   <section className='w-full h-[70vh] bg-black rounded-2xl px-5' style={{clipPath: 'polygon(5% 0, 94% 0, 100% 85%, 0% 100%)'}}>
    <div className='text-white px-20 pt-10'>
        <h1 className='text-center text-4xl font-bold pt-10'>Hi <span className='inline-block transition-transform duration-300 hover:scale-125'>👋</span>, I'm Terzo</h1>
        <p className='pt-20 px-15 text-2xl'>Based in <span>🇷🇸</span> Serbia, 21 years old.</p>
        <p className='py-5 px-15 text-2xl'>Student | Web & Mobile Developer with over 4 years of advanced experience</p>
        <a href="/cv.pdf" className='py-5 px-15 text-2xl inline-block hover:font-bold hover:scale-125 transition-transform duration-300'> 📄 Check out my CV!</a>
        <p className='py-5 px-15 text-2xl'>A self-motivated individual with a strong foundation in
technology and problem-solving. Over the years, I have expanded my
technical knowledge through hands-on coding experience, and by
attending various workshops and tech events focused on both IT and
soft skills development. I have a well-rounded understanding of
software and web development, UI/UX design, and cybersecurity. Eager
to contribute my skills in innovative projects and to continue growing in
the ever-evolving tech landscape.</p>
       
    </div>
   </section>
    </>
  )
}
