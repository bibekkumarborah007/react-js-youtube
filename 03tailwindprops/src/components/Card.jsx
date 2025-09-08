//ext react snippets rfce

import React from "react";

function Card({ username, btnText = "Visit Me", imgURL }) {
  // console.log("props", props);
  console.log(username);
  return (
    <div className="relative h-[400px] w-[300px] rounded-md overflow-hidden">
      {/* Background Image */}
      <img
        // src="{https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=60}"
        src={imgURL}
        alt="Airmax Pro"
        className="h-full w-full object-cover rounded-md"
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />

      {/* Content */}
      <div className="absolute bottom-4 left-4">
        <h1 className="text-lg font-semibold text-white">{username}</h1>
        <p className="mt-2 text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
          aperiam?
        </p>
        <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
          {/* {btnText || "Visit Me"} */}
          {btnText}
        </button>
      </div>
    </div>
  );
}

export default Card;

//function Card(props) {
// console.log("props", props);
// console.log(props.username);
