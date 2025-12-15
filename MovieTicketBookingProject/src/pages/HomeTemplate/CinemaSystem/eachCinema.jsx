import React from 'react'

const EachCinema = ({ propEachCinema, maHeThongRap }) => {
    const cinemaImages = {
        BHDStar: "/img/Cinema/BHDCine.jpg",
        CineStar: "/img/Cinema/CineStar.avif",
        CGV: "/img/Cinema/CGV.avif",
        Galaxy: "/img/Cinema/GalaxyCine.jpg",
        LotteCinima: "/img/Cinema/LotteCine.jpg",
        MegaGS: "/img/Cinema/megaGS.jpg",
    };

    return (
        <div
            key={propEachCinema.maCumRap}
            className="bg-white/5 backdrop-blur-md rounded-2xl p-4 shadow-md"
        >
            <img
                src={cinemaImages[maHeThongRap]}
                alt={propEachCinema.tenCumRap}
                className="w-full h-32 object-cover rounded-xl"
            />

            <div className="mt-2">
                <h2 className="text-lg font-bold text-white">
                    {propEachCinema.tenCumRap}
                </h2>
                <h3 className="text-sm text-gray-300">
                    {propEachCinema.diaChi}
                </h3>
            </div>
        </div>
    )
}

export default EachCinema
