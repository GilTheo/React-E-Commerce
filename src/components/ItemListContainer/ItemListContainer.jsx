import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";
import { getProducts } from "../../data/data.js";
import ItemList from "./ItemList.jsx";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();
  
  useEffect(() => {
    getProducts()
      .then((data) => {
        if (idCategory) {
          const filterProducts = data.filter(
            (product) => product.category === idCategory
          );
          setProducts(filterProducts);
        } else {
          setProducts(data);
        }
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("finalizo la promesa");
      });
  }, [idCategory]);

  return (
    <div>
      <h2>{greeting}</h2>
      <ItemList products={products} />
    </div>
  );
};

export default ItemListContainer;
