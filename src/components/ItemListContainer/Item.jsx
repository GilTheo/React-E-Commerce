import React from "react";
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={product.image} />
        <div className="card-content">
          <h2>{product.name}</h2>
          <p className="precio">Precio: ${product.price}</p>
            <Link to={ "/detail/" + product.id } className="card-div">  
              <btn className="detalle">Detalles</btn>
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
