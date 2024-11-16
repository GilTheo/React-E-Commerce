import { Link } from "react-router-dom"

const Item = ({ product }) => {
  return (
    <div className="card-container">
      <div className="card">
        <img src={product.image} />
        <div className="card-content">
          <h2>{product.name}</h2>
          <p className="precio">Precio: ${product.price}</p>
          <div className="detail-buttons-container">
            <Link to={"/detail/" + product.id} className="card-div">
              <button className="detalle">Detalles</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Item
