import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import{FaBarsStaggered, FaXmark} from "react-icons/fa6"

const NavBar = ({showDashboard}) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleMenuToggler = () => {
    setIsMenuOpen(!isMenuOpen);
    };

    const navItem = [
        {path: "/", title:"Start Search"},
        /*{path: "/dash-board", title:"dashboard"}*/
        ...(!showDashboard ? [{ path: "/dash-board", title: "Dashboard" }] : [])
    ]
return (
    <header className='max-w-screen-2xl container mx-auto xl:px-24 px-4'>
        <nav className='flex justify-between item-center py-6'>
            <a href='/' className='flex item-center gap-2 text-2x1 text-black'><svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none"> 
            <circle cx="12.0143" cy="12.5143" r="12.0143" fill="#3575E2" fillOpacity="0.4"/>
            <circle cx="16.9857" cy="17.4857" r="12.0143" fill="#3575E2"/> </svg>
            <span className='text-2xl '>Vulnera Scan</span></a>
            {/*nav item for large device */}
            <ul className='hidden md:flex gap-12'>
                {
                    navItem.map(({path,title}) =>(
                        <li key={path} className='text-base text-primary'>
                            <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? "active": ""}
                >
                    {title}
                    </NavLink>
                        </li>
                    )
                
                    )
                }
            </ul>
        {/*sign up and log in button*/}
        <div className="text-base text-primary font-medium space-x-5 hidden lg:block">
            <Link to="/Login" className='py-2 px-5 border rounded bg-indigo-600 text-white' style={{borderRadius: "50px"}}>Log in</Link>
            <Link to="/Sign-up" className='py-2 px-5 border rounded bg-indigo-600 text-white' style={{borderRadius: "50px"}}>Sign up</Link>
        </div>
        {/*mobile view */}
        <div className="md:hidden block">
            <button onClick={handleMenuToggler}>
                {
                    isMenuOpen ? <FaXmark className='w-5 h-5 text-primary'/> : <FaBarsStaggered className='w-5 h-5 text-primary'/>
                }
            </button>
        </div>
        </nav>

    {/*nav item for mobile */}
    <div className={`px-4 bg-black py-5 rounded-sm ${isMenuOpen ? "":"hidden"}`}>
    <ul>
                {
                    navItem.map(({path,title}) =>(
                        <li key={path} className='text-base text-white first:text-white py-1'>
                            <NavLink
                    to={path}
                    className={({ isActive }) => isActive ? "active": ""}
                >
                    {title}
                    </NavLink>
                        </li>
                    )
                
                    )
                }
                <li className='text-white py-1'><Link to="/Login">Log in</Link></li>
                <li className='text-white py-1'><Link to="/Signup">Sign up</Link></li>
            </ul>
    </div>
    </header>
);
}


export default NavBar

