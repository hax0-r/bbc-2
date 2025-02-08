import Link from 'next/link'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const Register = () => {
    return (
        <>
            <div className='flex items-center justify-center min-h-screen w-full'>
                <Link href={"/"} >
                    <IoClose className='absolute md:top-10 top-5 md:right-20 right-5 text-3xl cursor-pointer' />
                </Link>
                <section className="grid text-center  items-center p-4 w-full fastFadeIn">
                    <div className='border-2 py-10 border-[#0000003f] mx-auto max-w-5xl w-full rounded-lg'>
                        <h3 className="text-3xl font-semibold mb-2 text-start px-5">Register</h3>
                        <p className="mb-10 text-gray-700 text-start px-5">
                            regsiter your account for sign in
                        </p>
                        <form action="#" className="mx-auto w-full px-5 text-left">
                            <div className="grid md:grid-cols-2 gap-5 mb-6">

                                <div className="">
                                    <label htmlFor="email" className="mb-1 block font-medium text-gray-900">
                                        Name
                                    </label>
                                    <input
                                        id="name"
                                        type="text"
                                        placeholder="Enter Your Name"
                                        className="w-full outline-none border rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="mb-1 block font-medium text-gray-900">
                                        Phone Number
                                    </label>
                                    <input
                                        id="Number"
                                        type="number"
                                        placeholder="Enter Your Number"
                                        className="w-full outline-none border placeholder:pt-5 placeholder:block rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="mb-1 block font-medium text-gray-900">
                                        Your Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        placeholder="Enter Your Email"
                                        className="w-full outline-none border rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                    />
                                </div>
                                <div className="">
                                    <label htmlFor="password" className="mb-1 block font-medium text-gray-900">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        type="password"
                                        placeholder="Enter Your Password"
                                        className="w-full outline-none border placeholder:pt-5 placeholder:block rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                                    />
                                </div>
                            </div>
                            <button className="bg-[#000000e7] text-white text-lg py-3 rounded-md border-2 border-black font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black w-full">
                                Regsiter
                            </button>
                        </form>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Register