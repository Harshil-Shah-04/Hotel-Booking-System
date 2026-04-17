import Hero from '../components/Hero'
import FeaturedDestinations from '../components/FeaturedDestinations'
import ExclusiveOffers from '../components/ExclusiveOffers'
import Testimonials from '../components/Testimonials'
import NewsLetter from '../components/NewsLetter'
import RecommendedHotels from '../components/RecommendedHotels'

const Home = () => {
    return (
        <>
            <Hero />
            <RecommendedHotels />
            <FeaturedDestinations />
            <ExclusiveOffers />
            <Testimonials />
            <NewsLetter />
        </>
    )
}

export default Home
