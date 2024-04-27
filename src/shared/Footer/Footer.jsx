

const Footer = () => {
    return (
        <div className="bg-black text-white text-center lg:text-left">
            <footer className="flex flex-col lg:flex-row gap-10 lg:gap-0 justify-between p-10 max-w-7xl mx-auto font-inter">
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className="flex flex-col gap-2">
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="px-10 py-4 border-t border-base-300 max-w-7xl mx-auto font-inter">
                <div className=" text-center py-5">
                    <p>@copyright, All rights reserved!</p>
                    <p>Art & craft Ltd. Providing reliable service since 1992</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;