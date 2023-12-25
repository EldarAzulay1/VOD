import React, { useEffect, useState } from 'react'
import VodStrip from './vodStrip'
import VodInPut from './vodInPut'
import VodList from './vodList'
import Footer from './footer'
import axios from 'axios'
import { useSearchParams } from 'react-router-dom'

export default function Home() {
  const [querys] = useSearchParams();
  const [querysInfo] = useSearchParams();
  const [dataMovie , setData] = useState([]);
  
  useEffect(() => {
    let Sreach = querys.get("s") || "batman";
    console.log(Sreach)
    doApi(Sreach);
  },[querys , querysInfo])

  const doApi =  async (name) => {
    console.log(name)
      let urlMovie = `https://www.omdbapi.com/?s=${name}&apikey=33951267`
      let resp = await axios.get(urlMovie);
      setData(resp.data.Search)
    }




  return (
    <React.Fragment>
        <VodInPut/>
        {dataMovie &&  <VodList listMovieApi={dataMovie}/>}
    </React.Fragment>
  )
}
