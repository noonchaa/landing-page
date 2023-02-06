const Hero = () => {
    return (
        <header className="bg-white dark:bg-gray-900">
            <nav className="border-t-4 border-green-500">
                <div className="container flex items-center justify-between px-6 py-3 mx-auto">
                    <a href="#">
                        <h1 className="text-2xl sm:text-3xl text-green-500 font-semibold">Brand</h1>
                    </a>

                    <a className="my-1 text-sm font-medium text-gray-500 rtl:-scale-x-100 dark:text-gray-200 hover:text-green-500 dark:hover:text-green-400 lg:mx-4 lg:my-0" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                        </svg>
                    </a>
                </div>
            </nav>

            <div className="container px-6 py-16 mx-auto">
                <div className="items-center lg:flex">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:max-w-lg">
                            <h1 className="text-3xl font-semibold text-gray-800 dark:text-white lg:text-4xl">Subscribe To The <span className="text-green-500">Newsletter</span></h1>

                            <p className="mt-3 text-gray-600 dark:text-gray-400">be the first to knows when our <span className="font-medium text-green-500">Brand</span> is live</p>

                            <div className="flex flex-col mt-6 space-y-3 lg:space-y-0 lg:flex-row">
                                <input id="email" type="text" className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-green-400 dark:focus:border-green-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-green-300" placeholder="Email Address" />

                                <button className="w-full px-5 py-2 text-sm tracking-wider text-white uppercase transition-colors duration-300 transform bg-green-600 rounded-lg lg:w-auto lg:mx-4 hover:bg-green-500 focus:outline-none focus:bg-green-500">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">
                        <img className="w-full h-full max-w-md" src="tshirt.png" alt="tshirt" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Hero;