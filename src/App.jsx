import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
// import Contador from './components/Ejemplos/Contador'
// import ComponentePadre from './components/Ejemplos/ComponentePadre'
import './App.css'

function App() {

  return (
    <div className='container-app'>
      <NavBar/>
      <ItemListContainer greeting={'bienvenidos a mi e-commerce'} />
    </div>
  )
}

export default App
