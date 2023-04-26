import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <>
            <div className="hero-banner">
                <div className="content">
                    <div className="text-content">
                        <h1>SALES</h1>
                        <p>
                        Hi, thanks for signing up to receive updates from ONE-CLICK STORE! Save 10% on your first order with the code FIRST10.
                        </p>
                        <div className="ctas">
                            <div className="bannet-cta">Read More</div>
                            <div className="bannet-cta v2">Shop Now</div>
                        </div>
                    </div>
                    <img className="banner-img" src={BannerImg} alt="" />
                </div>
            </div>
        </>
    );
};

export default Banner;
