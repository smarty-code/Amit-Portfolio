import "../index.css";
import logo from "../assets/logo.svg";

function Navbar() {
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-white">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a className="flex items-center space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt=" Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-black">
              Portfolio
            </span>
          </a>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button
              type="button"
              className=" hover:bg-slate-600 text-white bg-black  hover:bg-black-500 focus:ring-4 focus:outline-none  font-medium rounded text-sm px-4 py-2 text-center dark:bg-black  "
            >
              Resume
            </button>
            <button
              data-collapse-toggle="navbar-cta"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
              aria-controls="navbar-cta"
              aria-expanded="false"
              onClick={() => {
                const navbar = document.getElementById("navbar-cta");
                navbar.classList.toggle("hidden");
                navbar.classList.toggle("block");
              }}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-cta"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-white md:dark:bg-white dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-black md:dark:text-black"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-black md:dark:text-black"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-black md:dark:text-black"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 md:p-0 text-black  rounded md:bg-transparent md:text-black md:dark:text-black"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
