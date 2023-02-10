import React from 'react'
import { Link } from 'react-router-dom';

function Biblioteca() {
  return (
    <div>
      <h1>Biblioteca</h1>
      <Link to="/biblioteca/formulario">Agregar Nuevo Libro</Link>
    </div>
  )
}

export default Biblioteca;
