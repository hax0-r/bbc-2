"use client"
import { useState } from 'react'
import { POLL_DATA } from '@/Data/PollVotes'
import Votes from '../Components/Votes'
import Subcategories from '../Components/Subcategories'

const Culture = () => {
    const [showMore, setShowMore] = useState(9)

    const handleShowMore = () => {
        setShowMore(prev => prev + 6)
    }

    const filterData = POLL_DATA.filter((data) => data.category === 'Culture')

    const sub_categories = [
        { id: 1, name: "art & design" },
        { id: 2, name: "literature" },
        { id: 3, name: "history" },
        { id: 4, name: "fashion" },
        { id: 5, name: "traditions" },
        { id: 6, name: "music" }
    ];
    

    return (
        <>
            <div>
            <Subcategories categoriesName={sub_categories} />
                <div className='px-4 max-w-7xl w-full mx-auto  md:mt-14  mt-10 md:mb-10 mb-6'>
                    <h2 className='text-center font-semibold md:text-4xl text-2xl md:mb-10 mb-6'>Culture Content</h2>
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

export default Culture