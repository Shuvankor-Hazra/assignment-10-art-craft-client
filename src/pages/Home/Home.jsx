import { Helmet } from "react-helmet";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import CraftItems from "../../components/CraftItems/CraftItems";
import Slider from "../../components/Slider/Slider";
import ArtAndCrafts from "../../components/ArtAndCrafts/ArtAndCrafts";


const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Art & craft | Home</title>
            </Helmet>
            <Slider></Slider>
            <CraftItems></CraftItems>
            <About></About>
            <ArtAndCrafts></ArtAndCrafts>
            <Contact></Contact>
        </div>
    );
};

export default Home;