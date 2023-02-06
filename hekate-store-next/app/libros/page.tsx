import React from 'react'
import Link from 'next/link'
function Libros() {
  return (
    <div>
      <h2>libros</h2>
      <Link href="/libros/nuevolibro">Agregar un nuevo libro</Link>
    </div>
  )
}

export default Libros
