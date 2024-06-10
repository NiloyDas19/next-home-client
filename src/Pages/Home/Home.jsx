import AdvertisementSection from "./AdvertisementSection";
import Banner from "./Banner";
import FAQ from "./FAQ";
import LatestReviews from "./LatestReviews";
import Stat from "./Stat";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <LatestReviews></LatestReviews>
            <Stat></Stat>
            <FAQ></FAQ>
        </div>
    );
};

export default Home;