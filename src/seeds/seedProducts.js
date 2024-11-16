import db from "../db/db.js";
import { addDoc, collection } from "firebase/firestore";

const products = [
    {
      id: "daga685f",
      name: "sillon",
      description:"",
      stock: 4,
      price: 470,
      image: "/img/sillon.jpg",
      category: "living",
    },
    {
      id: "hdsj432d",
      name: "rack de television",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 2,
      price: 400,
      image: "/img/tv-rack.jpg",
      category: "living",
    },
    {
      id: "fmsuh455",
      name: "mesa de estar",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 3,
      price: 360,
      image: "/img/mesa-de-estar.jpg",
      category: "living",
    },
    {
      id: "43dgdsv5",
      name: "mesa de vidrio",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 6,
      price: 150,
      image: "/img/mesa-vidrio.jpg",
      category: "comedor",
    },
    {
      id: "nud897h",
      name: "mesa de madera",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 4,
      price: 140,
      image: "/img/mesa-madera.jpg",
      category: "comedor",
    },
    {
      id: "kjah7634h",
      name: "sillas",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 16,
      price: 85,
      image: "/img/silla.jpg",
      category: "comedor",
    },
    {
      id: "3fdfy4234",
      name: "armario",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 5,
      price: 170,
      image: "/img/armario.jpg",
      category: "dormitorio",
    },
    {
      id: "fry356tt",
      name: "escritorio industrial",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 7,
      price: 190,
      image: "/img/escritorio.jpg",
      category: "dormitorio",
    },{
      id: "fju8717n",
      name: "escritorio de madera",
      description:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
      stock: 4,
      price: 170,
      image: "/img/escritorio-madera.jpg",
      category: "dormitorio",
    },
];
  
const seedProducts = () => {
    const productsRef = collection(db, "products")
    products.map(({id, ...dataProduct}) => {
        addDoc(productsRef, dataProduct)
    })

    console.log("productos subidos")
    return
}

seedProducts()