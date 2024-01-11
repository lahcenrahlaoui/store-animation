import React, { useRef, useState } from "react";

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import SwipperCustom from "./SwipperCustom";

import {
    black_1,
    black_2,
    black_3,
    black_4,
    black_5,
    blue_1,
    blue_2,
    blue_3,
    blue_4,
    blue_5,
    gray_1,
    gray_2,
    gray_3,
    gray_4,
    gray_5,
    line_1,
    line_2,
    line_3,
    line_4,
    line_5,
} from "images/imagesx";

const Products = () => {
    const list = [black_1, blue_1, line_1, gray_1];

    const grayList = [gray_1, gray_2, gray_3, gray_4, gray_5];
    const blueList = [blue_1, blue_2, blue_3, blue_4, blue_5];
    const blackList = [black_1, black_2, black_3, black_4, black_5];
    const lineList = [line_1, line_2, line_3, line_4, line_5];

    const sendData = {
        [black_1]: blackList,
        [blue_1]: blueList,
        [gray_1]: grayList,
        [line_1]: lineList,
    };

    const [display, setDisplay] = useState(null);
    let content;
    let details;

    const handleOpen = async (item) => {
        if (item === display) {
            setDisplay(null);
        } else {
            setDisplay(item);
        }
    };

    const myRef = useRef(null);

    const executeScroll = () =>
        myRef.current.scrollIntoView({
            behavior: "smooth",
        });

    if (1) {
        <AnimateSharedLayout>
            <AnimatePresence>
                {display &&
                    (details = (
                        <motion.div
                            layoutId={display + "div"}
                            onClick={() => handleOpen("")}
                            className=" inset-0  absolute bg-black bg-opacity-20 "
                        >
                            <div className=" flex justify-center h-screen items-center">
                                <div className="w-full md:w-5/6">
                                    <SwipperCustom
                                        display={display}
                                        list={sendData[display]}
                                    />
                                </div>
                            </div>
                        </motion.div>
                    ))}
            </AnimatePresence>

            {
                (content = list.map((item, index) => {
                    return (
                        <motion.div
                            layoutId={item + "div"}
                            key={item}
                            onClick={() => {
                                executeScroll();
                                handleOpen(item);
                            }}
                        >
                            <motion.img
                                layoutId={item + "image"}
                                src={item}
                                className=" w-56  md:w-60 "
                                alt=""
                            />
                        </motion.div>
                    );
                }))
            }
        </AnimateSharedLayout>;
    }

    return (
        <div ref={myRef} className="h-screen relative z-[9999] ">
            <div className="bg-[#c3c3c343] py-8 text-5xl font-semibold text-center  ">
                Our products
            </div>
            <div className="h-full flex flex-col md:flex-row gap-5 md:mt-5 md:justify-center  ">
                {details}
                {
                    <div className="grid grid-cols-2 md:grid-cols-4  place-items-center justify-center  md:place-items-start   ">
                        {content}
                    </div>
                }
            </div>
        </div>
    );
};

export default Products;
