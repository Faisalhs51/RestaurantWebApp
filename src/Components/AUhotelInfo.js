import React from "react";
import { AUcarousal } from "./";
import s1 from "../img/s1.jpeg";
import s2 from "../img/s2.jpeg";
import s3 from "../img/s3.jpeg";
import s4 from "../img/s4.jpeg";
import s5 from "../img/s5.jpeg";

const slides = [s1, s2, s3, s4, s5];

const AUhotelInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly gap-3 md:flex-row">
        <div className="md:w-1/2 flex justify-center ">
          <div className="max-w-[30rem]">
            <AUcarousal autoSlide={true}>
              {slides.map((s, index) => (
                <img key={index} src={s} alt="slider" />
              ))}
            </AUcarousal>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center text-center justify-center md:pr-16">
          {/* <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            nam voluptatibus nulla consequatur exercitationem quaerat suscipit,
            consequuntur consectetur ea dicta hic laboriosam, voluptas
            temporibus obcaecati atque aliquid beatae iure? Odio!
          </p> */}
          <p>
            Nestled in the heart of the city, this restaurant offers a culinary
            experience like no other. With a menu that boasts a tantalizing
            array of dishes crafted with the freshest ingredients, every bite is
            a flavor explosion that will tantalize your taste buds. What sets
            this restaurant apart is their unique way of ordering food and
            paying bills - through a user-friendly app that makes the entire
            process seamless and efficient. From the moment you walk in, you are
            greeted with a warm smile and an ambiance that immediately puts you
            at ease. Whether you are in the mood for a hearty meal or a light
            snack, this restaurant has something for everyone. Each dish is
            prepared with utmost care and attention to detail, ensuring that
            every element of the dish is perfectly balanced. As you take your
            first bite, you will be transported to a world of culinary bliss
            that is truly unforgettable. So, if you're looking for a restaurant
            that offers delicious food and a hassle-free way to order and pay,
            look no further than this gem in the heart of the city.
          </p>
        </div>
      </div>
    </>
  );
};

export default AUhotelInfo;
