import React from 'react'
import VodItem from './vodItem'

export default function VodList(props) {

  return (
    <div className='container-fluid vodList '>
        <div className='container'>
            <h2 className='display-4 text-center'>Movie List</h2>
            <div className='row mt-3 justify-content-center'>
              {props.listMovieApi.map(item => {
                return (
               <VodItem key={item.imdbID} movie={item}></VodItem>
                )
              })}
            </div>
        </div>

    </div>
  )
}
