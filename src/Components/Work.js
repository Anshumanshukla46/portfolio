import React from 'react';

import linkgif from "../assets/projects/link.gif"
import ama from "../assets/projects/ama.gif"
import inshort from "../assets/projects/inshort.gif"
import dashboard from "../assets/projects/dashboard.gif"
import joke from "../assets/projects/extension.gif"
import todo from "../assets/projects/todo.gif"
import calculator from "../assets/projects/calculator.gif"
import tenzies from "../assets/projects/tenzies.gif"
import meme from "../assets/projects/meme.gif"

import imgwh from "../assets/projects/image-by-width-and-height.gif"

import interactive from "../assets/projects/interactive-rating.gif"
import signUp from "../assets/projects/intro-sign-up.gif"


import dockergif from "../assets/projects/docker-2048.gif"

import SingleProject from './SingleProject';






const Work = () => {
    return (
        <div>
            {/* md:h-screen */}
            <div name='work' className='w-full  text-gray-300 bg-[#0a192f]'>

                {/*  */}
                <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center '>

                    <div className='pb-8'>

                        <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>Work</p>

                        <p className='py-6'> You may want to take a look at my latest endeavors, which can all be found on GitHub. </p>

                    </div>

                    {/* total 15  */}

                    {/* Container */}

                    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


                        <SingleProject
                            gif={linkgif}
                            title="LinkedIn Clone"
                            demoLink="https://anshumanshukla46.github.io/linkedin-clone/"
                            codeLink="https://github.com/Anshumanshukla46/linkedin-clone"
                        />

                        <SingleProject
                            gif={ama}
                            title="Amazon Clone"
                            demoLink="clone-4ec58.web.app/"
                            codeLink="https://github.com/Anshumanshukla46/e-commerce-amazon"
                        />


                        <SingleProject
                            gif={inshort}
                            title="Inshorts Clone"
                            demoLink="inshortsclonereact.vercel.app/"
                            codeLink="https://github.com/Anshumanshukla46/inshorts-clone"
                        />


                        <SingleProject
                            gif={dashboard}
                            title="Admin Dashboard"
                            demoLink="https://github.com/Anshumanshukla46/dashboard"
                            codeLink="https://github.com/Anshumanshukla46/dashboard"
                        />


                        <SingleProject
                            gif={dockergif}
                            title="Docker Game - 2048"
                            demoLink="https://github.com/Anshumanshukla46/docker-2048"
                            codeLink="https://github.com/Anshumanshukla46/docker-2048"
                        />

                        <SingleProject
                            gif={joke}
                            title="LinkedIn Clone"
                            demoLink="https://microsoftedge.microsoft.com/addons/detail/tell-me-a-joke/afhlgchoeggalphcmcgchhnjkdjmobgg"
                            codeLink="https://github.com/Anshumanshukla46/joke-extension"
                        />


                        <SingleProject
                            gif={todo}
                            title="Todo List"
                            demoLink="gitreacttodo.vercel.app/"
                            codeLink="https://github.com/Anshumanshukla46/todo-list"
                        />



                        <SingleProject
                            gif={tenzies}
                            title="Tenzies Roll Dice"
                            demoLink="https://anshumanshukla46.github.io/tenzies-roll/"
                            codeLink="https://github.com/Anshumanshukla46/tenzies-roll"
                        />


                        <SingleProject
                            gif={meme}
                            title="Get Meme"
                            demoLink="https://anshumanshukla46.github.io/meme/"
                            codeLink="https://github.com/Anshumanshukla46/meme"
                        />

                    </div>
                </div>
            </div>
        </div >
    );
};
export default Work;