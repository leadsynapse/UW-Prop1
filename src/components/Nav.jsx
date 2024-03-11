import React from "react";
import Logo from "../assets/logo.png";
import Chrome from "../assets/chrome.png";

function Nav() {
  return (
    <div className="px-28 py-12">
      <nav className="flex justify-between items-center">
        {/* Logo */}
        <div>
          <a href="">
            <img src={Logo} alt="logo" className="w-36" />
          </a>
        </div>

        {/* Middle bar */}
        <ul className="flex gap-3">
          <li className="px-3 py-1">
            <a className="font-sans text-base font-normal" href="">
              Home
            </a>
          </li>
          <li className="px-3 py-1">
            <a className="font-sans text-base font-normal" href="">
              Features
            </a>
          </li>
          <li className="px-3 py-1">
            <a className="font-sans text-base font-normal" href="">
              About
            </a>
          </li>
          <li className="px-3 py-1">
            <a className="font-sans text-base font-normal" href="">
              Help Center & Community
            </a>
          </li>
        </ul>

        {/* Login and CFA */}
        <ul className="flex items-center">
          <li className="px-3 py-1">
            <a className="font-sans text-base font-normal" href="">
              Login
            </a>
          </li>
          <li className="bg-black rounded-lg">
            <a className="px-4 py-2 font-mulish flex gap-3 text-sm font-bold items-center text-white" href="">
              <img src={Chrome} alt="logo" className="w-3.5" />
              Install Wizardshot
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
