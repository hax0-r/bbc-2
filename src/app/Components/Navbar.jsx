"use client"
import Link from "next/link"
import { useState } from "react"
import { HiMiniBars3 } from 'react-icons/hi2'
import { IoIosSearch } from 'react-icons/io'
import logo from "../../Assets/logo.png"
import Image from "next/image"
import { IoClose } from "react-icons/io5"
import { usePathname } from "next/navigation"

const Navbar = () => {
    const address = usePathname();

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

            <div className=" flex justify-center items-center mb-4">
                <div className="border rounded-full flex justify-center overflow-hidden  items-center">
                    <Link href={"/"} onClick={() => {
                        setToggleNavbar(false)
                    }} className={`py-3 block px-5 pl-7 transition-all duration-500 font-medium hover:bg-zinc-50  `}>Home</Link>
                    <Link href={""} onClick={() => {
                        setToggleNavbar(false)
                    }} className={`py-3 block px-5 pr-7 transition-all duration-500 font-medium hover:bg-zinc-50 `}>News</Link>
                    <Link href={"/survey"} onClick={() => {
                        setToggleNavbar(false)
                    }} className={`py-3 ${address === "/survey" && "bg-zinc-100"} block px-5 pr-7 transition-all duration-500 font-medium hover:bg-zinc-50 `}>Survey</Link>
                </div>
            </div>

            {
                !toggleNavbar && (
                    <div className="border-b md:block hidden">
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

            <div
                onClick={() => setResponsiveNavbar(!responsiveNavbar)}
                className={`fixed top-0 left-0 ${responsiveNavbar ? "w-screen opacity-100" : "w-0 opacity-0"} bg-[#000000a3] h-screen z-40`}
                style={{
                    transitionProperty: "width, opacity",
                    transitionDuration: responsiveNavbar ? "200ms, 1500ms" : "1000ms, 200ms",
                }}
            ></div>
            <div className={`fixed top-0 transition-all duration-500 left-0 ${responsiveNavbar ? "md:w-[23rem] w-full" : "w-[0rem]"}  overflow-hidden bg-white h-screen z-50`}>
                <IoClose className='absolute top-5 right-5 text-3xl text-zinc-800 cursor-pointer transition-all hover:rotate-90 hover:scale-110 duration-500' onClick={() => setResponsiveNavbar(!responsiveNavbar)} />
                <div className="flex w-full flex-col justify-between h-full">
                    <ul className='flex flex-col gap-1 font-medium px-7 pt-16'>
                        <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} href={"/"}> Home</Link></li>
                        <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block  transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} href={"/sport"}> Sport</Link></li>
                        <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block  transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} href={"/business"}> Business</Link></li>
                        <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block  transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} href={"/culture"}> Culture</Link></li>
                        <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block  transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} href={"/travel"}> Travel</Link></li>
                        <li> <Link onClick={() => setResponsiveNavbar(!responsiveNavbar)} className={`block  transition-all duration-500 p-3 rounded-lg hover:bg-zinc-100 `} href={"/earth"}> Earth</Link></li>
                    </ul>
                    {
                        innerWidth < 768 && (
                            <div className="px-7 pb-3">
                                <Link href={"/login"} onClick={() => setResponsiveNavbar(false)} className="hover:bg-black mb-2 hover:text-white text-lg py-3 rounded-md border-2 border-black font-medium tracking-wide transition-all duration-300 bg-white text-black w-full block text-center">
                                    Sign Up
                                </Link>
                                <Link href={"/register"} onClick={() => setResponsiveNavbar(false)} className="bg-black text-white text-lg py-3 rounded-md border-2 border-black font-medium block text-center tracking-wide transition-all duration-300 hover:bg-white hover:text-black w-full">
                                    Regsiter
                                </Link>
                            </div>
                        )
                    }
                </div>
            </div>

        </div>
    )
}

export default Navbar