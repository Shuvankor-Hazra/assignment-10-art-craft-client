import { Helmet } from "react-helmet-async";
import { FaAnglesRight } from "react-icons/fa6";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();
import aboutImg from "../../assets/artAbout.jpg"

const About = () => {
    return (
        <div className="pb-6 pt-12">
            <Helmet>
                <title>Real state | About</title>
            </Helmet>
            <div className="text-center my-10">
                <h2 className="text-2xl md:text-3xl font-bold ">About Us</h2>
                <p className="md:text-xl md:w-2/3 mx-auto py-3 text-gray-500">Expressing imagination through diverse mediums, fostering creativity, innovation, and personal fulfillment in handmade creations.</p>
            </div>
            <div className="lg:flex items-center lg:mb-14 bg-base-300 my-10 rounded-xl">
                <figure className="lg:w-1/2 p-6">
                    <img className="rounded-xl" src={aboutImg} alt="About" />
                </figure>
                <div className="lg:w-1/2 card-body px-3 lg:px-6">
                    <h2 className="text-xl md:text-3xl font-bold">From Blueprint To Reality, We Deliver</h2>
                    <div className="space-y-5">
                        <p><span className="md:text-lg font-semibold">Steady Demand:</span> The enduring appeal of art and craft persists, driven by the human need for expression, creativity, and cultural enrichment.</p>

                        <p><span className="text-lg font-semibold">Long-Term Tenants:</span> Art and craft attract long-term enthusiasts, drawn by the endless avenues for self-expression, skill refinement, and community engagement they offer.</p>

                        <p><span className="text-lg font-semibold">Limited New Supply:</span> Despite limited new supply, the enduring allure of art and craft persists, sustained by dedicated artisans and enthusiasts who cherish tradition, craftsmanship, and creativity in their creations and collections.</p>

                        <p><span className="text-lg font-semibold">Location Flexibility: </span> Art and craft offer unparalleled location flexibility, enabling creators to work from home studios, community workshops, or remote settings. This versatility fosters creativity and connection, transcending geographical boundaries to reach diverse audiences worldwide.</p>
                    </div>
                    <button className="btn bg-[#D2B48C] mt-6">Rede more <FaAnglesRight /></button>
                </div>
            </div>
        </div>
    );
};

export default About;