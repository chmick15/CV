import React from 'react';
import ReactPlayer from 'react-player'

function Mvp() {
    return (
        <div>
            <div className='text-center font-bold p-2 sm:text-xl md:text-2xl lg:text-4xl'>
                <p>This is the MVP of the application I worked on at the end of the 10 weeks Bootcamp at <a href='https://www.lacapsule.academy/' target={'_blank'} className="text-green-800 underline italic sm:text-slate-800 md:text-red-800 lg:text-purple-800 hover:opacity-80">La Capsule</a></p>
            </div>
            <div className='flex justify-center'>
            <ReactPlayer 
            url='https://res.cloudinary.com/dualrskkc/video/upload/v1650896311/CV/CVeazitMVP_t6yp1d.mp4'
            controls
            width='70%'
            height='100%'
            />
            </div>
            <div className='text-justify font-semibold p-2 sm:text-lg md:text-xl'>
                <p>To develop the application we used React Native, Redux, NodeJS, Express, MongoDB, Google API, GitHub</p>
            </div>
            <div className='text-center p-5 sm:text-lg md:text-xl'>
                <p> <a href='https://github.com/kduperis/veazitFront' target={'_blank'} className="text-green-800 sm:text-slate-800 md:sm:text-red-800 lg:text-purple-800 underline hover:opacity-80">➡️&thinsp;&thinsp;&thinsp;Click here to find the Front-End repository&thinsp;&thinsp;&thinsp;⬅️</a></p>
                <p> <a href='https://github.com/kduperis/veazitBackend' target={'_blank'} className="text-green-800 sm:text-slate-800 md:text-red-800 lg:text-purple-800 underline hover:opacity-80">➡️&thinsp;&thinsp;&thinsp;Click here to find the Back-End repository&thinsp;&thinsp;&thinsp;⬅️</a></p>
            </div>
            <div className='text-center italic text-sm sm:text-base md:text-lg'>
                <p>For a better experience please watch the video on a computer.</p>
            </div>
        </div>
    )
}

export default Mvp;