import React, {useState} from 'react'
import Slider from "react-slick";
import './css/MultiSlider.css'
import Card1 from "./Card1.jsx";
import {data} from "../data.jsx";
export default function MultiSlider() {

    const [item, setItem] = useState(data);

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        autoplay: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, backgroundColor: 'red', color: 'white' }}
                onClick={onClick}
            />
        );
    };

    return (
        <main className=" slidereact">
            <Slider {...settings}>
                {
                    data.map((item,index) => {
                        return(
                            <div key={index} className='gap-3'>
                                <Card1
                                    image={item.image}
                                    title={item.title}
                                    categorie={item.categorie}
                                    prix={item.prix}
                                    id={item.id}
                                />
                            </div>

                        )}
                    )
                }
            </Slider>

        </main>
    )
}
