// /* eslint-disable jsx-a11y/alt-text */
// import React, { useEffect, useRef, useState } from "react";
// import axios from "axios";
// import { useAuthContext } from "hooks/useAuthContext";


// const ImageComponent = ({}) => {
//     const [bigImage, setBigImage] = useState("");
//     const [show, setShow] = useState(false);
//     const { user } = useAuthContext();

//     const imageRef = useRef();

//     useEffect(() => {
//         imageRef?.current?.addEventListener("load", () => {
//             setShow(true);
//         });
//     }, [_id, image, user.token]);

//     const [image, setImage] = useState();

//     useEffect(() => {
//         const term = "office";
//         (async () => {
//             const response = await axios.get(
//                 "https://api.unsplash.com/search/collections",
//                 {
//                     params: { query: term },
//                     headers: {
//                         Authorization: `Client-ID ${apikey}`,
//                     },
//                 }
//             );

//             const n = response?.data.results?.map((image) => {
//                 return [...image.preview_photos];
//             });
//             let x = n.flat();
//             setImages(image);
//         })();
//     }, []);

//     return (
//         <div className="flex justify-center overflow-hidden rounded-lg  h-96 min-h-fit ">
//             <div
//                 before=""
//                 className={`bg-cover bg-center w-full before:content-[attr(before)] 
//                             inset-0 bg-black bg-opacity-10 flex justify-center 
//                             h-full 
                            
                          
                            
//                             ${!show && " animate-pulse"} `}
//                 style={{ backgroundImage: `url(${image_thumbnail})` }}
//             >
//                 <div className="flex items-center justify-center w-full ">
//                     <img
//                         ref={imageRef}
//                         src={bigImage}
//                         loading="lazy"
//                         className={`w-full h-full object-cover  ${
//                             show
//                                 ? "opacity-1 transition-all ease-in delay-100 duration-300 "
//                                 : "opacity-0"
//                         }  `}
//                     />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default React.memo(ImageComponent);
