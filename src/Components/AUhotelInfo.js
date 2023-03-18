import React from "react";
import { AUcarousal } from "./";
import cro1 from "../img/cro1.jpg";

const slides = [cro1, cro1, cro1, cro1, cro1];

// const slides = [
//   "https://images.unsplash.com/photo-1515668166700-4c11137632fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   "https://images.unsplash.com/photo-1515668166700-4c11137632fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   "https://images.unsplash.com/photo-1515668166700-4c11137632fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   "https://images.unsplash.com/photo-1515668166700-4c11137632fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
//   "https://images.unsplash.com/photo-1515668166700-4c11137632fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
// ];

const AUhotelInfo = () => {
  return (
    <>
      <div className="flex flex-col justify-evenly gap-3 md:flex-row">
        <div className="md:w-1/2 flex justify-center ">
          <div className="max-w-lg">
            <AUcarousal autoSlide={true}>
              {slides.map((s, index) => (
                <img key={index} src={s} alt="slider"/>
              ))}
            </AUcarousal>
          </div>
        </div>
        <div className="md:w-1/2 flex items-center text-center justify-center md:pr-16">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto,
            nam voluptatibus nulla consequatur exercitationem quaerat suscipit,
            consequuntur consectetur ea dicta hic laboriosam, voluptas
            temporibus obcaecati atque aliquid beatae iure? Odio!
          </p>
        </div>
      </div>
    </>
  );
};

export default AUhotelInfo;
