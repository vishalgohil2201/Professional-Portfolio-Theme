// Icons
import { FaHome, FaUser, FaPencilAlt, FaAddressBook } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoBriefcase } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Header = () => {

    const location = useLocation();
    // console.log
    return (
        <>
            <header className="d-none d-lg-block" id='myDIV'>
        {/* {location} */}
                <Link to='/' className={`d-flex align-items-center ${location.pathname==='/' ? 'active' : ''}`}><FaHome /> <span>HOME</span></Link>
                <Link to='about' className={`d-flex align-items-center ${location.pathname==='/about' ? 'active' : ''}`}><FaUser /> <span>ABOUT</span></Link>
                <Link to='services' className={`d-flex align-items-center ${location.pathname==='/services' ? 'active' : ''}`}><IoIosRocket /> <span>SERVICES</span></Link>
                <Link to='portfolio' className={`d-flex align-items-center ${location.pathname==='/portfolio' ? 'active' : ''}`}><IoBriefcase /> <span>PORTFOLIO</span></Link>
                <Link to="blog" className={`d-flex align-items-center ${location.pathname==='/blog' ? 'active' : ''}`}><FaPencilAlt /> <span>BLOG</span></Link>
                <Link to="contact" className={`d-flex align-items-center ${location.pathname==='/contact' ? 'active' : ''}`}><FaAddressBook /> <span>CONTACT</span></Link>
            </header>
        </>
    )
}

export default Header;