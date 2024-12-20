import React from "react";
import UseContextData from "../../../Hooks/UseContextData";
import { Link } from "react-router-dom";

const Nav = () => {
  const { setToggleNav } = UseContextData();

  return (
    <div className="bg-[#0480CA] navbar  justify-between px-9 min-h-[90px]">
      <img
        onClick={() => setToggleNav((prev) => !prev)}
        className="w-[2rem] block xl:hidden active:scale-90 transition-all duration-150 ease-out"
        src="https://img.icons8.com/fluency/48/menu--v1.png"
        alt=""
      />
      <div className="flex-col hidden sm:flex">
        <a className="text-lg font-bold text-white sm:text-xl ">Hello, Admin</a>
        <small className="text-white">Willkommen zurück!</small>
      </div>
      <div className="flex-none">
        {/*  <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div> */}
        <div className="mx-5 w-[2.7rem] h-[2.7rem] rounded-full bg-white flex justify-center items-center">
          <img
            className="w-[1.6rem] hover:scale-110 transition-all duration-150 ease-linear active:scale-100"
            src="https://img.icons8.com/ios/50/appointment-reminders--v1.png"
            alt=""
          />
        </div>
        <div className=" dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="p-[2px] border-2 border-white rounded-full btn btn-ghost btn-circle avatar"
          >
            <div className="w-[5rem] rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0480CA] border-[3px] flex flex-col justify-between shadow-2xl text-lg border-white text-white rounded-box z-[1] mt-3 w-52 h-52 p-2 "
          >
            <div className="">
              <Link to={"/dashboard/profile"}>
                <li className="hover:bg-[]">Profile</li>
              </Link>
              <li className="hover:bg-[]">Settings</li>
              <li className="hover:bg-[]">Dashboard Settings</li>
            </div>
            <p className="font-semibold sm:hidden">Hello, Admin</p>
            <li className="w-full py-2 text-center border border-red-500 rounded-xl active:bg-slate-700 active:text-white">
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
