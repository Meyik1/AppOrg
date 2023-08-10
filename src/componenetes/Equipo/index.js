import "./Equipo.css"
import Colaborador from "../Colaborador"
import hexToRgba from "hex-to-rgba";


const Equipo = (props) => {

    const {colorprimario, colorsecundario, titulo,id} = props.datos
    const { colaboradores, eliminarColaborador, actualizarColor, like} = props

    const colorfondo = {
        backgroundColor: hexToRgba (colorprimario, 0.6)
    }

    const colortitulo ={
        borderColor: colorprimario
    }

    return <>
        { colaboradores.length > 0 &&
            <section className="equipo" style={colorfondo}>
                <input
                type="color"
                    className="input-color"
                    value={colorprimario}
                    onChange={(e) => {
                        actualizarColor(e.target.value, id)
                    }}
                />
                <h3 style={colortitulo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index) => <Colaborador
                        datos={colaborador} 
                        key={index} 
                        colorprimario={colorprimario}
                        eliminarColaborador={eliminarColaborador}
                        like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo