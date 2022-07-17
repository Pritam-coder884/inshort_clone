import axios from 'axios';
import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsContent from './components/NewsContent';
import Footer from "./components/Footer";

function App() {
  const [category,setCategory]=useState("general");
  const [newsArray,setNewsArray]=useState([]);
  const [newsResults,setnewsResults]=useState();
  const [loadMore,setLoadMore]=useState(20);
  const newsapi=async()=>{
    try{
      const news=await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_API_KEY}&category=${category}`);
      setNewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    }
    catch(error){
      console.log(error);
    }
  }
  useEffect(()=>{
    newsapi();
  },[newsResults,category]);
  return (
    <div className="App">
      <Navbar setCategory={setCategory}/>
      <NewsContent newsArray={newsArray}
      newsResults={newsResults}
      loadMore={loadMore}
      setLoadMore={setLoadMore}
      />
      <Footer />
    </div>
  );
}

export default App;
