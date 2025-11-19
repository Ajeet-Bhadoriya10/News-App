import React, { useState } from 'react';

function NewsSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [articles, setArticles] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchTerm.trim() === '') return;

    let url = `https://newsapi.org/v2/top-headlines?country=in&category=${searchTerm}&apiKey=YOUR_API_KEY`;

    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(parsedData.articles);
  };

  return (
    <div className="container my-3">
      <form className="d-flex" onSubmit={handleSubmit}>
        <input
          className="form-control me-2"
          type="search"
          placeholder="Search category..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className="btn btn-outline-primary" type="submit">
          Search
        </button>
      </form>

      <div className="row">
        {articles.map((article, index) => (
          <div className="col-md-4" key={index}>
            <div className="card my-3">
              <img src={article.urlToImage} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{article.title}</h5>
                <p className="card-text">{article.description}</p>
                <a href={article.url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default NewsSearch;
