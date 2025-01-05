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

            {/* País */}
            <label htmlFor="pais">País</label>
            <select>
                <option value="ar">Argentina</option>
                <option value="bo">Bolivia</option>
                <option value="br">Brasil</option>
                <option value="cb">Cuba</option>
                <option value="cl">Chile</option>
                <option value="cm">Colombia</option>
                <option value="cr">Costa Rica</option>
                <option value="do">República Dominicana</option>
                <option value="ec">Ecuador</option>
                <option value="gt">Guatemala</option>
                <option value="hn">Honduras</option>
                <option value="ht">Haití</option>
                <option value="mx">México</option>
                <option value="ni">Nicaragua</option>
                <option value="pa">Panamá</option>
                <option value="pe">Perú</option>
                <option value="pr">Paraguay</option>
                <option value="prico">Puerto Rico</option>
                <option value="sal">El Salvador</option>
                <option value="uy">Uruguay</option>
                <option value="ve">Venezuela</option>
            </select>


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

            {/* Imagen */}
            <p>¿Tienes una imagen de lo que quieres?</p>
            <label htmlFor="imagen">¡Maravilloso! Muestrame</label>
            <input type="file"/>

            <button type="submit">Enviar</button>
        </form>
    )
}
export default Formulario;