import Slider from "react-slick"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../SliderS/SliderS.css'
import img1 from '/public/SliderS/1s.jpg'
import img2 from '/public/SliderS/2s.jpg'
import img3 from '/public/SliderS/3s.jpg'

export default function SliderS(){
    const setting = {
        dots: true,
        infinite: true,
        speed: 400,
        sliderToShow: 1,
        sliderToScroll: 1,
    }
    return(
        <><br /><br />
        <div className="slider">
            <div className="container">
                <div className="slider-content">
                    <div className="slider-place">
                        <Slider className="sliderr" {...setting}>
                            <div className="slide">
                                <img className="slide-img" src={img1}/>
                            </div>
                            <div className="slide">
                                <img className="slide-img"  src={img1}/>
                            </div>
                            <div className="slide">
                                <img className="slide-img"  src={img1}/>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
        </div><br /><br />
        </>
    )
}