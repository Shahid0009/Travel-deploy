/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const Blogs = ({ blogs }) => {
  return (
    <>
      <div className="mt-20 flex items-center justify-center font-poppins text-5xl">
        <h1 className="md:font-bold font-[smaller] font-semibold">Some Of The Fetured Travel Blogs</h1>
      </div>
      <div className="w-full bg-[#ffff] py-[50px]">
        <div className="max-w-[1240px] mx-auto">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black">
            {blogs.data.map((blog) => (
              <Link key={blog.id} to={`/blog/${blog.id}`}>
                <div className="bg-white rounded-xl overflow-hidden drop-shadow-md">
                  <img
                  loading="lazy"
                    className="h-56 w-full object-cover"
                    src={`${blog.attributes.image.data.attributes.url}`}
                  />
                  <div className="p-8">
                    <h3 className="font-bold text-2xl my-1">
                      {blog.attributes.Title}
                    </h3>
                    <p className="text-gray-600 text-xl">
                      {blog.attributes.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
