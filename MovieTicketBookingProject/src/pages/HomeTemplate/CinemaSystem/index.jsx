import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchMovieHome } from './../Home/slice'
import Slider from "react-slick";

const CinemaSystem = () => {
    const dispatch = useDispatch();

    const dataChainCinema = useSelector((state) => {
        return state.movieHomeReducer.dataHome?.dataChainCinema;
    });

    useEffect(() => {
        dispatch(fetchMovieHome());
    }, []);

    const experienceSlider = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const renderCinemaList = () => {
        return dataChainCinema?.map((cinemasList) => (
            <div
                key={cinemasList.maHeThongRap}
                className="flex flex-col items-center gap-1 p-2 bg-white/5 rounded-lg backdrop-blur-md shadow-sm hover:shadow-md transition-all duration-300 animate__animated animate__fadeInUp animate__slow"
            >
                <img
                    src={cinemasList.logo}
                    alt={cinemasList.tenHeThongRap}
                    className="w-15 h-15 object-contain drop-shadow-lg"
                />
                <div className="text-white font-medium text-xs md:text-sm">
                    {cinemasList.tenHeThongRap}
                </div>
            </div>
        ));
    };

    return (
        <section className="bg-[#1C1C1C] text-white py-20 space-y-32 animate__animated animate__fadeIn">
            <div className='container mx-auto space-y-28'>

                {/* HERO TITLE */}
                <div className="space-y-6">
                    <h1 className="text-3xl md:text-4xl font-extrabold leading-snug bg-linear-to-r from-red-500 to-amber-400 bg-clip-text text-transparent drop-shadow-xl text-center animate__animated animate__fadeInDown animate__slow">
                        <span className='text-2xl md:text-4xl'>FeelDiamondCine</span><br />
                        Elevating Your Movie Experience in Southern Vietnam
                    </h1>

                    <p className="text-white text-lg md:text-xl
                    animate__animated animate__fadeInLeft animate__slow">FeelDiamondCine is a modern online movie ticketing platform designed to bring cinema lovers across Southern Vietnam closer to the films they love.</p>

                    <p className="text-white text-lg md:text-xl
                    animate__animated animate__fadeInLeft animate__slow">From finding the nearest cinema to browsing detailed movie information and selecting the perfect showtime, everything is crafted to make your booking journey fast, simple, and enjoyable.</p>
                </div>

                {/* EXPERIENCE SLIDER */}
                <div className="animate__animated animate__fadeInUp animate__slow">
                    <Slider {...experienceSlider}>
                        {[
                            { title: "Seamless Booking Experience", text: "Book your movie tickets in seconds with a smooth, modern, and user-friendly platform made for every cinema lover." },
                            { title: "Your Gateway to the Best Movies", text: "Explore the latest blockbusters, trending titles, and exclusive screenings tailored just for you." },
                            { title: "Modern & Advanced Cinemas", text: "Enjoy top-tier sound, crystal-clear screens, and premium seating across leading cinema chains in Southern Vietnam." },
                            { title: "Snacks That Elevate Your Movie Night", text: "Treat yourself to delicious popcorn, drinks, and exclusive combos available at partnered theaters." },
                            { title: "Powered by Leading Cinema Brands", text: "In partnership with BHD, CGV, Cinestar, Galaxy Cinema, Lotte Cinema, and MegaGS for the best and widest choices." },
                            { title: "Your Perfect Cinema Journey", text: "Comfort, convenience, and unforgettable moments—all in one place with FeelDiamondCine." },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="p-10 bg-white/5 rounded-2xl backdrop-blur-md space-y-4 shadow-lg border border-white/10 animate__animated animate__fadeInUp animate__slow"
                            >
                                <h3 className="text-2xl font-bold text-amber-400 drop-shadow-md">{item.title}</h3>
                                <p className="text-gray-300">{item.text}</p>
                            </div>
                        ))}
                    </Slider>
                </div>

                {/* TREE INFORMATION */}
                <div className="w-full relative">

                    <div className="absolute left-1/2 top-0 w-[3px] h-full bg-amber-400/50"></div>

                    <div className="flex flex-col space-y-16">

                        {/* 1 - LEFT */}
                        <div className="flex justify-start">
                            <div className="w-full max-w-xl space-y-6 animate__animated animate__fadeInLeft animate__slow wow" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg">
                                    Where Convenience Meets Premium Experience
                                </h2>

                                <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                                    At FeelDiamondCine, we believe watching a movie should be effortless from the very first step.
                                </p>

                                <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                                    Our platform offers a smooth, user-friendly interface, ensuring you can explore movies, reserve tickets, and enjoy the excitement of cinema without any hassle.
                                </p>

                                <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                                    Whether it’s the latest blockbuster, a romantic drama, or a family-friendly animation, we help you dive into the world of film with comfort, modern technology, and an elevated level of convenience.
                                </p>
                            </div>
                        </div>

                        {/* 2 - RIGHT */}
                        <div className="flex justify-end">
                            <div className="w-full max-w-xl space-y-6 animate__animated animate__fadeInRight animate__slow wow text-left" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg">
                                    Proudly Partnered With Leading Cinema Brands
                                </h2>

                                <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                                    To bring you the widest selection and the best experience, FeelDiamondCine collaborates with top cinema partners across the region, including:
                                </p>

                                <div className="grid grid-cols-3 gap-8 mt-6">
                                    {renderCinemaList()}
                                </div>

                                <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                                    These partnerships allow us to offer diverse movie lineups, premium theater environments, and exclusive promotions you won’t find anywhere else.
                                </p>
                            </div>
                        </div>

                        {/* 3 - LEFT */}
                        <div className="flex justify-start">
                            <div className="w-full max-w-xl space-y-6 animate__animated animate__fadeInLeft animate__slow wow" data-wow-duration="1.5s" data-wow-delay="0.3s">
                                <h2 className="text-3xl md:text-4xl font-bold text-amber-400 drop-shadow-lg">
                                    Your Movie Journey Starts Here
                                </h2>

                                <p className="text-xs md:text-sm lg:text-base xl:text-lg">
                                    Whether you’re planning a fun night out, a weekend escape, or a special date, FeelDiamondCine is your trusted companion—helping you book with ease and enjoy every moment in the most modern cinemas around.
                                </p>
                            </div>
                        </div>

                    </div>
                </div>

                {/* SLOGAN */}
                <p className="text-center text-sm md:text-base lg:text-lg xl:text-xl text-white italic mt-6 md:mt-8 tracking-wide leading-relaxed">
                    FeelDiamondCine – where comfort, convenience, and cinematic moments come together.
                </p>
            </div>
        </section>
    );
};

export default CinemaSystem;
