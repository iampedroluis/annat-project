import ANNAT_logo_white from "../img/ANNAT_logo_white.png";
import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export const Navbar = () => {
  const [buttonActive, setButtonActive] = useState("");

  const handleToggleButton = () => {
    if (buttonActive === "") {
      setButtonActive("activo");
    } else {
      setButtonActive("");
    }
  };

  return (
    <>
      <header className="text-gray-600 body-font bg-zinc-950 fixed top-0 w-full z-50">
        <div className="container mx-auto flex flex-wrap p-1  items-center justify-center relative">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center p-2">
            <img src={ANNAT_logo_white} alt="" className="h-7 flex" />
          </nav>
          <div className="justify-self-end w-10 sm:justify-end right-10 absolute">
            <button
              className={`${buttonActive} w-10`}
              onClick={handleToggleButton}
            >
              <span className="bars l1"></span>
              <span className="bars l2"></span>
              <span className="bars l3"></span>
            </button>
          </div>
        </div>
      </header>
      {buttonActive && (
        <section
          className={`bg-[#D9D9D9] ${
            buttonActive ? "slide-in" : "slide-out"
          } fixed top-[52px] sm:top[10px] w-72 h-100  right-0 md:bottom-0  w-1/2 flex flex-col justify-center z-50 `}
        >
          <ul className="flex flex-col text-center mt-6  ">
            <li className="my-4 mt-5">About us</li>
            <hr className="w-32 my-0 " />

            <li className="my-4 mt-5">
              {" "}
              <NavLink to="/newin"> New In </NavLink>
            </li>

            <li className="my-4">Products</li>
            <li className="my-4">Fragances</li>
            <li className="my-4 mb-4">Home & Deco</li>
            <hr className="w-32 my-0" />
            <li className="my-5">Sale</li>
            <hr className="w-32 mt-2" />
            <li className="my-4">Stores</li>
          </ul>
          <p className="flex justify-center align-bottom mt-10">Annat</p>
        </section>
      )}
    </>
  );
};
