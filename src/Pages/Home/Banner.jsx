import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
    return (
        <Carousel showThumbs={false} showArrows={true} infiniteLoop={true} dynamicHeight={true}>
            <div>
                <img src={'https://i.ibb.co/st1xpqQ/image9.jpg'} alt="" />
            </div>
            <div>
                <img src={'https://i.ibb.co/st1xpqQ/image9.jpg'} alt="" />
            </div>
            <div>
                <img src={'https://i.ibb.co/st1xpqQ/image9.jpg'} alt="" />
            </div>
        </Carousel>
    );
};

export default Banner;