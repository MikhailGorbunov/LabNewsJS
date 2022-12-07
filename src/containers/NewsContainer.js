import React, { useEffect, useState } from 'react';
import NewsList from '../components/NewsList';
import TitleBar from '../components/TitleBar';

const NewsContainer = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    loadNews()
  }, [])

  const loadNews = function () {
    fetch('https://content.guardianapis.com/search?api-key=1e0a047a-7446-4c7d-a63b-3f9f62c210db')
      .then(res => res.json())
      .then(news => setNews(news.response.results))
      .catch(err => console.error);
  }

  const handleSelectChange = event => {
    loadSongs(event.target.value);
  }

  return (
    
    <div className="main-container">
      <TitleBar
        smt={smt}
        handleSelectChange={handleSelectChange}
      />
      <NewsList
        news={news}
        handleSelectChange={handleSelectChange}
      />
    </div>
   
  )
}

export default NewsContainer;