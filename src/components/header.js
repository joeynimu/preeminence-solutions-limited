import React, { useState } from "react"
import useScroll from "../hooks/useScroll"
import useWindow from "../hooks/useWindow"
import "./hamburger.css"
import Logo from "../images/logo.svg"

const Header = ({ siteTitle }) => {
  const [isOpen, openMenu] = useState(false)
  const { scrollY } = useScroll()
  const { width } = useWindow()
  const isMobile = width <= 540
  const isFixed = scrollY > 100
  return (
    <header
      className={`w-full z-20 transition-transform bg-white shadow-md ${
        isFixed ? `fixed` : ""
      }`}
    >
      {!isMobile && !isFixed && (
        <div className="max-w-screen-xl mx-auto flex text-gray-400 px-4 py-2 md:py-2 lg:py-2 items-center justify-center">
          <img src={Logo} alt="Logo" className="h-16 w-auto" />
        </div>
      )}
      <div className="max-w-screen-xl mx-auto flex text-white px-4 py-4 md:py-3 lg:py-4 items-center justify-between">
        <div className="text-white">
          <img
            className="h-8 w-auto sm:h-10"
            src="https://tailwindui.com/img/logos/workflow-mark-on-white.svg"
            alt={siteTitle}
          />
        </div>
        <nav className="hidden md:block">
          <ul className="flex  text-gray-900 font-semibold">
            <li className="pr-8 hover:text-gold">
              <a href="#company">Company</a>
            </li>
            <li className="pr-8 hover:text-gold">
              <a href="#products-and-services">Products & Service</a>
            </li>
            <li className="pr-8 hover:text-gold">
              <a href="#clients">Clients</a>
            </li>
            <li className="hover:text-gold">
              <a href="#contacts">Contacts</a>
            </li>
          </ul>
        </nav>
        <div className="block sm:hidden">
          <button
            className={`hamburger hamburger--collapse ${isOpen && "is-active"}`}
            type="button"
            onClick={() => openMenu(!isOpen)}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner bg-gold-700"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  )
}
export default Header
