import { Box, Heading, Input, SimpleGrid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import CardDiv from './CardDiv';

const Home = () => {

    let [movies, setMovies] = useState([]);
    let [search,setSearch]=useState('');

    let getMovies = async () => {
        let resp = await axios.get('https://strategyco-backend.onrender.com/allMovies');
        // console.log(resp.data.msg.results);
        let data = resp.data.msg.results;
        setMovies(data);
    }


    const debounce = (func, delay) => {
        let timeoutId;
        return (...args) => {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            func(...args);
          }, delay);
        };
      };
    

    let debounced = debounce(async (value)=>{
       try {
        let resp = await axios.get(`https://strategyco-backend.onrender.com/search?query=${value}`);
        let data=resp.data.msg.results;
        console.log(data);
        setMovies(data);
       } catch (error) {
        console.log('error:',error);
       }
    },1000)

    let handleSearch=async (e)=>{
        let value=e.target.value;
        // console.log(data);
        setSearch(value);
        debounced(value);  
    }

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <>
            <Box w={'100vw'} height={'120px'} bg={'rgb(247,184,1)'} position={'fixed'} p={'10px'} textAlign={'center'}>
               <Heading color={'purple'}>Movie App</Heading>
               <Input type='text' placeholder='Search' width={'500px'} mt={'10px'} variant='flushed'
               onChange={handleSearch}/>
            </Box>

        <Box p={'20px'}>
            <SimpleGrid columns={3} gap={'15px'} mt={'120px'}>
                {
                    movies?.map((e, i) => {
                        return <CardDiv e={e} key={i} />
                    })
                }
            </SimpleGrid>
        </Box>
        </>

    )
}

export default Home