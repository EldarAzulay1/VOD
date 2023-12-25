import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom';

export default function VodInPut() {
  let nameCatgroy = useRef();
  const nav = useNavigate();
  const onSearch = () => {
    let input_val = nameCatgroy.current.value;
    nav(`/?s=${input_val}`)
  
  }

  return (
    <div className='container-fluid inputMove'>
        <div className='container'>
            <div className='row'>
            <div className='logo col-auto text-white display-6'>My V.O.D</div>
            <nav className='d-flex col-6 p-2'>
                <input ref={nameCatgroy} placeholder='Search Your Moive ...' type='search' className='form-control'></input>
                <button onClick={onSearch} className='ms-2 btn btn-danger'>Search</button>
            </nav>
            </div>
        </div>
    </div>
  )
}
