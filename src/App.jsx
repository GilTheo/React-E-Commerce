import NavBar from "./components/NavBar/NavBar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { CartContext, CartProvider } from "./context/CartContext"
import LandingPage from "./components/LandingPage/LandingPage"
import Cart from "./components/Cart/Cart"
import "./App.css"

function App() {
	return (
		<div className="container-app">
			<BrowserRouter>
				<CartProvider>
					<NavBar />

					<Routes>
						<Route path="/" element={<LandingPage greeting="Bienvenidos a mi e-commerce!" title={"Productos Destacados"} />} />
						<Route path="/category/:idCategory" element={<ItemListContainer title={"Productos en Categoria"} />} />
						<Route path="/detail/:idProduct" element={<ItemDetailContainer />}></Route>
						<Route path="/cart" element={<Cart />} />
						<Route path="*" element={<div>Error 404 - Pagina no encontrada</div>}></Route>
					</Routes>
				</CartProvider>
			</BrowserRouter>
		</div>
	)
}

export default App
