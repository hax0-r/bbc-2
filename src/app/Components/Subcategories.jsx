"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Subcategories = ({ categoriesName }) => {

    const [readMore, setReadMore] = useState(5)

    return (
        <>
            <div className="flex items-center justify-center md:gap-6 gap-4 px
            -4 flex-wrap max-w-7xl w-full mx-auto text-sm text-zinc-500 ">
                {
                    categoriesName.slice(0, readMore).map(({ name }, idx) => (
                        <Link href={"/"} key={idx} className='hover:text-black transition-all duration-500'>{name}</Link>
                    ))
                }
                {
                    categoriesName.length > readMore && (
                        <p onClick={() => setReadMore(readMore + 6)} className='underline text-zinc-800 cursor-pointer'>Read More</p>
                    )
                }
            </div>
        </>
    )
}

export default Subcategories