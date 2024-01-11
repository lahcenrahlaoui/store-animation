/* eslint-disable jsx-a11y/alt-text */
import React, { useCallback, useEffect, useRef, useState } from "react";

import ImageCard from "./ImageCard";
import axios from "axios";
import { Blurhash } from "react-blurhash";

// eslint-disable-next-line react-hooks/rules-of-hooks

function Galery() {
    const apikey = "263FQn5YL6kTaqUoy9XOfhUYxLvhP0SMpNRQiwJz4XA";

    const [images, setImages] = useState([]);

    useEffect(() => {
        const term = "clothes singles";
        (async () => {
            const response = await axios.get(
                "https://api.unsplash.com/search/photos",
                {
                    params: { query: term },
                    headers: {
                        Authorization: `Client-ID ${apikey}`,
                    },
                }
            );
            setImages(response.data.results);
        })();
    }, []);

    // const renderImages = images?.map((image) => {
    //     return <ImageCard key={image.urls.full} image={image} />;
    // });

    return (
        <div className="  grid-style px-20 gap-3 ">
            {/* {renderImages} */}

            <ImageCard image={images[0]} />
            <ImageCard image={images[1]} />
            <ImageCard image={images[2]} />
            <ImageCard image={images[3]} />
            <ImageCard image={images[4]} />
            <ImageCard image={images[5]} />
            <ImageCard image={images[6]} />
            <ImageCard image={images[7]} />
            <ImageCard image={images[8]} />
            {/* <ImageCard image={images[9]} /> */}
        </div>
    );
}

export default Galery;
