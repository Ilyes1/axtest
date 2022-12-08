import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';

function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(data => {
      console.log(data.data)
      setNews(data.data)
    })
  }, [])

  return (
    <div className="App">
      <div className="container my-5">
        <div className="row">

          {
            news.map((item) => {
              return (
                <div className="col-lg-4 col-md-6 mb-4" key={item.id}>
                  <div className="card" style={{ width: "100%" }}>
                    <img src="https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/db1a8a0b606830c3c9ca110ce77b44a1.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{item.id}</h5>
                      <p className="card-text">
                        {item.title}
                      </p>
                      <a href="#" className="btn btn-primary" target="blank">
                        View more
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
