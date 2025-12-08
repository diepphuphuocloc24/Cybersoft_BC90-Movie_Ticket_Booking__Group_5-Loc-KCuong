import React from 'react'

const Loading = () => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center 
    bg-white text-black gap-2 lg:gap-4">

            <img
                src="/img/loading.gif"
                alt="Loading..."
                className="w-[10%]"
            />

            <p className="text-sm lg:text-lg font-semibold tracking-wide animate-pulse">
                Hold on just a moment!
            </p>

        </div>
    )
}

export default Loading
