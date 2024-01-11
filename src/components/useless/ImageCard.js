/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

function ImageCard({ image }) {
    const imgRef = useRef();

    const [show, setShow] = useState(false);
    const [span, setSpan] = useState(0);

    useEffect(() => {
        setSpan(Math.ceil(image?.height / 150));
    }, [image]);
    useEffect(() => {
        imgRef?.current?.addEventListener("load", () => {
       
            setShow(true);
        });
    }, [imgRef]);

    return (
        <div
            style={{
                gridRowEnd: `span ${span}`,
                backgroundImage: `url(${image?.urls?.thumb})`,
            }}
            className={`  bg-center bg-cover  before:content-[attr(before)] 
                        bg-opacity-40 flex justify-center 
                        ${span === 0 && "h-0"}
                `}
        >
            <img
                ref={imgRef}
                src={image?.urls?.full}
                loading="lazy"
                className={` ${
                    show
                        ? "opacity-1 transition-all ease-in delay-100 duration-300 object-cover "
                        : "opacity-0"
                }  `}
            />
        </div>
    );
}

export default ImageCard;
