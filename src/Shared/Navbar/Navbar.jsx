import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {




    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        } >Home</NavLink></li>

        <li><NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        }>About</NavLink></li>

        <li><NavLink to='/blog' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        }>Blog</NavLink></li>

        <li><NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "underline" : ""
        }>Contact</NavLink></li>

    </>

    return (
        <div className="navbar lg:w-[1200px] mx-auto ">
            <div className="navbar-start">
                <div className="dropdown text-white">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content text-black mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <a className="btn btn-ghost normal-case text-white text-[16px] md:text-xl"><img src={logo} alt="" />Universe</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu-horizontal px-1 gap-5 font-semibold text-white">
                    {navLinks}
                </ul>
            </div>

           


            <div className="navbar-end">

                <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Sign Up</Link>

                {/* {
                    user ? <>

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="profile" src={user.photoURL} />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        {user.displayName}
                                        <span className="badge">New</span>
                                    </a>

                                </li>
                                <li><Link to='dashboard/myProfile'>Dashboard</Link></li>
                                <li><a onClick={handleLogOut} >Logout</a></li>
                            </ul>
                        </div>

                 
                    </>
                        :
                        <Link to='/login' className="px-10 py-2 rounded bg-gradient-to-r from-[#4A00E0] to-blue-500 text-white lg:text-lg font-semibold">Join Us</Link>
                } */}
            </div>
        </div>
    );
};

export default Navbar;