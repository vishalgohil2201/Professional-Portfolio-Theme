import React, { useState } from "react";
import { LiaBarsSolid } from "react-icons/lia";
import { IoClose } from "react-icons/io5";
import { FaHome, FaUser, FaPencilAlt, FaAddressBook } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import { IoBriefcase } from "react-icons/io5";
import { Link } from "react-router-dom";

const MobileHeader = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [activeButton, setActiveButton] = useState("btn1");

  const toggleMenu = () => setMenuVisible(!menuVisible);
  const handleMenuClick = (buttonId) => {
    setActiveButton(buttonId);
    setMenuVisible(false);
  };

  return (
    <>
      {/* Mobile Header */}
      <section className={`mobile-header ${menuVisible ? "visible" : ""}`} id="mobile-header">
        <button className="close-btn" onClick={toggleMenu}>
          CLOSE <IoClose />
        </button>

        <div className="main-menu-box">
          <ul className="main-menuM">
            {[
              { id: "btn1", to: "/", icon: <FaHome />, label: "HOME" },
              { id: "btn2", to: "/about", icon: <FaUser />, label: "ABOUT" },
              { id: "btn3", to: "/services", icon: <IoIosRocket />, label: "SERVICES" },
              { id: "btn4", to: "/portfolio", icon: <IoBriefcase />, label: "PORTFOLIO" },
              { id: "btn5", to: "/blog", icon: <FaPencilAlt />, label: "BLOG" },
              { id: "btn6", to: "/contact", icon: <FaAddressBook />, label: "CONTACT" },
            ].map(({ id, to, icon, label }) => (
              <li key={id}>
                <Link
                  to={to}
                  onClick={() => handleMenuClick(id)}
                  className={activeButton === id ? "active" : ""}
                  id={id}
                >
                  {icon} {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile Menu Button */}
      <div className="mobile-menu-btn d-lg-none">
        <button onClick={toggleMenu}>
          <LiaBarsSolid />
        </button>
      </div>

      {/* Styles */}
      <style>
        {`
        .mobile-header {
          transform: translateX(-100%);
          transition: transform 0.3s ease;
        }
        .mobile-header.visible {
          transform: translateX(0);
        }
        .main-menuM .active {
          background-color: #64bd00;
        }
      `}
      </style>
    </>
  );
};

export default MobileHeader;
