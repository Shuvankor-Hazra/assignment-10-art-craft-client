import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Contact = () => {
    return (
        <div className="min-h-[500px] border-2 mb-12 rounded-lg lg:flex">
            <div className="lg:w-1/2 p-6"
                data-aos="fade-right"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <h1 className="text-2xl lg:text-4xl font-bold mb-6">Feel Free to Contact Us!!</h1>
                <div className="flex justify-between gap-3">
                    <input
                        name="name"
                        type="text"
                        placeholder="Full Name"
                        className="input input-bordered mb-3 w-1/2"
                        required />
                    <input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        className="input input-bordered mb-3 w-1/2"
                        required />
                </div>
                <input
                    name="name"
                    type="text"
                    placeholder="Your Subject"
                    className="input input-bordered w-full mb-3"
                    required />
                <textarea
                    className="border rounded-lg w-full p-3"
                    placeholder="Your Message"
                    name="message"
                    id=""
                    rows="10">

                </textarea>
                <button className="btn mt-5 w-full">Send Email</button>
            </div>

            <div className="lg:w-1/2 p-6 space-y-10 md:mt-16"
                data-aos="fade-left"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
                data-aos-mirror="true"
                data-aos-once="false"
                data-aos-anchor-placement="top-center">
                <div className="border rounded-xl p-5 flex gap-6 items-center">
                    <div className="text-3xl "><MdLocationOn /></div>
                    <div>
                        <h2>OUR LOCATION</h2>
                        <p>123th, Roundstreet, INA.</p>
                    </div>
                </div>
                <div className="border rounded-xl p-5 flex gap-6 items-center">
                    <div className="text-3xl "><FaPhoneAlt /></div>
                    <div>
                        <h2>Get In Touch</h2>
                        <p>+123-456-7890</p>
                    </div>
                </div>
                <div className="border rounded-xl p-5 flex gap-6 items-center">
                    <div className="text-3xl "><MdEmail /></div>
                    <div>
                        <h2>Email</h2>
                        <p>Hello@Awesomesite.Com</p>
                    </div>
                </div>
                <div className=" text-center">
                    <button className="btn w-full">View On Map</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;