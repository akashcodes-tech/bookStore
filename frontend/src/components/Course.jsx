import React, { useState, useEffect } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";

const Course = () => {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl z-50 container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center text-center justify-center">
          <h1 className="text-2xl font-semibold md:text-4xl">
            We're delighted to have you&nbsp;
            <span className="text-pink-500">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim harum doloribus facilis veniam corrupti,
            pariatur commodi repudiandae earum exercitationem blanditiis voluptate nulla excepturi reprehenderit
            adipisci vitae repellendus tempora cum perspiciatis. Lorem ipsum, dolor sit amet consectetur adipisicing
            elit. Ullam officiis reiciendis nesciunt obcaecati
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 rounded-md text-white px-4 py-2 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 smx:w-[390px] w-full mx-auto">
          {book.map((item) => {
            return <Cards item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Course;
