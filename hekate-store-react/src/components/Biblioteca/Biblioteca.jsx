import React, {useEffect} from 'react'
import { Link } from 'react-router-dom';
import {allBooks} from '../../redux/reducers/books/bookSlice'
import {useDispatch, useSelector} from 'react-redux'

function Biblioteca() {
  const dispatch = useDispatch()
  const books = useSelector( state => state.books)
  console.log('Este es el estado global antes '+books)
  useEffect(()=>{
    dispatch(allBooks());
    },[dispatch])
    console.log('Este es el estado global despues '+books)
  return (
    <div>
      <h1>Biblioteca</h1>
      <p>{books}</p>
      <Link to="/biblioteca/formulario">Agregar Nuevo Libro</Link>
    </div>
  )
}

export default Biblioteca;
