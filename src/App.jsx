import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div className="background-container">
    <div className="content">
      <h2>Envíale la carta a Papá Noel</h2>
      <p class="mensaje-navidad">¡Feliz Navidad!</p>
    </div>
    
    {/* Crédito al autor del patrón */}
    <p className="credit">
      Background by <a href="https://www.svgbackgrounds.com/set/free-svg-backgrounds-and-patterns/">Free SVG Backgrounds and Patterns by SVGBackgrounds.com</a>
    </p>
  </div>
  )
}

export default App
