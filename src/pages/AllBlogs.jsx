import React from "react";
import { Blogs } from "../component";
const AllBlogs = ({ blogs }) => {
  return (
    <>
      <Blogs blogs={blogs ? blogs : ""} />
    </>
  );
};

export default AllBlogs;
