import imgp1 from "../images/p1.jpg";
import imgp3 from "../images/p3.jpg";

import { useEffect, useState } from "react";
function Hero() {
    const [state, setState] = useState(50);
    const [mouse, setMouse] = useState(100);
    useEffect(() => {
        const width1 = window?.innerWidth;
        const totalGrid1 = 100;
        setState(Math.round((mouse * totalGrid1) / width1) + 1);
    }, [mouse]);

    function handleMouseHover(e) {
        let x = e.clientX;
        setMouse(x);
    }

    return (
        <div className=" ">
            <div
                className="h-screen grid-style-cols "
                onMouseMove={handleMouseHover}
            >
                <div
                    style={{ gridColumn: `span ${state}` }}
                    className={`h-full ${state === 0 && "hidden"} `}
                >
                    <div
                        style={{
                            backgroundImage: `url(${imgp3})`,
                            backgroundAttachment: `fixed`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: `center `,
                            backgroundSize: "cover ",
                        }}
                        className=" h-full "
                    >
                        <div
                            className="  text-white text-4xl 
                                            font-semibold flex items-center 
                                            justify-center  absolute  
                                            w-full h-full "
                        ></div>
                    </div>
                </div>
                <div
                    style={{ gridColumn: `span ${100 - state}` }}
                    className={`h-full ${!(100 - state) && "hidden"} `}
                >
                    <div
                        style={{
                            backgroundImage: `url(${imgp1})`,
                            backgroundAttachment: `fixed`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: `center `,
                            backgroundSize: "cover ",
                        }}
                        className=" h-full   "
                    ></div>
                </div>
            </div>

            <div
                className="h-screen grid-style-cols "
                onMouseMove={handleMouseHover}
            >
                <div
                    style={{ gridColumn: `span ${state}` }}
                    className={`h-full ${state === 0 && "hidden"} `}
                >
                    <div
                        style={{
                            backgroundImage: `url(${imgp1})`,
                            backgroundAttachment: `fixed`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: `center `,
                            backgroundSize: "cover ",
                        }}
                        className=" h-full      "
                    >
                        <div
                            className="  text-white text-4xl 
                                            font-semibold flex items-center 
                                            justify-center  absolute  
                                        w-full h-full "
                        >
                            Welcom to our store
                        </div>
                    </div>
                </div>
                <div
                    style={{ gridColumn: `span ${100 - state}` }}
                    className={`h-full ${!(100 - state) && "hidden"} `}
                >
                    <div
                        style={{
                            backgroundImage: `url(${imgp3})`,
                            backgroundAttachment: `fixed`,
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: `center `,
                            backgroundSize: "cover ",
                        }}
                        className=" h-full   "
                    ></div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
