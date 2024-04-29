import { Helmet } from "react-helmet";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Art & craft | Home</title>
            </Helmet>
            <Slider></Slider>
            <About></About>
            <CraftItems></CraftItems>
            <Contact></Contact>
        </div>
    );
};

export default Home;