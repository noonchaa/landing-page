const Detail = ({image,text,span,right}) => {
    return (
        <section className="bg-gray-100 dark:bg-gray-800 lg:py-12 lg:flex lg:justify-center">
            <div
                className={`overflow-hidden bg-white dark:bg-gray-900 lg:mx-8 lg:flex ${right && 'lg:flex-row-reverse'} lg:max-w-6xl lg:w-full lg:shadow-md lg:rounded-xl`}>
                <div className="lg:w-1/2 overflow-hidden">
                    <div className="h-64 bg-cover bg-center lg:h-full hover:scale-125" style={{backgroundImage:`url(${image}.png)`}}></div>
                </div>

                <div className="max-w-xl px-6 py-12 lg:max-w-5xl lg:w-1/2">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">
                        {text}<span className="text-green-500">{span}</span>
                    </h2>

                    <p className="mt-4 text-gray-500 dark:text-gray-300">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Quidem modi reprehenderit vitae exercitationem aliquid dolores ullam temporibus enim expedita aperiam
                        mollitia iure consectetur dicta tenetur, porro consequuntur saepe accusantium consequatur.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Detail;