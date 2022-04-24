import React from "react";

const About = () => {

    return (
        <div>
            <div className="p-2 text-center bg-purple-500 rounded-t-lg">
                About me
            </div>
            <div className='text-justify px-2'>
                <p>Hello World, my name is Nicolas also known as Ch'Mick. I am 28 years old. I have just completed a 10-weeks coding bootcamp in <a href='https://www.lacapsule.academy/'>La Capsule.</a></p>
                <p>During the bootcamp I built 10 applications, in 10 weeks, and which ended with an MVP Veazit & Play (here is <a href='https://github.com/kduperis/veazitFront'>Front-End repository</a> and here the <a href='https://github.com/kduperis/veazitBackend'>Back-End repository)</a> with 2 fellow students, in just 2 weeks  we presented this project for our final examination. Even if I am a junior, my motivation is at a 100%!</p>
            </div>
        </div>
    )
};

export default About;