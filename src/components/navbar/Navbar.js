import React from "react";

const NavLink = ({ children, target = '_blank', ...rest }) => {
    return (
        <a {...rest} target={target} className='cursor-pointer text-l md:text-xl text-neutral-200 sm:text-neutral-400 hover:italic hover:text-neutral-200'>{children}</a>
    )
}

const Navbar = () => {
    return (
        <nav className="bg-green-800 sm:bg-slate-800 md:bg-red-800 lg:bg-purple-800 sticky-top-0 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 justify-items-center lg:place-items-start py-2">
            <div className="grid grid-cols-1 md:col-span-3 md:grid-cols-4 md:gap-5 md:place-self-start place-items-center mx-5">
                <a href='/' className='text-xl md:text-2xl text-yellow-300 hover:italic hover:font-bold'>
                    Ch'Mick
                </a>
                <NavLink href='https://www.linkedin.com/in/nicolas-debray/'>
                    My LinkedIn
                </NavLink>
                <NavLink href='https://github.com/chmick15'>
                    My GitHub
                </NavLink>
                <a href='/projects' className='cursor-pointer text-l md:text-xl text-neutral-200 sm:text-neutral-400 hover:italic hover:text-neutral-200'>
                    Projects
                </a>
            </div>
            <div className="grid-cols-1 sm:place-self-center">
                <p className="text-m md:text-l text-neutral-400">Made with React & ❤️</p>
            </div>
        </nav>
    )
};

export default Navbar;