import Navbar from "../components/landing-page/Navbar";
import Hero from "../components/landing-page/Hero";
import Modules from "../components/landing-page/Modules";
import TechnologyStack from "../components/landing-page/TechnologyStack";
import Footer from "../components/landing-page/Footer";

function LandingPage() {
    return (
        <>
            <Navbar />
            <Hero />
            <Modules />
            <TechnologyStack />
            <Footer />
        </>
    );
}

export default LandingPage;