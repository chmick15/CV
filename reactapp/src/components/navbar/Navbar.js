import React from 'react';
import { Menu } from '@headlessui/react'
import clsx from 'clsx'

const NavLink = ({ children, target = '_blank', ...rest }) => {
    return (
        <a {...rest} target={target} className='px-5 text-blue-700 underline font-sans font-semibold hover:italic hover:text-red-700 hover:overline cursor-pointer'>{children}</a>
    )
}

const Heart = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className="text-slate-400 h-5 w-5 hover:text-red-700 hover:scale-150" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
        </svg>
    )
}

const Navbar = () => {
    return (
        <nav className='flex flex-row py-4 px-10 bg-gray-800 sticky top-0'>
            <div>
                <a href='/' className='font-mono font-bold text-2xl text-yellow-200 hover:underline hover:italic'>Ch'Mick</a>
                <NavLink href='https://www.linkedin.com/in/nicolas-debray/'>My LinkedIn</NavLink>
                <NavLink href='https://github.com/chmick15'>My GitHub</NavLink>
                <Menu as="div" className='relative inline-block px-5 text-blue-700 underline font-sans font-semibold cursor-pointer'>
                    <Menu.Button as='NavLink' className='hover:italic hover:text-red-700 hover:overline'>
                        {({ active }) => (
                            <a
                                className={clsx(active && 'hover:text-red-700 hover:italic')}
                            >
                                Some Projects
                            </a>
                        )}
                    </Menu.Button>
                    <Menu.Items className='flex flex-col space-y-2 absolute right-100 w-56 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={clsx(active && 'hover:text-red-700 hover:italic')}
                                    href="/movies"
                                >
                                    Movies
                                </a>
                            )}
                        </Menu.Item>
                        <Menu.Item>
                            {({ active }) => (
                                <a
                                    className={clsx(active && 'hover:text-red-700 hover:italic')}
                                    href="/connection"
                                >
                                    Sign-in/Sign-up
                                </a>
                            )}
                        </Menu.Item>
                    </Menu.Items>
                </Menu>
            </div>
            <div className='flex flex-row items-center'>
                <p className='text-slate-400 font-sans italic mx-2'>Made with React & </p>
                <Heart />
            </div>
        </nav>
    );
}
export default Navbar;