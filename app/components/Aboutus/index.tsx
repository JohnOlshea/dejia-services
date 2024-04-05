import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Insurance Protection",
        imgSrc: "/images/aboutus/imgOne.svg",
        paragraph: "The most important part of preparing for the future is protecting it. As a WFGIA insurance agent, I can help you prepare for uncertainty. Whether you outlive your retirement, pass away unexpectedly or become disabled, there are products that can help protect the life you've built for you and your loved ones.",
        link: 'Learn more'
    },
    {
        heading: "Retirement Strategies",
        imgSrc: "/images/aboutus/imgTwo.svg",
        paragraph: "The key to a successful retirement is one that doesn't require you to compromise your lifestyle or wonder if and when your nest egg will run out. As a WFGIA Insurance Agent, I can provide a variety of options to help you prepare for your leisure years without having to sacrifice your quality of life.",
        link: 'Learn more'
    },
    {
        heading: "Business Strategies",
        imgSrc: "/images/aboutus/imgThree.svg",
        paragraph: "Small business owners need financial and insurance options for themselves and their employees, and they need to ensure the future safety of their businesses. I can help structure strategies for employees and owners to help ensure if- or when- something happens, those who own and run the business are protected.",
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 my-32 lg:px-10 bg-lightgrey rounded-3xl relative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>OUR SERVICES</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>What&#39;s in for you</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-2 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} className='transition-all duration-100 ease-in-out hover:bg-navyblue bg-white rounded-3xl mt-16 pt-10 pl-8 pb-10 pr-6 shadow-xl group'>
                            <h4 className='text-4xl font-semibold  text-black mb-5 group-hover:text-white'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-black group-hover:text-offwhite mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold group-hover:text-white text-blue hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;
