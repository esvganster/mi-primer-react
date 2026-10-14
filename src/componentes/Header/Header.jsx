import './Header.css'

export default function Header({ titulo }) {
  return (
    <header className="cabecera">
      <h1>{titulo}</h1>
      <p>Práctica de componentes y props</p>
    </header>
  )
}
