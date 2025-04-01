import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="flex h-25 justify-between w-full bg-white items-center top-0 fixed z-60 shadow-xl">
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-logofro to-logoto text-6xl ml-10 font-black hover:cursor-pointer">
        VaxUp
      </p>
      <div className="flex space-x-14 mr-16">
        <a href="#FAQ" className="text-xl font-semibold text-navb mt-2 transition-all duration-200 hover:scale-110 no-underline">
          FAQ
        </a>
        <a href="#" className="text-xl font-semibold text-navb mt-2 transition-all duration-200 hover:scale-110 no-underline">
          Dashboard
        </a>
        <Link to="/login">
          <button className="rounded-xl w-[117px] h-[45px] text-2xl text-log font-semibold border-log border-[1px] text-center transition-all duration-500 hover:bg-log hover:text-white hover:cursor-pointer bg-white">
            Log in
          </button>
        </Link>
      </div>
    </nav>
  );
}
