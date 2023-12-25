import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function VodItem(props) {
  const params = useParams();
  const nav = useNavigate()
  const nextPage = (id) => {
    nav(`/info/${id}`)

  }
 
  return (
    <div className='col-lg-4 col-md-5  p-2'>
      <div className=' border h-100 p-2 overflow-hidden shadow'>
        <img src={props.movie.Poster} className='float-start me-2 w-25'></img>
        <h3 >{props.movie.Title}</h3>
        <div className='text-dark'>Year: {props.movie.Year}</div>
        <button onClick={() => nextPage(props.movie.imdbID)}  className='btn btn-danger '>More info..</button>
      </div>
    </div>
  )
}
