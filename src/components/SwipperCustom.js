import React from "react";

import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { EffectCards, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

const SwipperCustom = ({ display, list }) => {
    const swiperComponentCards = (
        <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
            <SwiperSlide>
                <img className="w-96 h-full" src={list[0]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-full" src={list[0]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-full" src={list[0]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-full" src={list[0]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-96" src={list[2]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-96" src={list[0]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-96" src={list[1]} />
            </SwiperSlide>
            <SwiperSlide>
                <img className="w-96 h-96" src={list[2]} />
            </SwiperSlide>
        </Swiper>
    );

    const swiperComponentPages = (
        <>
            <Swiper
                slidesPerView={3}
                spaceBetween={0}
                centeredSlides={true}
                pagination={{ clickable: true }}
                modules={[Pagination]}
            >
                <SwiperSlide>
                    <motion.img
                        layoutId={display + "image"}
                        className="w-96 h-full object-cover"
                        src={display}
                    />
                </SwiperSlide>

                {list.map((item, idx) => {
                    if (idx !== 0) {
                        return (
                            <SwiperSlide>
                                <img
                                    className="w-96 h-full object-cover"
                                    src={item}
                                />
                            </SwiperSlide>
                        );
                    }
                })}
            </Swiper>
        </>
    );

    return <div>{swiperComponentPages}</div>;
};

export default SwipperCustom;
