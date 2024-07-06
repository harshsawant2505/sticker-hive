import Link from "next/link";
import Navbar from "./components/Navbar";
import NewFooter from "./components/NewFooter";

export default function Custom404() {
    return <div className="bg-gray-900">
      <Navbar/>
      <div className="w-full h-screen flex justify-center items-center text-white">
    <main className="h-screen w-full flex flex-col justify-center items-center bg-gradient-to-r from-black to-gray-900">
    <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
    <div className="bg-[#7F00FF] px-2 text-sm rounded rotate-12 absolute">
      Page Not Found
    </div>
    <button className="mt-5">
        <div
          className="relative inline-block text-sm font-medium text-[#7F00FF] group active:text-orange-500 focus:outline-none focus:ring"
        >
          <span
            className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#7F00FF] group-hover:translate-y-0 group-hover:translate-x-0"
          ></span>

          <span className="relative block px-8 py-3 bg-[#1A2238] border border-current">
            <Link href={"/"}>Go Home</Link>
          </span>
        </div>
      </button>
  </main>
  </div>
  <NewFooter/>
  </div>
  }