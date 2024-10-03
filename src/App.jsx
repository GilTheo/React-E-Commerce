import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Contador from './components/Ejemplo/Contador'
import ComponentePadre from './components/Ejemplo/ComponentePadre'
import './App.css'

function App() {

  return (
    <div>
      <h1>Hola Mundo</h1>
      <NavBar/>
      <ItemListContainer/>
      <Contador/>
      <ComponentePadre>
        <h2>Hola soy componente padre</h2>
      </ComponentePadre>
    </div>
  )
}

export default App
