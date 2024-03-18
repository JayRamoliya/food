import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="overflow-x-hidden">
                <section className="relative">
                    <nav className="flex justify-between bg-gray-900 text-white w-full">
                        <div className="px-5 xl:px-12 py-6 flex items-center justify-center w-full text-center">
                            <Link to="/" className="text-3xl font-bold font-heading">Jay Ramoliya</Link>
                            <ul className="hidden md:flex px-4 font-semibold font-heading space-x-12">
                                <li>
                                    <Link to="/" className="hover:text-gray-200">Home</Link>
                                </li>
                                <li>
                                    <Link to="/login" className='hover:text-gray-200'>Login</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </section>
            </div>

        </>
    )
}

export default Header
