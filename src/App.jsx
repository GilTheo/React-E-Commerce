import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="container-app">
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            path="/"
            element={<ItemListContainer greeting={"Bienvenidos a mi e-commerce!"} />} />
          <Route
            path="/category/:idCategory"
            element={<ItemListContainer greeting={"Hola Mundo!"} />} />
          <Route 
            path="/detail/:idProduct"
            element={<ItemDetailContainer />}>
          </Route>
          <Route
            path="*"
            element={ <div>Error 404 - Pagina no encontrada</div>}>

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
