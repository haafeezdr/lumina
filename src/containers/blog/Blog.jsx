import React from 'react';
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports';

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>

      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>Join Our Massive Sells <br /> We are blogging about it.</h1>
      </div>

      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          <Article imageUrl={blog01} date="Sep 26, 2021" title="This is our best selling product for today. 5 units sold in last 24 hours  a true game-changer that has captured the hearts of customers nationwide..Engineered with precision and crafted with top-notch materials, it boasts unmatched quality, delivering an unparalleled user experience... " />
          
        </div>
        <div className='gpt3__blog-container_groupB'>
          <Article imageUrl={blog02} date="Sep 26, 2021" title="4  units sold in last 24 hours" />
          <Article imageUrl={blog03} date="Sep 26, 2021" title="4 units sold in last 24 hours" />
          <Article imageUrl={blog04} date="Sep 26, 2021" title="3 units sold in last 24 hours" />
          <Article imageUrl={blog05} date="Sep 26, 2021" title="2 units sold in last 24 hours" />
        </div>
      </div>
    </div>
  )
}

export default Blog