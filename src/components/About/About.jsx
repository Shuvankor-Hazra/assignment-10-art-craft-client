import { Helmet } from "react-helmet-async";
import 'animate.css';

const About = () => {
    return (
        <div>
            <Helmet>
                <title>Real state | About</title>
            </Helmet>
            <div className="text-center my-12">
                <h2 className="text-2xl md:text-3xl font-bold ">About Us</h2>
                <p className="md:text-xl md:w-2/3 mx-auto py-3 text-gray-500">Expressing imagination through diverse mediums, fostering creativity, innovation, and personal fulfillment in handmade creations.</p>
            </div>
            <div className="lg:flex items-center lg:mb-14 bg-base-300 my-10 rounded-xl">
                <figure className="lg:w-1/2  animate__animated animate__fadeInLeft">
                    <img className="rounded-t-xl lg:rounded-l-xl" src="https://i.ibb.co/LPfSh88/artAbout.jpg" alt="Album" />
                </figure>
                <div className="lg:w-1/2 card-body px-3 lg:px-6 animate__animated animate__fadeInRighte">
                    <h2 className="text-xl md:text-3xl font-bold">From Blueprint To Reality, We Deliver</h2>
                    <div className="space-y-5">
                        <p><span className="md:text-lg font-semibold">Steady Demand:</span> There is a consistent demand for industrial space driven by e-commerce growth, manufacturing needs, and supply chain logistics.</p>

                        <p><span className="text-lg font-semibold">Long-Term Tenants:</span> Industrial leases tend to be longer in duration compared to other types of real estate, providing stable cash flow for investors.</p>

                        <p><span className="text-lg font-semibold">Limited New Supply:</span> Developing industrial properties requires substantial capital and land, leading to slower supply growth compared to other sectors, which can create favorable market conditions for existing industrial real estate owners.</p>

                        <p><span className="text-lg font-semibold">Location Flexibility: </span> Industrial properties can be located in various areas, including urban, suburban, and rural locations, depending on the specific needs of tenants and logistical requirements.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;