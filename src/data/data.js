const products = [
  {
    id: "daga685f",
    name: "sillon",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
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
    id: "43dgdsv5",
    name: "mesa",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
    stock: 6,
    price: 150,
    image: "/img/mesa.jpg",
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
    name: "escritorio",
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis assumenda nemo error! Esse, praesentium quia. Autem repellendus debitis obcaecati libero quia, quidem quibusdam ipsum officia, accusantium officiis mollitia? Vel, laborum.",
    stock: 7,
    price: 190,
    image: "/img/escritorio.jpg",
    category: "dormitorio",
  },
];

const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export { getProducts };
