import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListoOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre,actualizarnombre] = useState ("")
    const [puesto,actualizarpuesto] = useState ("")
    const [foto,actualizarfoto] = useState ("")
    const [equipo,actualizarequipo] = useState ("")
    const [titulo,actualizarTitulo] = useState("")
    const [color,actualizarColor] = useState("")

    const { registrarColaborador, crearEquipo } = props

    const   manejarEnvio = (e) => {
        e.preventDefault()
        let datoAEnviar = {
            nombre,
            puesto,
            foto,
            equipo
        }
        props.registrarColaborador(datoAEnviar)
    }

    const manejarNuevoEquipo = (e) => {
        e.preventDefault()
        crearEquipo({titulo, colorprimario: color})

    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellene el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar nombre" 
                required 
                valor={nombre} 
                actualizarvalor={actualizarnombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar puesto" 
                required
                valor={puesto} 
                actualizarvalor={actualizarpuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de foto" 
                required
                valor={foto} 
                actualizarvalor={actualizarfoto}
            />
            <ListaOpciones
                valor={equipo} 
                actualizarequipo={actualizarequipo}
                equipos={props.equipos}
            />
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellene el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required 
                valor={titulo} 
                actualizarvalor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el Color Hex" 
                required
                valor={color} 
                actualizarvalor={actualizarColor}
                type="color"
            />
            <Boton>
                Registrar equipo
            </Boton>
        </form>
        </section>
}

export default Formulario