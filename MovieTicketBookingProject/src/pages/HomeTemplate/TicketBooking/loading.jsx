import React, { memo } from 'react'

const Loading = ({ status = false }) => {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-white text-black gap-3">

            {!status && (
                <>
                    <img
                        src="/img/loading.gif"
                        alt="Loading..."
                        className="w-[10%]"
                    />
                    <p className="text-sm lg:text-lg font-semibold tracking-wide animate-pulse text-center">
                        Hold on just a moment!
                    </p>
                </>
            )}

            {status && (
                <>
                    <img
                        src="/img/redirect.gif"
                        alt="Redirecting..."
                        className="w-[50%]"
                    />
                    <p className="text-sm lg:text-lg font-semibold tracking-wide animate-pulse text-center">
                        Sayonara...Nunnun
                    </p>
                </>
            )}
        </div>
    );
};

export default memo(Loading)
