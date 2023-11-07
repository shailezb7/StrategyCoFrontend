import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Components/Home'
import CardDiv from '../Components/CardDiv'
import MovieDetails from '../Components/MovieDetails'

const AllRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/card' element={<CardDiv/>}/>
        <Route path='/details' element={<MovieDetails/>}/>
    </Routes>
  )
}

export default AllRoutes