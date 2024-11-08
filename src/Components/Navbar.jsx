import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar backdrop-blur-3xl fixed z-50 container mx-auto pr-16 ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 gap-5 p-2 shadow">
                        <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>
                        <NavLink to="/coffee" className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`}>Coffee</NavLink>
                        <NavLink to="/dashboard" className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`}>Dashboard</NavLink>

                    </ul>
                </div>
                <NavLink to="/" className="btn btn-ghost text-xl">Coffee House</NavLink>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu gap-5 text-xl menu-horizontal px-1">
                    <NavLink to="/" className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`}>Home</NavLink>
                    <NavLink to="/coffee" className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`}>Coffee</NavLink>
                    <NavLink to="/dashboard" className={({ isActive }) => `${isActive ? 'text-warning' : 'hover:text-warning'}`}>Dashboard</NavLink>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;