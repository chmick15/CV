import React from "react";
import Hero from "../components/home/hero/Hero";
import Contact from "../components/home/contact/Contact";
import Techno from "../components/home/techno/Techno";
import Accomplishments from "../components/home/accomplishments/Accomplishments";
import About from "../components/home/about/About";
import Summary from "../components/home/summary/Summary";

const Home = () => {
    return (
        <div className="grid grid-cols-6 col-auto">
            {/* <div className="grid col-span-6">
                <Summary />
            </div> */}
            <div className="grid col-span-6 bg-blue-400 justify-self-center mx-5 my-2 rounded-lg">
                <Hero />
            </div>
            <div className="grid col-span-6 bg-purple-400 my-2 mx-5 rounded-lg md:col-span-3 lg:col-span-2">
                <About />
            </div>
            <div className="grid col-span-6 bg-yellow-400 my-2 mx-5 rounded-lg md:col-span-3 lg:col-span-2">
                <Techno />
            </div>
            <div className="grid col-span-6 bg-green-400 my-2 mx-5 rounded-lg md:col-span-3 lg:col-span-2">
                <Accomplishments />
            </div>
            <div className="grid col-span-6 bg-orange-400 my-2 mx-5 rounded-lg md:col-span-3">
                <Contact />
            </div>
        </div>
    )
};

export default Home;