import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=*&apiKey=2150c751ae4b4ce497da11d3c3456293').then(data => {
      setNews(data.data.articles)
    })
  }, [])

  return (
    <div className="App">
      <div className="container my-5">
        <div className="row">

          {
            news.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4">
                  <div className="card" style={{ width: "100%" }}>
                    <img src={item.urlToImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.title}</h5>
                      <p className="card-text">
                        {item.description}
                      </p>
                      <a href={item.url} className="btn btn-primary" target="blank">
                        {item.source.name}
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
          }
          
          

        </div>
      </div>
    </div>
  );
}

export default App;
