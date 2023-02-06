const Contact = () => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container grid grid-cols-1 gap-10 px-6 py-12 mx-auto lg:grid-cols-3">
                <div>
                    <p className="font-medium text-green-500 dark:text-green-400">Our locations</p>

                    <h1 className="mt-2 text-2xl font-semibold text-gray-800 md:text-3xl dark:text-white">Visit our stores</h1>

                    <p className="mt-3 text-gray-500 dark:text-gray-400">Find us at these locations.</p>
                </div>

                <div className="grid grid-cols-1 gap-12 lg:col-span-2 sm:grid-cols-2">
                    <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">Melbourne</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br/> Melbourne VIC 3000 AU</p>
                    </div>

                    <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">London</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">100 Oxford Street <br/> London W1D 1LL UK</p>
                    </div>

                    <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">Sydney</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br/> Melbourne VIC 3000 AU</p>
                    </div>

                    <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">San Francisco</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br/> Melbourne VIC 3000 AU</p>
                    </div>

                    <div>
                        <h2 className="font-medium text-gray-800 dark:text-white">Byron Bay</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br/> Melbourne VIC 3000 AU</p>
                    </div>

                    <div>
                        <h2 className="font-medium text-gray-700 dark:text-gray-200">Sweden</h2>
                        <p className="mt-2 text-gray-500 dark:text-gray-400">100 Flinders Street <br/> Melbourne VIC 3000 AU</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;