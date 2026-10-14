import './Tarjeta.css'

export default function Tarjeta({ nombre, rol, emoji }) {
  return (
    <article className="tarjeta">
      <span className="emoji" aria-hidden="true">{emoji}</span>
      <h3>{nombre}</h3>
      <p>{rol}</p>
    </article>
  )
}
