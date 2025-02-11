import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import logo from '../../Assets/logo.png'

export default function Footer() {
    return (
        <footer className="w-full border-t border-gray-100 mt-10 md:pt-5">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 py-10 max-md:max-w-sm max-md:mx-auto">
                    <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                        <Link href="/" className="cursor-pointer flex justify-center lg:justify-start">
                            <Image src={logo} alt="Logo" className=' h-16 w-auto' />
                        </Link>
                        <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
                            Empowering your fitness journey with expert guidance and tailored workouts
                        </p>
                        <Link className="py-2.5 cursor-pointer px-5 h-9 block w-fit bg-[#000] rounded-full shadow-sm text-xs text-white mx-auto transition-all duration-500  lg:mx-0" href="/contactUs">
                            Contact us
                        </Link>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Quick Links</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-3">
                                <Link className="cursor-pointer text-gray-600 hover:text-gray-900" href="/">
                                    Home
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/" className="cursor-pointer text-gray-600 hover:text-gray-900">
                                    News
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link href="/survey" className="cursor-pointer text-gray-600 hover:text-gray-900">
                                    Survey
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Categories</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-3 text-gray-600 hover:text-gray-900">
                                <Link href={"/sport"}>
                                    Sport
                                </Link>
                            </li>
                            <li className="mb-3 text-gray-600 hover:text-gray-900">
                                <Link href={"/bussiness"}>
                                    Bussiness
                                </Link>
                            </li>
                            <li className="mb-3 text-gray-600 hover:text-gray-900">
                                <Link href={"/culture"}>
                                    Culture
                                </Link>
                            </li>
                            <li className=" text-gray-600 hover:text-gray-900">
                                <Link href={"/travel"}>
                                    Travel
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
                        <ul className="text-sm transition-all duration-500">
                            <li className="mb-6">
                                <Link href="/" className="cursor-pointer text-gray-600 hover:text-gray-900">
                                    Terms & Conditions
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="cursor-pointer text-gray-600 hover:text-gray-900">
                                    Privacy Policy
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div className="lg:mx-auto">
                        <h4 className="text-lg text-gray-900 font-medium mb-7">Subscribe</h4>
                        <p className="text-sm text-gray-500 leading-6 mb-7">
                            Subscribe to get the latest news from us
                        </p>
                        <p
                            href="#Subscribe"
                            className="flex cursor-pointer items-center justify-center gap-2 border border-[#000] rounded-full py-3 px-6 w-fit text-sm text-[#000000de] font-semibold transition-all duration-500 hover:bg-gray-50"
                        >
                            Subscribe
                            <span className="text-[#000]">&#8594;</span>
                        </p>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="py-7 border-t border-gray-200">
                    <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                        <span className="text-sm text-gray-500">
                            Copyright © BBC 2024, All rights reserved.
                        </span>
                        <div className="flex mt-4 space-x-4 sm:justify-center sm:mt-0">
                            <p
                                href="javascript:;"
                                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black/80 hover:bg-black"
                            >
                                <FaFacebookF className="text-white" />
                            </p>
                            <p
                                href="javascript:;"
                                className="w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center bg-black/80 hover:bg-black"
                            >
                                <FaInstagram className="text-white" />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
