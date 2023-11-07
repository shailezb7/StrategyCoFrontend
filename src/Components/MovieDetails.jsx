import { Container, Heading, Image, Text } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MovieDetails = () => {

  let id=localStorage.getItem("id");
  let [details,setDetails] = useState({});

  const posterPath = localStorage.getItem("path");
  const baseUrl = "https://image.tmdb.org/t/p/";
  const posterSize = "w300";
  const fullPosterUrl = baseUrl +posterSize + posterPath;
  // console.log(posterPath)

  let getDetails=async () =>{
        let resp = await axios.get(`https://strategyco-backend.onrender.com/movieData/${id}`)
       console.log(resp.data.msg);
       let data=resp.data.msg;
       setDetails(data);
  }

  useEffect(()=>{
    getDetails();
  },[])

  return (
    <Container maxW={'600px'} boxShadow={'0 0 10px yellow'} textAlign={'center'} bg={'crimson'}
    p={'20px'} borderRadius={'10px'} my={'25px'}>
      <Heading color={'yellow'}>{details.title}</Heading>
      <Image src={fullPosterUrl} margin={'auto'} my={'10px'} borderRadius={'10px'}/>
      <Text fontWeight={'bold'} color={'yellow'} my={'10px'}>Rating : {details.vote_average}</Text>
      <Text fontWeight={'bold'} color={'purple'}  my={'10px'}>Release Date : {details.release_date}</Text>
      <Text fontWeight={'bold'} color={'yellow'} my={'10px'}>Revenue : ${details.revenue}</Text>
      <Text fontWeight={'bold'} color={'purple'} my={'10px'}>Runtime : {details.runtime} minutes</Text>
      <Text fontWeight={'bold'} color={'yellow'} my={'10px'}>Overview : {details.overview}</Text>
    </Container>
  )
}

export default MovieDetails