"use client"
import Link from "next/link"
import { useState } from "react"
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import logo from "../../Assets/logo.png"
import Image from "next/image"

const Navbar = () => {
    const [responsiveNavbar, setResponsiveNavbar] = useState(false)
    const [toggleNavbar, setToggleNavbar] = useState(false)
    return (
        <div className="">
            <div className="flex px-5 py-2 mx-auto md:flex-row flex-row-reverse items-center max-w-7xl w-full justify-between">

                <div className="flex items-center md:max-w-[16rem] md:w-full gap-5 md:flex-row flex-row-reverse">
                    <HiMiniBars3 className='text-2xl cursor-pointer' onClick={() => setResponsiveNavbar(!responsiveNavbar)} />
                    <div className="w-full bg-zinc-50 p-2.5 rounded-full md:flex hidden items-center">
                        <IoIosSearch className='text-xl cursor-pointer' />
                        <input type="text" placeholder='Search...' name="" className='w-full outline-none bg-transparent pl-3 placeholder:text-sm text-sm' id="" />
                    </div>
                </div>

                <Link href={"/"}>
                    <Image src={logo} className='max-w-[97px] w-full' alt="" />
                </Link>
                <div className="md:flex hidden items-center max-w-[16rem] w-full gap-3 justify-end">
                    <Link href={"login"}>
                        <button className='hover:bg-black border-black px-5 py-2 transition-all duration-300 text-black bg-white border-2 hover:text-white font-medium'>Sign In</button>
                    </Link>
                    <Link href={"register"}>
                        <button className='bg-black border-black px-5 py-2 transition-all duration-300 hover:text-black hover:bg-white border-2 text-white'>Register</button>
                    </Link>
                </div>
            </div>

            {
                !toggleNavbar && (
                    <div className="border-b md:block hidden fastFadeIn">
                        <div className="md:px-10 px-5 py-1.5  mx-auto max-w-7xl w-full">
                            <ul className='flex items-center justify-center gap-5 font-medium'>
                                <li> <Link href={"/"}> Home</Link></li>
                                <li> <Link href={"/news"}> News</Link></li>
                                <li> <Link href={"/sport"}> Sport</Link></li>
                                <li> <Link href={"/business"}> Business</Link></li>
                                <li> <Link href={"/culture"}> Culture</Link></li>
                                <li> <Link href={"/travel"}> Travel</Link></li>
                                <li> <Link href={"/earth"}> Earth</Link></li>
                            </ul>
                        </div>
                    </div>
                )
            }

        </div>
    )
}

export default Navbar