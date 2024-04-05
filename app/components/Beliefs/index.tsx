
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">WHO WE ARE</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Financial <span className="text-grey">Independence for all</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">World Financial Group offers a leading financial services platform and experience to help pursue your financial goals. No matter your life story, our tailored approach to planning for retirement will meet you where you are and address your specific goals... And for entrepreneurial-minded individuals...</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Get Started</button>
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-blue tracking-widest mb-5 text-center sm:text-start">OUR GOAL</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-blue">Offer</span> affordable insurane.</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">We take pride in making insurance affordable and readily assessible irrespective of your budget Quis ipsum suspendisse ultrices gravida risus commodo viverra maecenas accumsan lacus vel facilisis. We help make the dream of financial independence possible for all those in our communities across North America.</h5>
                    <div className="text-center sm:text-start">
                        <button className="text-xl py-5 px-14 mt-5 font-semibold text-white rounded-full bg-blue border border-blue hover:bg-hoblue">Learn more</button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
