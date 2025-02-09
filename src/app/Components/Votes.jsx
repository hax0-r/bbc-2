import { POLL_DATA } from '@/Data/PollVotes'
import React from 'react'

const Votes = ({ data }) => {
    return (
        <>
            <div className="border p-5 myShadow rounded-md flex flex-col justify-between fadeIn">
                <h2 className="font-semibold text-lg mb-5">{data.question}</h2>
                {
                    data.options.map(({ text, votes }, idx) => (
                        <div key={idx} className="cursor-pointer">
                            <div className="text-sm flex items-center mt-5 justify-between">
                                <p>{text}</p>
                                <p>{votes}</p>
                            </div>
                            <div className="w-full h-2 bg-zinc-200 rounded-full mt-2 relative">
                                <span
                                    className={`h-full block rounded-full bg-zinc-800`}
                                    style={{ width: `${(votes / 100) * 100}%` }}
                                ></span>
                            </div>
                        </div>
                    ))
                }
                <p className="mt-7 text-sm">
                    Total Votes: <span className="font-semibold">{data.totalVotes}</span>
                </p>
            </div>
        </>
    )
}

export default Votes