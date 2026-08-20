import React from "react";
import { FaArrowRight } from "react-icons/fa";
import heroImg from "../../assets/woman1.png";
export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white px-6">
      <div className="absolute -top-24 -right-24 w-96 rounded-full bg-orange-50/50 blur-3xl" />
      <div className="absolute top-1/2 -left-24 h-72 w-72 rounded-full bg-blue-50/50 blur-3xl" />

      <div className="mx-auto max-w-7xl">
        {/* main content her */}
        <div className="flex flex-col items-center justify-between gap-12 py-12 lg:flex-row lg:py-20">
          {/* left side */}
          <div className="relative z-10 max-w-2xl text-center lg:text-left -mt-26">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1 text-sm font-bold uppercase tracking-widest text-orange-600">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-orange-500"></span>
              </span>
              New Season arrival
            </div>

            <h1 className="text-5xl font-black leading-[1.1] text-gray-900 md:text-7xl">
              Elevate Your <br />
              <span className="relative inline-block">
                Everyday
                <svg className='absolute -bottom-37 left-0 w-full viewBox="0 0 358" fill="none" xmlns="http://www.w3.org/2000/svg"'>
                  <path
                    d="M3 9C118.957 4.47226 238.497 2.49761 354.487 0"
                    stroke="#f97316"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />
                </svg>
                Style
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
              accusantium reiciendis recusandae sapiente possimus tempora fugit
              sequi accusamus aspernatur inventore?
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <button className="group flex items-center cursor-pointer justify-center gap-3 rounded-full bg-black px-8 py-4 text-sm font-bold tracking-widest text-white transition-all hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-600">
                Shop Collections
                <FaArrowRight className="text-xl transition-transform group-hover:translate-x-1" />
              </button>
              <button className="rounded-full border px-8 py-4 text-sm font-bold uppercase tracking-widest text-gray-900 transition-colors hover:bg-gray-50">
                View Lookbook
              </button>
            </div>
          </div>

          {/* right side */}
          <div className="relative z-10">
            <div className="relative">
              <div className="absolute inset-0 -m-6 animate-pulse rounded-[40%_60%_70%_30%_40%_50%_60%_50%] bg-linear-to-r from-orange-100  to bg-orange-50" />
              <img
                className="relative z-10 w-87.5 transition-transform duration-700 hover:scale-105 lg:w-125"
                src={heroImg}
                alt=""
              />
              <div className="absolute -bottom-6 -left-6 z-20 hidden rounded-2xl bg-white/90 p-4 shadow-xl backdrop-blur-md sm:black">
                <p className="text-sm font-black uppercase tracking-tighter text-gray-400">
                  Happy clients
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xl font-black text-gray-900">48+</span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-6 w-6 rounded-full border-2 border-white bg-gray-200" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom content here */}
      </div>
    </div>
  );
}
