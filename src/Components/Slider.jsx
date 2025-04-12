import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ceoQuotes = [
  {
    quote: "Many colleges do not teach the skills business leaders need most in their workforce, such as coding.",
    name: "Tim Cook",
    title: "CEO, Apple",
    image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/academy/apple-ceo.svg",
  },
  {
    quote: "Getting good talent for cutting edge new technology is the toughest. It’s a real, real pain. There’s such a fight for it.",
    name: "Deep Kalra",
    title: "Co-founder and ex-CEO, MakeMyTrip",
    image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/academy/make-my-trip-ceo.svg",
  },
  {
    quote: "You don't need a college degree to work at Tesla.",
    name: "Elon Musk",
    title: "CEO, Tesla Motors",
    image: "https://nxtwave-website-media-files.s3.ap-south-1.amazonaws.com/ccbp-website/academy/tesla-ceo.svg",
  },
  {
    quote: "What matters most is relevant skills, not degrees.",
    name: "Jeff Weiner",
    title: "Ex-CEO, LinkedIn",
    image: "https://nxtwave.imgix.net/ccbp-website/academy/linkedin-ceo.png",
  },
];

const PrevArrow = (props) => (
  <div
    onClick={props.onClick}
    className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer"
  >
    <ArrowLeft size={20} />
  </div>
);

const NextArrow = (props) => (
  <div
    onClick={props.onClick}
    className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md cursor-pointer"
  >
    <ArrowRight size={20} />
  </div>
);

const CEOQuotesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className=" py-12 px-4 sm:px-6 lg:px-8 flex items-center">
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {ceoQuotes.map((ceo, index) => (
            <div key={index} className="p-4">
              <div className="bg-white p-6 rounded-b-2xl shadow-sm border min-h-[230px] flex flex-col justify-between">
                <p className="text-gray-700 text-lg mb-6">"{ceo.quote}"</p>
                <div className="flex items-center gap-4">
                  <img
                    src={ceo.image}
                    alt={ceo.name}
                    className="w-12 h-12 rounded-full object-contain"
                  />
                  <div>
                    <p className="text-gray-900 text-lg font-semibold">
                      {ceo.name}
                    </p>
                    <p className="text-sm text-gray-500">{ceo.title}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
 
    
      </div>
    </div>
  );
};

export default CEOQuotesSlider;
