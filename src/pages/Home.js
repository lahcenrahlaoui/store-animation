/* eslint-disable react-hooks/exhaustive-deps */
import Navbar from "components/Navbar";
import Hero from "../components/Hero";
import HorizantalScroll from "../components/HorizantalScroll";
import Footer from "../components/Footer";

import Products from "../components/Products";
function Home() {
    return (
        <div className=" ">
            <Navbar />
            <Hero />

            <HorizantalScroll />

            <Products />

            <Footer />
        </div>
    );
}

export default Home;
