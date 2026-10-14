import './Boton.css'

export default function Boton({ texto, color, onClick }) {
  return (
    <button
      type="button"
      className="boton"
      style={{ backgroundColor: color }}
      onClick={onClick}
    >
      {texto}
    </button>
  )
}
