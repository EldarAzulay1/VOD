import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function More_info() {
  const [infoMovie , setInfo] = useState([])
  const nav = useNavigate();
  const params = useParams();
  useEffect(() => {
    doApi();
  },[])

  const doApi = async () => {
    const imbdId = params["id"];
    let urlInfo = `https://www.omdbapi.com/?i=${imbdId}&apikey=33951267`;
    let GetInfo = await axios.get(urlInfo);
    setInfo(GetInfo.data);
  }

  const backListVideo = () => {
    nav(-1)
  }

  return (
    <div className='container-fluid'>
      <div className='container'>
        <div className='border shadow m-3 overflow-hidden'>
        <img src={infoMovie.Poster} className='p-md-2 col-md-5 col-lg-3   float-md-start rounded mx-auto d-block mt-2'></img>
          <h1 className='text-center mt-4 '>{infoMovie.Title}</h1>
          <h4 className='text-center mt-4 p-2 text-capitalize text-danger mx-auto'>{infoMovie.Plot}</h4>
          <h6 className='text-center mt-5'>Genre: {infoMovie.Genre}</h6>
          <h6 className='text-center'>Released: {infoMovie.Released}</h6>
          <h6 className='text-center'>Runtime: {infoMovie.Runtime}</h6>
          <button onClick={backListVideo} class="btn btn-default float-end">
     <img src="https://potierstone.be/wp-content/themes/potierstone/assets/images/buttons/right.png" className='w-50'/>
</button>
        </div>
      </div>

    </div>
  )
}
