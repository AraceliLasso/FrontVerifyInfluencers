import '../styles/FormStyles.css'
const Formulario = () => {
    return (
        <form>
            {/* nombre */}
            <label htmlFor="nombre">Nombre</label>
            <input type="text" />

            {/* Edad */}
            <label htmlFor="edad">Edad</label>
            <input type="number" />

            {/* Pais */}
            <label htmlFor="pais">País</label>
            <input type="text" />

            {/* correo */}
            <label htmlFor="correo">Correo</label>
            <input type="email" />

            {/* Color favorito */}
            <label htmlFor="colorFavorito">Elige tu color favorito:</label>
            <input type="color" id="colorFavorito" name="colorFavorito" />

            {/* Animal */}
            <label htmlFor="animal">Animal favorito</label>
            <input type="text" />

            {/* Deseo */}
            <label htmlFor="deseo">Cuéntame qué quieres para Navidad:</label>
            <textarea id="deseo" rows="5" cols="30" placeholder="Escribe aquí tu deseo..." />

            <button type="submit">Enviar</button>
        </form>
    )
}
export default Formulario;