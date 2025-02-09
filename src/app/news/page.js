"use client"
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { POLL_DATA } from '@/Data/PollVotes'
import Votes from '../Components/Votes'

const News = () => {
    const [showMore, setShowMore] = useState(9)

    const handleShowMore = () => {
        setShowMore(prev => prev + 6)
    }

    const filterData = POLL_DATA.filter((data) => data.category === 'News')


    return (
        <>
            <div>
                <Navbar />
                <div className='px-4 max-w-7xl w-full mx-auto  md:mt-14  mt-10 md:mb-10 mb-6'>
                    <h2 className='text-center font-semibold md:text-4xl text-2xl md:mb-10 mb-6'>News Content</h2>
                    <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 '>
                        {
                            filterData.slice(0, showMore).map((data) => (
                                <Votes key={data.id} data={data} />
                            ))
                        }
                    </div>
                    {showMore < filterData.length && (
                        <button onClick={handleShowMore} className="mt-6 transition-all hover:bg-zinc-100 duration-500 text-zinc-800 font-medium w-full border-2 rounded-lg p-4 text-center">
                            Show More
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default News