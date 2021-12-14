import React from 'react'
import data from '../../data/data';
import './Home.css';




const Home = () => {
    
    return (
        <div className="row">
          <div className="row-center">
            {data.products.map((product) => (
              <div key={product._id} className="card">
                <a href={`/product/${product._id}`}>
                  <img
                    className="medium"
                    src={product.image}
                    alt={product.name}
                  />
                </a>
                <div className="card-body">
                  <a href={`/product/${product._id}`}>
                    <h2>{product.name}</h2>
                  </a>
                  
                  <div className="price">${product.price}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
    )
}
export default Home;