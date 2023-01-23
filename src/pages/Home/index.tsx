import { Episodes } from '../../components/Episodes';
import { Footer } from '../../components/Footer';
import { MainSection } from '../../components/MainSection';
import { NavBar } from '../../components/NavBar';
import { Prices } from '../../components/Prices';
import { SectionTwo } from '../../components/SectionTwo';

export const Home = () => {
    return (
        <>
        <NavBar />
        <MainSection />
        <SectionTwo />
        <Episodes />
        <Prices />
        <Footer />
        </>
    )
}