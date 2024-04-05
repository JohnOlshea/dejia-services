import Image from "next/image";

const Banner = () => {
    return (
        <div className='mx-auto max-w-7xl mt-[8rem] px-6 lg:px-8'>
            <div className='grid grid-cols-1 lg:grid-cols-2'>

                {/* COLUMN-1 */}

                <div className="mx-auto sm:mx-0">
                    <div className='py-3 text-center lg:text-start'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-sm md:text-lg font-bold px-6 py-1 rounded-3xl transition-all duration-300 ease-in-out tracking-wider hover:text-white hover:bg-black'>
                            BOOK A COVERAGE IN MINUTES
                        </button>
                    </div>
                    <div className="py-3 text-center lg:text-start">
                        <h1 className='text-6xl lg:text-80xl font-bold text-darkpurple'>
                            Get reliable insurance, that works
                        </h1>
                    </div>
                    <p className="font-medium text-lightblack text-2xl mt-5 text-center lg:text-start">
                        World-class insurance tailored to your specific needs at a low cost with no hidden charges
                    </p>
                    <div className='my-7 text-center lg:text-start'>
                        <button className='text-sm md:text-xl font-semibold hover:shadow-xl bg-blue text-white py-3 px-6 md:py-5 md:px-14 transition-all duration-300 ease-in-out rounded-full hover:bg-hoblue'>
                            Get Started
                        </button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className='hidden lg:block'>
                    <Image src="/images/banner/banner.png" alt="hero-image" width={700} height={542} />
                </div>

            </div>
        </div>
    )
}

export default Banner;
