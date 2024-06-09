import AdvertisementSection from "./AdvertisementSection";
import Banner from "./Banner";
import LatestReviews from "./LatestReviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AdvertisementSection></AdvertisementSection>
            <LatestReviews></LatestReviews>
        </div>
    );
};

export default Home;