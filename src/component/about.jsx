import React from 'react'
import Layout from './Layout'

function About() {
  return (
    <Layout>
      <div>
        <div className='px-10 text-2xl  font-medium text-balck '>
          <h1 className=' font-bold  text-teal-950 decoration-teal-950 underline py-3 text text-5xl  decoration-8'>About Me</h1>
          Hi there! My name is Devesh Kumar, and I am a Software Engineer. I have experience in developing
          applications. In addition to
          my professional experience, I am always eager to learn and work with new technologies and share my knowledge with others.
          I am excited to continue growing and learning in my field, and I look forward to connecting with others who share my interests.

        </div>
        <div className="px-10 py-10 flex justify-end flex-1 font-medium text-balck text-2xl">
          To leverage my skills as a competitive programmer while working in a development-focused environment,
          I aim to continuously enhance my problem-solving abilities and contribute to innovative projects that push the boundaries of technology.
        </div>
      </div>
    </Layout>
      
  )
}

export default About