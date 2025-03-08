import React, { useState } from 'react';
import Navbar from './Navbar';
import Testimonial from './Testimonials';
import Footer from './Footer';
import book1 from '../assets/book1.jpg' ;
import book2 from '../assets/book2.jpg';
import book3 from '../assets/book3.jpg';
import Allbooks from './Allbooks';
import Bestbook from './Bestbook';

const ImageList = [
  {
    id: 1,
    img: book1,
    title: "His Life will forever be Changed",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: book2,
    title: "Who's there",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: book3,
    title: "Lost Boy",
    description:
      "Lost Boy, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Herosection = () => {
  const[imageId,setImageId]= useState(book2);
  const[title,setTitle]= useState("His Life will forever be Changed");
  const [description,setDescription]=useState("Lorem ipsum dolor sit amet consectetur adipisicing elit" );

  return (
    < >
    <Navbar/>
    <div className=" sm:min-h-[650px] overflow-hidden justify-center items-center min-h-screen flex flex-col md:flex-row  p-4 md:p-0 bg-[url('/src/assets/bg2.jpg')] bg-no-repeat bg-cover bg-center bg-fixed relative w-full h-full">
      <div className="bg-gradient-to-r from-gray-900/50 to-black backdrop-blur-xs  w-screen h-screen ">
      <div className='container pb-8 sm:pb-0'>
          <div className='grid grid-cols-1 sm:grid-cols-2 '>
              {/* text-content */}
              <div data-aos-once="true"
              className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2 sm:order-1 ml-12 mt-[25vh]">
                <h1 className='  data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true" text-5xl sm:text-6xl lg:text-7xl font-bold text-stone-200 '>{title}
                  <p className='bg-clip-text text-sm  text-white'>By Anonymous</p>
                </h1>
                <p className='text-sm sm:text-base text-amber-100'>{description}</p>
                <div>
                  <button className='px-4 py-2 rounded-md mt-5 bg-orange-200 hover:scale-105 duration-200'>Order Now</button>
                </div>
              </div>


         {/* img-content */}
         <div className="min-h-[300px] sm:min-h-[450px] flex justify-center items-center relative order-1 sm:order-2 ">
              <div className="h-[300px] sm:h-[450px] overflow-hidden flex ">
                <img
                  data-aos="zoom-in"
                  data-aos-once="true"
                  src={imageId}
                  alt="biryani img"
                  className="w-[300px] lg:h-[300px] sm:h-[400px] sm:w-[450px] sm:scale-125 object-contain mt-24"
                />
              </div>
              <div className="flex lg:flex-col lg:top-[240px] lg:-translate-y-1/2 lg:py-2 justify-center gap-5 absolute -bottom-[50px] lg:right-8 rounded-full">
                {ImageList.map((item) => (
                  <img
                    data-aos="zoom-in"
                    data-aos-once="true"
                    src={item.img}
                    onClick={() => {
                      setImageId(
                        item.id === 1 ? book1 : item.id === 2 ? book2 : book3
                      );
                      setTitle(item.title);
                      setDescription(item.description);
                    }}
                    alt="biryani img"
                    className="max-w-[100px] h-[100px] object-contain inline-block hover:scale-110 duration-200"
                  />
                ))}
              </div>
            </div>

          </div>
      </div>
      </div>
    </div>
    <Bestbook/>
    <Allbooks/>
    <Testimonial/>
    <Footer/>
    </>
  );
}

export default Herosection;
