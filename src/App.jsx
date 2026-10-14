import Header from './componentes/Header/Header.jsx'
import Tarjeta from './componentes/Tarjeta/Tarjeta.jsx'
import Lista from './componentes/Lista/Lista.jsx'
import Boton from './componentes/Boton/Boton.jsx'
import { equipo } from './datos/equipo.js'
import './App.css'

export default function App() {
  function saludar() {
    alert('¡Hola, equipo!')
  }

  return (
    <main className="pagina">
      <Header titulo="Mi equipo de React" />

      <h2>1. Tres tarjetas con datos escritos directamente</h2>
      <div className="tarjetas">
        <Tarjeta nombre="Ana" rol="Desarrolladora" emoji="👩‍💻" />
        <Tarjeta nombre="Luis" rol="Diseñador" emoji="🎨" />
        <Tarjeta nombre="Sara" rol="Estudiante" emoji="🚀" />
      </div>

      <h2>2. Tarjetas creadas con la lista de equipo.js</h2>
      <Lista personas={equipo} />

      <h2>3. Botón reutilizable</h2>
      <Boton texto="Saludar" color="purple" onClick={saludar} />
    </main>
  )
}
