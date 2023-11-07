import { Box, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useNavigate } from 'react-router-dom';

const CardDiv = ({e}) => {

   
    const navigate = useNavigate();

    const posterPath = e.poster_path;
    const baseUrl = "https://image.tmdb.org/t/p/";
    const posterSize = "w300";
    const fullPosterUrl = baseUrl +posterSize + posterPath;

    let detailsFn= ()=>{
       localStorage.setItem("id",e.id);
       localStorage.setItem("path",e.poster_path);
   
       navigate('/details')
    }

  return (
    <Box onClick={detailsFn} maxW={'600px'} boxShadow={'0 0 5px yellow'} textAlign={'center'} bg={'crimson'}
    p={'20px'} borderRadius={'10px'} >
        <Heading fontWeight={'bold'} color={'yellow'} my={'10px'} as='h4' size='md'>{e.title}</Heading>
        <Image src={fullPosterUrl} margin={'auto'} my={'10px'} borderRadius={'10px'}/>
        <Text fontWeight={'bold'} color={'yellow'} my={'10px'}>Rating : {e.vote_average}</Text>
        <Text fontWeight={'bold'} color={'yellow'} my={'10px'}>Release Date : {e.release_date}</Text>
    </Box>
  )
}

export default CardDiv