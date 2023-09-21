/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { Blogs, Landing, NewsList, Content } from '../component'

const Homepage = ({blogs}) => {
  return (
    <div>
      <Landing/>
      <Blogs blogs={blogs} />
      <Content/>
    </div>
  )
}

export default Homepage