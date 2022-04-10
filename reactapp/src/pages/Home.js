import React from 'react';

const HomeLink = ({ children, target = '_blank', ...rest }) => {
    return (
        <a {...rest} target={target} className='hover:underline hover:text-white hover:italic cursor-pointer'>{children}</a>
    )
}

const TitlePart = ({ children, ...rest }) => {
    return (
        <p {...rest} className='px-5 pb-5 font-mono font-bold text-5xl hover:underline hover:italic'>{children}</p>
    )
}

const SubtitlePart = ({ children, ...rest }) => {
    return (
        <p {...rest} className='px-5 font-mono font-bold text-3xl hover:italic hover:text-slate-400'>{children}</p>
    )
}

const TextPart = ({ children, ...rest }) => {
    return (
        <p {...rest} className='px-5 font-mono font-bold text-2xl'>{children}</p>
    )
}

const ImportantText = ({ children, ...rest }) => {
    return (
        <a {...rest} className='hover:text-red-700 hover:italic'>{children}</a>
    )
}

const ArrowUp = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 top-0 cursor-pointer" viewBox="0 0 20 20" fill="grey" opacity={.5} >
            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd" />
        </svg >
    )
}

function Home() {
    return (
        <div className='bg-transparent mx-auto'>
            <div className='flex flex-col bg-red-400'>
                <div className='flex flex-row items-center'>
                    <p className='px-10 py-5 font-mono font-bold text-5xl'>Hello World</p>
                    <div className='flex flex-row'>
                        <a className='px-5 py-5 font-mono font-bold text-xl cursor-pointer hover:italic' href='#about'>About me</a>
                        <a className='px-5 py-5 font-mono font-bold text-xl cursor-pointer hover:italic' href='#techno'>Technologies</a>
                        <a className='px-5 py-5 font-mono font-bold text-xl cursor-pointer hover:italic' href='#acomplishments'>Personal Acomplishments</a>
                        <a className='px-5 py-5 font-mono font-bold text-xl cursor-pointer hover:italic' href='#contact'>Contact</a>
                    </div>
                </div>
                <div className='p-5 flex flex-row bg-blue-400 items-center'>
                    <img
                        className='w-1/2 rounded-full hover:animate-spin hover:sepia duration-1000 ease-in-out hover:'
                        src='../profil.jpeg'
                        alt='avatar'
                    />
                    <div className='flex flex-col'>
                        <p className='px-5 font-mono font-bold text-5xl my-2'>Hey there!</p>
                        <p className='px-5 font-mono font-bold text-4xl my-2 '>This is my personnal website</p>
                        <p className='px-5 font-mono font-bold text-xl my-2 text-slate-500 hover:animate-bounce hover:italic hover:hover:text-red-700'>(With some hover effects because I love them...)</p>
                        <p className='px-5 font-mono font-bold text-4xl my-2'>Junior French Software Developer</p>
                        <p className='px-5 font-mono font-bold text-4xl my-2'>Currently searching my first job opportunity</p>
                        <p className='px-5 font-mono font-bold text-4xl my-2'>I speak:</p>
                        <p className='px-5 font-mono font-bold text-3xl my-2'>French</p>
                        <p className='px-5 font-mono font-bold text-3xl my-2'>Spanish</p>
                        <p className='px-5 font-mono font-bold text-3xl my-2'>English</p>
                        <p className='px-5 font-mono font-bold text-xl my-2 italic text-slate-500 hover:animate-bounce hover:italic hover:hover:text-red-700'>'Aliquando et insanire jucundum est'</p>
                        <div className='bg-white'>
                            <button type="submit" onclick="window.open('index.js')">Download!</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='bg-purple-400 py-5' id='about'>
                <TitlePart>About me</TitlePart>
                <p className='px-5 font-mono font-bold text-3xl'>Hello World, my name is Nicolas also known as <ImportantText>Ch'Mick</ImportantText>. I am 28 years old. I have just completed a 10-weeks coding bootcamp in <HomeLink href='https://www.lacapsule.academy/'>La Capsule</HomeLink>. During the bootcamp I built 10 applications, in 10 weeks, and which ended with an MVP Veazit & Play (here is <HomeLink href='https://github.com/kduperis/veazitFront'>Front-End repository</HomeLink> and here the <HomeLink href='https://github.com/kduperis/veazitBackend'>Back-End repository)</HomeLink> with 2 fellow students, in just 2 weeks  we presented <HomeLink>this</HomeLink> project for our final examination. Even if I am a junior, my motivation is at a <ImportantText>100%!</ImportantText></p>
            </div>

            <div className='bg-yellow-400 py-5' id='techno'>
                <TitlePart id='techno'>Technologies</TitlePart>
                <div className='flex flex-row justify-around'>
                    <div className='flex flex-col'>
                        <p className='hover:text-slate-400'>Front-End</p>
                        <TextPart>React Native</TextPart>
                        <TextPart>React</TextPart>
                        <TextPart>Redux</TextPart>
                        <TextPart>JavaScript</TextPart>
                        <TextPart>HTML</TextPart>
                        <TextPart>CSS</TextPart>
                    </div>
                    <div className='flex flex-col'>
                        <p className='hover:text-slate-400'>Back-End</p>
                        <TextPart>Node.JS</TextPart>
                        <TextPart>Express</TextPart>
                        <TextPart>API</TextPart>
                    </div>
                    <div className='flex flex-col'>
                        <p className='hover:text-slate-400'>Database</p>
                        <TextPart>MongoDB</TextPart>
                    </div>
                </div>
            </div>

            <div className='bg-green-400 py-5' id='acomplishments'>
                <TitlePart>Personal Acomplishments</TitlePart>
                <div className='flex flex-row justify-around'>
                    <div className='flex flex-col w-1/5 items-center'>
                        <p className='pb-2 hover:text-slate-600'>2014</p>
                        <div className='items-justify'>
                            <TextPart>Degree of Social Worker</TextPart>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/5 items-center'>
                        <p className='pb-2 hover:text-slate-600'>2017</p>
                        <div className='text-justify'>
                            <TextPart>Degree in modern languages (Spanish & English)</TextPart>
                            <p className='px-5 font-mono font-bold text-xl'>International exchange in Bogotà (Colombia) for one year</p>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/5 items-center'>
                        <p className='pb-2 hover:text-slate-600'>2019</p>
                        <div className='bg-red-400'>
                            <TextPart>Master Degree in international management</TextPart>
                        </div>
                        <p className='px-5 font-mono font-bold text-xl'>International exchanges in Glasgow (Scotland) for one semester</p>
                        <p className='px-5 font-mono font-bold text-xl'>International exchanges in Oaxaca (Mexico) for one semester</p>
                    </div>
                    <div className='flex flex-col w-1/5 items-center'>
                        <p className='pb-2 hover:text-slate-600'>2020</p>
                        <TextPart>Working Holidays Visa in Colombia</TextPart>
                    </div>
                    <div className='flex flex-col w-1/5 items-center'>
                        <p className='pb-2 hover:text-slate-600'>2022</p>
                        <TextPart>Professionnal Degree in web and mobile development application (RNCP 6 - Niveau Bac +3/ Bac +4)</TextPart>
                    </div>
                </div>
            </div>

            <div className='bg-orange-400 py-5' id='contact'>
                <TitlePart>Contact</TitlePart>
                <p className='px-5 font-mono font-bold text-3xl'>Do not hesitate to contact me <HomeLink href='mailto:nikola.debray@hotmail.fr'>here by mail!</HomeLink></p>
            </div>
            <div className='sticky'>
                <ArrowUp />
            </div>
        </div>
    );
}

export default Home;