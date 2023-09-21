/* eslint-disable react/prop-types */
import React from 'react';
import { BlogContent } from '../component'

const BlogContentPage = ({blogs}) => {

  return (
    <div>
      <BlogContent blogs={blogs} />
    </div>
  )
}

export default BlogContentPage