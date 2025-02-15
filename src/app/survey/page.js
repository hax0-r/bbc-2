"use client"
import React, { useState } from 'react'
import Votes from '../Components/Votes'
import { POLL_DATA } from '@/Data/PollVotes'

const Survey = () => {
    const [showMore, setShowMore] = useState(12)

    const handleShowMore = () => {
        setShowMore(prev => prev + 6)
    }

    return (
        <div>
            <div className='px-4 max-w-7xl w-full mx-auto  md:mt-14  mt-10 md:mb-10 mb-6'>
                <h2 className='text-center font-semibold md:text-4xl text-2xl md:mb-10 mb-6'>Feature Content</h2>
                <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 '>
                    {
                        POLL_DATA.slice(0, showMore).map((data) => (
                            <Votes key={data.id} data={data} />
                        ))
                    }
                </div>
                {showMore < POLL_DATA.length && (
                    <button onClick={handleShowMore} className="mt-6 transition-all hover:bg-zinc-100 duration-500 text-zinc-800 font-medium w-full border-2 rounded-lg p-4 text-center">
                        Show More
                    </button>
                )}
            </div>
        </div>
    )
}

export default Survey