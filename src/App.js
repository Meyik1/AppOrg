import { useState } from 'react';
import {v4 as uuid} from "uuid"
import './App.css';
import Header from './componenetes/Header/Header';
import Formulario from './componenetes/Formulario/Formulario';
import MiOrg from './componenetes/MiOrg';
import Equipo from './componenetes/Equipo';
import Footer from './componenetes/Footer';

function App() {

  const[Mostrarformulario,actualizarMostrar] = useState(false)
  const[colaboradores, actualizarcolaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "UX y Diseño",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav:false
  },
  {
    id: uuid(),
    equipo: "rpgramación",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Front End",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav:true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto:"https://github.com/harlandlohora.png",
    nombre:"Harland Lohora",
    puesto: "Instructor",
    fav:false
  },
])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo:"Programación",
      colorprimario:"#57C278",
      colorsecundario:"#D9F7E9"
    },
    {
      id: uuid(),
      titulo:"Front End",
      colorprimario:"#82CFFA",
      colorsecundario:"#E8F8FF"
    },
    {
      id: uuid(),
      titulo:"Data Science",
      colorprimario:"#A6D157",
      colorsecundario:"#F0F8E2"
    },
    {
      id: uuid(),
      titulo:"Devops",
      colorprimario:"#E06B69",
      colorsecundario:"#FDE7E8"
    },
    {
      id: uuid(),
      titulo:"UX y Diseño",
      colorprimario:"#DB6EBF",
      colorsecundario:"#FAE9F5"
    },
    {
      id: uuid(),
      titulo:"Móvil",
      colorprimario:"#FFBA05",
      colorsecundario:"#FFF5D9"
    },
    {
      id: uuid(),
      titulo:"Innovación y Gestión",
      colorprimario:"#FF8A29",
      colorsecundario:"#FFEEDF"
    }
  ])
  const cambiasMostrar = () => {
    actualizarMostrar(!Mostrarformulario)
  }

  //Registrar colaborador
  const registrarColaborador = (colaborador) => {
    actualizarcolaboradores([...colaboradores, colaborador])
  }

  const eliminarColaborador = (id) => {
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id)
    actualizarcolaboradores(nuevosColaboradores)
  }

  const crearEquipo = (nuevoEquipo) => {
    actualizarEquipos([...equipos,{...nuevoEquipo, id: uuid}])
  }

  const like = (id) => {
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarcolaboradores(colaboradoresActualizados)
  }

  //Actualizar color de equipo

  const actualizarColor = (color, id) => {
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorprimario = color
      }
      return equipo
    })

    actualizarEquipos(equiposActualizados)
  }

  return (
    <div>
      <Header />
      { 
        Mostrarformulario && <Formulario 
          equipos={equipos.map ((equipo) => equipo.titulo)}
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiasMostrar}/>
      
      {
        equipos.map( (equipo) => <Equipo
         datos={equipo} 
         key={equipo.titulo}
         colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
         eliminarColaborador = {eliminarColaborador}
         actualizarColor = {actualizarColor}
         like={like}
         />)

      }
      <Footer />
    </div>
  );
}

export default App;
