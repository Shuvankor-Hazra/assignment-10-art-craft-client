import { MdLocationOn } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div className="min-h-[500px] border-2 mb-12 rounded-lg lg:flex">
            <div className="lg:w-1/2 p-6">
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

            <div className="lg:w-1/2 p-10 space-y-10 md:mt-12">
                <div className="border p-5 flex gap-6 items-center">
                    <div className="text-3xl "><MdLocationOn /></div>
                    <div>
                        <h2>OUR LOCATION</h2>
                        <p>123th, Roundstreet, INA.</p>
                    </div>
                </div>
                <div className="border p-5 flex gap-6 items-center">
                    <div className="text-3xl "><FaPhoneAlt /></div>
                    <div>
                        <h2>Get In Touch</h2>
                        <p>+123-456-7890</p>
                    </div>
                </div>
                <div className="border p-5 flex gap-6 items-center">
                    <div className="text-3xl "><MdEmail /></div>
                    <div>
                        <h2>Email</h2>
                        <p>Hello@Awesomesite.Com</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;