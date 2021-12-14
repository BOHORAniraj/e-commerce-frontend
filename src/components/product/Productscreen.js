import React from 'react'
import data from '../../data/data'
import { useParams } from 'react-router'
import './Productscreen.css'

export default function Productscreen() {
    const { id } = useParams();
    const product = data.products.find((x) => x._id === id);
    if (!product) {
        return <div>PRODUCT NOT FOUND</div>
    }
    return (
        <div>
            <div className="row top">
                <div className="col-2">
                <img className="large" src={product.image} alt={product.name}></img>

                </div>
                <div className="col-1">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            price: ${product.price}
                        </li>
                        <li>
                            Description:<p>{product.description }</p>
                        </li>
                    </ul>

                </div>
                <div className="col-3">
                    <div className="card card-body">
                        <ul>
                            <li>
                                <div className="row">
                                    <div>Status </div>


                                </div>
                            </li>
                        </ul>


                    </div>

                </div>
            </div>
        </div>
    )
}
