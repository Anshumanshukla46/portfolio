import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            <div className='flex flex-col justify-center items-center w-full h-full'>
                <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                    <div className='sm:text-right pb-8 pl-4'>
                        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
                            About
                        </p>
                    </div>
                    <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. I'm Anshuman Shukla, nice to meet you.</p>
                    </div>
                    <div>
                        <p>I am passionate about building website which improves
                            the lives of people. I am good in creating websites and solving real world problems.
                            I am looking for <span className='font-bold text-lg underline'>Software Developer</span> roles. I would be delighted to speak with you if you are hiring for an  <span className='font-bold text-lg underline'>SDE</span> position. <br />Please contact me at the <span className='underline'>anshumanshukla46@gmail.com</span> provided below or send me a note using below contact form.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
