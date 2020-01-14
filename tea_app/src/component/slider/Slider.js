import React from 'react';
import {Carousel} from 'react-bootstrap';
import {slide1_caption, slide2_caption, slide3_caption} from '../theme/text'
import slide_pic1 from '../img/slide_pic1.jpg'
import slide_pic2 from '../img/slide_pic2.jpg'
import slide_pic3 from '../img/slide_pic3.jpg'

function Slider(){
    return (
        <div data-aos="fade-right">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide_pic1} alt="firsrt slide"></img>
                    <Carousel.Caption>
                        <h3>{slide1_caption}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide_pic2} alt="second slide"></img>
                    <Carousel.Caption>
                        <h3>{slide2_caption}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={slide_pic3} alt="third slide"></img>
                    <Carousel.Caption>
                        <h3>{slide3_caption}</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;