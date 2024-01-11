import React, { useState } from "react";

function Navbar() {
    const [pageY, setPageY] = useState(1300);
    window.addEventListener("wheel", (e) => {
        setPageY(e.pageY);
    });

    return (
        <div
            className={`flex justify-around text-[#ffffff74] capitalize ${
                pageY > 1194 ? "bg-[#343434] transition-all duration-700" : ""
            }
            items-center h-[3.5rem] text-lg font-bold fixed  w-full z-[50] `}
        >
            <div className="flex items-center justify-center hover:bg-[#8e8e8e93] hover:text-white cursor-pointer w-full h-full basis-1/4">
                logo
            </div>
            <div className="flex items-center justify-center hover:bg-[#8e8e8e93] hover:text-white cursor-pointer w-full h-full basis-1/4">
                logo
            </div>
            <div className="flex items-center justify-center hover:bg-[#8e8e8e93] hover:text-white cursor-pointer w-full h-full basis-1/4">
                logo
            </div>
            <div className="flex items-center justify-center hover:bg-[#8e8e8e93] hover:text-white cursor-pointer w-full h-full basis-1/4">
                discover
            </div>
        </div>
    );
}

export default Navbar;
