import { Header } from "./Header"
import { Hero } from "./Hero"
import { Feature } from "./Feature"
import { Services } from "./Services"
import { WhyUs } from "./WhyUs"
import { Footer } from "./Footer"

export const Home = () => {
    return (
        <>
            <Header/>
            <Hero/>
            <Feature/>
            <Services/>
            <WhyUs/>
            <Footer/>
        </>
    )
}