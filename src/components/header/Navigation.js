import React, {useState, Fragment} from "react";
import {Link} from "react-router-dom";

function Navigation(props) {
    const [isMenuActive, setIsMenuActive] = useState(false);
    function toggleMenuDisplay(event) {
        event.preventDefault();
        setIsMenuActive(!isMenuActive)
    }
    return (
        <Fragment>
            <nav className="flex flex-wrap items-center justify-between w-full py-4 md:py-0 px-4 text-lg text-gray-700 bg-white">
                <div>
                    <Link to="/">Logo</Link>
                </div>
                    <button className="flex md:hidden" id="menu-icon" onClick={toggleMenuDisplay}>
                        <div className="space-y-2">
                            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse" />
                            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse" />
                            <span className="block w-8 h-0.5 bg-gray-600 animate-pulse" />
                        </div>
                    </button>

                <div className={`${isMenuActive ? '' : 'hidden'} w-full md:flex md:items-center md:w-auto`} id="menu">
                    <ul className="pt-4 text-base text-gray-700 md:flex md:justify-between md:pt-0">
                        <li>
                            <Link to='#' className="md:p-4 py-2 block hover:text-purple-400">Features</Link>
                        </li>
                        <li>
                            <Link to='#' className="md:p-4 py-2 block hover:text-purple-400">Pricing</Link>
                        </li>
                        <li>
                            <Link to='#' className="md:p-4 py-2 block hover:text-purple-400">Customers</Link>
                        </li>
                        <li>
                            <Link to='#' className="md:p-4 py-2 block hover:text-purple-400">Users</Link>
                        </li>
                        <li>
                            <Link to='#' className="md:p-4 py-2 block hover:text-purple-400 text-purple-500">
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </Fragment>
    );
}

export default Navigation;