import React from "react";
import './index.css'
function Header() {
  return (
    <>
      <header className="header ">
        <div className="flex flex-wrap justify-between conainer w-5/6 mx-auto">
          <div className="logo py-6">
            <h1 className="text-white ">
              Alifreza
            <span className="text-4xl text-[#079211]">.</span>
            </h1>
          </div>
          <nav className="text-white flex flex-wrap items-center  justify-between gap-14">
            <ul className="flex flex-wrap justify-around gap-8">
              <li className="list-none">
                <a className="transition-all duration-400" href="#">Home</a>
              </li>
              <li className="list-none">
                <a className="transition-all duration-400"  href="#">Servicies</a>
              </li>
              <li className="list-none">
                <a className="transition-all duration-400" href="#">Work</a>
              </li>
              <li className="list-none">
                <a  className="transition-all duration-400" href="#">About us</a>
              </li>
              <li className="list-none">
                <a className="transition-all duration-400" href="#">Blog</a>
              </li>
            </ul>
            <span className="contact px-3 py-1.5">
              <h3 className="text-white">Contact</h3>
            </span>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
