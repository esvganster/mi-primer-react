import Tarjeta from '../Tarjeta/Tarjeta.jsx'
import './Lista.css'

export default function Lista({ personas }) {
  return (
    <ul className="lista">
      {personas.map((persona) => (
        <li key={persona.id}>
          <Tarjeta
            nombre={persona.nombre}
            rol={persona.rol}
            emoji={persona.emoji}
          />
        </li>
      ))}
    </ul>
  )
}
