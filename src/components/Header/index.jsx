import React from "react";
import './index.css'
function Header() {
  return (
    <>
      <header className="header ">
        <div className="flex justify-between conainer w-5/6 mx-auto">
          <div className="logo pt-8">
            <h1 className="text-white ">
              Alifreza
            </h1>
            <span className="text-3xl">.</span>
          </div>
          <nav className="text-white flex items-center  justify-between gap-14">
            <ul className="flex justify-around gap-8">
              <li className="list-none">
                <a href="#">Home</a>
              </li>
              <li className="list-none">
                <a href="#">Servicies</a>
              </li>
              <li className="list-none">
                <a href="#">Work</a>
              </li>
              <li className="list-none">
                <a href="#">About us</a>
              </li>
              <li className="list-none">
                <a href="#">Blog</a>
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
