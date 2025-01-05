import Formulario from "./components/Formulario"
import "./styles/AppStyles.css"

function App() {

  return (
    <div className="background-container">
    <div className="content">
      <h2>Envíale la carta a Papá Noel</h2>
      <p className="mensaje-navidad">¡Feliz Navidad!</p>
    </div>

    <div>
      <Formulario /> {/* Aquí estamos usando el componente Formulario */}
    </div>
    
    {/* Crédito al autor del patrón */}
    <p className="credit">
      Background by <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a>
    </p>
  </div>
  )
}

export default App
