import React from "react"
import "./landingpage.css"
import photo from "../../assets/photo.jpg"
import ItemListContainer from "../ItemListContainer/ItemListContainer"

const LandingPage = ({ greeting, product, title }) => {
  return (
    <div>
      <div className="image-container" style={{ backgroundImage: `url(${photo})` }}>
        <h2 className="text-overlay">{greeting}</h2>
      </div>
      <h2 className="title">{title}</h2>
      <ItemListContainer product={product} />
    </div>
  )
}

export default LandingPage
