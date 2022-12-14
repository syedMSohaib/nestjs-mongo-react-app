import React from 'react'

export default function Header() {
  return (
    <nav className="bg-white px-6 py-4 shadow">
      <div className="flex flex-col container mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex justify-between items-center">
          <div>
            <a href="#" className="text-gray-800 text-xl font-bold md:text-2xl">
              Livello <span className="text-blue-500">Test</span>
            </a>
          </div>
          <div>
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-600 focus:text-gray-600 focus:outline-none md:hidden"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:-mx-4 hidden md:block">
          <a
            href="https://github.com/syedMSohaib"
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >
            @Github
          </a>
          <a
            href="https://www.linkedin.com/in/syedmsohaib/"
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >
            @LinkedIn
          </a>
          <a
            href="#"
            className="my-1 text-gray-800 hover:text-blue-500 md:mx-4 md:my-0"
          >
            +92 336 128 4096
          </a>
        </div>
      </div>
    </nav>
  )
}
