import { useState } from 'react'
import NombreApellido from './components/NombreApellido'
import DatosPersonales from './components/DatosPersonales'
import Estudios from './components/Estudios'
import CursosRealizados from './components/CursosRealizados'
import HabilidadesBlandas from './components/HabilidadesBlandas'
import HabilidadesTecnicas from './components/HabilidadesTecnicas'
import Contacto from './components/Contacto'
import Experiencia from './components/Experiencia'
import ReferenciasPersonales from './components/ReferenciasPersonales'
import './App.css'
function App() {
  return (
    <div className="contenedor">
      <div className='left-column'>
      <NombreApellido />
      <DatosPersonales />
     <HabilidadesTecnicas />
     <HabilidadesBlandas />
     <Contacto />
      </div>
      <div className='right-column'>
       <Estudios />
      <CursosRealizados />
      <Experiencia />
      <ReferenciasPersonales />
      
      


      
      </div>
    </div>
  );
}

export default App;
