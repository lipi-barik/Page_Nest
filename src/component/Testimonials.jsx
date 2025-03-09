import React from "react";
import Slider from "react-slick";

const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "A book lover's paradise! Found rare editions at reasonable prices. Wonderfulll",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Priya S.",
    text: "The website is user-friendly, and the delivery was super fast. Will shop again!                           ",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Sachin ",
    text: "A fantastic collection of books and a seamless ordering experience. Highly recommended!",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-orange-900">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-500">
            "See what our happy customers have to say about their experience with us!"
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                  <div className="my-6">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl bg-orange-100 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 ">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      {/* <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p> */}
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;