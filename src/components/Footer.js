import React from "react";

const Footer = () => {
    const arrowSvg = (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24">
            <path d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z" />
        </svg>
    );
    return (
        <div className="sticky px-20 py-5 flex flex-col gap-8 justify-center items-center  h-screen  bg-gray-200 text-xl ">
            <div className="lg:w-1/2">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque
                molestiae quas exercitationem iste velit molestias at dicta odit
                ipsum eos veritatis voluptas ut accusamus harum error nisi
                possimus expedita cupiditate, tenetur distinctio in! Ducimus
                optio asperiores at sunt dolores sint nihil incidunt dolore vero
                magni, aspernatur cupiditate, rerum, consectetur praesentium?
            </div>
            <div
                className=" border-2 border-[#343434] pl-10 px-8  py-4 
                                animate-bounce  hover:animate-none transition-all duration-1000  
                              text-[#000000]
                                flex items-center justify-center gap-2 
                                cursor-pointer hover:bg-[#ffffff] "
            >
                Discover new {arrowSvg}
            </div>
        </div>
    );
};

export default Footer;
