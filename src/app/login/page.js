import Image from 'next/image'
import Link from 'next/link'
import googleLogo from "../../Assets/logo-google.png"
import React from 'react'
import { IoClose } from 'react-icons/io5'

const Login = () => {
    return (
        <div className='flex items-center justify-center min-h-screen w-full'>
            <Link href={"/"} >
                <IoClose className='absolute md:top-10 top-5 md:right-20 right-5 text-3xl cursor-pointer' />
            </Link>
            <section className="grid fastFadeIn text-center items-center md:p-10 p-4 w-full">
                <div className="border-2 py-10 border-[#0000003f] mx-auto max-w-[35rem] w-full rounded-lg">
                    <h3 className="text-3xl font-semibold mb-2">Sign In</h3>
                    <p className="mb-10 text-gray-700 px-3">
                        Enter your email and password to sign in
                    </p>

                    <form action="#" className="mx-auto w-full px-5 text-left">
                        {/* Email Input */}
                        <div className="mb-5">
                            <label htmlFor="email" className="mb-1 block font-medium text-gray-900">
                                Your Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Enter Your Email"
                                className="w-full border rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="mb-6">
                            <label htmlFor="password" className="mb-1 block font-medium text-gray-900">
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                placeholder="Enter Your Password"
                                className="w-full border rounded-md border-zinc-300 text-lg p-3 placeholder:text-[16px]"
                            />
                        </div>

                        {/* Sign In Button */}
                        <button className="bg-black text-white text-lg py-3 rounded-md border-2 border-black font-medium tracking-wide transition-all duration-300 hover:bg-white hover:text-black w-full">
                            Sign In
                        </button>

                        {/* Forgot Password Link */}
                        <div className="mt-3 flex justify-end">
                            <Link href="/forgot-password" className="font-medium text-sm hover:underline">
                                Forgot password
                            </Link>
                        </div>

                        {/* Google Sign-In Button */}
                        <button
                            type="button"
                            className="border hover:bg-zinc-50 transition-all duration-300 border-black rounded-md text-lg py-3 mt-6 w-full flex items-center justify-center gap-2"
                        >
                            <Image
                                src={googleLogo}
                                alt="Google"
                                width={24}
                                height={24}
                            />
                            Sign in with Google
                        </button>

                        {/* Create Account Link */}
                        <p className="mt-4 text-center text-gray-600">
                            Not registered?{" "}
                            <Link href="/register" className="font-medium hover:underline text-gray-900">
                                Create account
                            </Link>
                        </p>
                    </form>
                </div>
            </section>
        </div>

    )
}

export default Login