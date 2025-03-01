import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-3 mx-1">
        <div className="card bg-base-100 w-96 shadow-xl border-2 hover:scale-105 duration-200">
          <figure className="h-48 flex justify-center items-center">
            <img
              src={item.image}
              alt="book"
              className="max-h-full max-w-full object-contain"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
