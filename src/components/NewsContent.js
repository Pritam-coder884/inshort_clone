import React from 'react'
import {Container} from "@material-ui/core";
import NewsCard from './NewsCard';
import "./NewsContent.css";
const NewsContent = ({newsArray,newsResults,loadMore,setLoadMore}) => {
  return (
    <Container maxWidth="md">
        <div className='content'>
            <div className='red'>
              <span>For the best experience use <span className='inshorts'>inshorts</span> app on your smartphone</span>
            </div>
           {newsArray.map((newsItem)=>
           <NewsCard newsItem={newsItem} key={newsItem.title}/>
           )}
            {loadMore <= newsResults && (
          <>
            <hr />
            <button
              className="loadMore"
              onClick={() => setLoadMore(loadMore + 20)}
            >
              Load More
            </button>
          </>
        )}
        </div>
    </Container>
  )
}

export default NewsContent