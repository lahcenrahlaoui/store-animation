/* eslint-disable react-hooks/exhaustive-deps */
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import imgp1 from "../images/p1.jpg";
import imgp2 from "../images/x.jpg";
import imgp3 from "../images/p3.jpg";

function useIsInViewport(ref) {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const observer = new IntersectionObserver(([entry]) => {
        return setIsIntersecting(entry.isIntersecting);
    });

    useEffect(() => {
        observer.observe(ref.current);

        return () => {
            observer.disconnect();
        };
    }, [ref, observer]);

    return isIntersecting;
}

const HorizantalScroll = () => {
    const sectionRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["0%", "-82%"]);
    return (
        <section ref={sectionRef} className=" relative h-[200vh]  border-t-8 ">
            <div className="sticky top-14 h-[100vh-10px] flex item-center overflow-hidden">
                <motion.div style={{ x }} className="flex  ">
                    <div
                        style={{
                            backgroundImage: `url(${imgp1})`,

                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            height: "100vh",
                            width: "100vw",
                        }}
                        className=" capitalize text-6xl  text-center  
                                    flex items-center justify-center mix-blend-multiply text-white 
                                    w-[clac(100vw-20px)] min-w-[100vw] h-screen"
                    >
                        <span className="bg-black bg-opacity-25 py-10 px-20 w-4/5">
                            check new models in our store
                        </span>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${imgp2})`,

                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            height: "100vh",
                            width: "100vw",
                        }}
                        className=" capitalize text-6xl  text-center  
                                    flex items-center justify-center mix-blend-multiply text-white 
                                    w-[clac(100vw-20px)] min-w-[100vw] h-screen"
                    >
                        <span className="bg-black bg-opacity-25 py-10 px-20 w-4/5">
                            New troussers
                        </span>
                    </div>
                    <div
                        style={{
                            backgroundImage: `url(${imgp3})`,

                            backgroundSize: "contain",
                            backgroundRepeat: "no-repeat",
                            height: "100vh",
                            width: "100vw",
                        }}
                        className=" capitalize text-6xl  text-center  
                                    flex items-center justify-center mix-blend-multiply text-white 
                                    w-[clac(100vw-20px)] min-w-[100vw] h-screen"
                    >
                        <span className="bg-black bg-opacity-25 py-10 px-20 w-4/5">
                            Blazers
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HorizantalScroll;
