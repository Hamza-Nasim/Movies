import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { handelGetMovies } from '../Redux/featurs/MoviesSlice';
function RapidApi() {
const dispatch = useDispatch()
const options = {
    method: 'GET',
    url: 'https://imdb8.p.rapidapi.com/auto-complete',
    params: {q: 'game of thr'},
    headers: {
      'X-RapidAPI-Key': 'da39eba0f1msha2a13bb9a3d3db6p115808jsn7d3ff3997e71',
      'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
    }
  };
  

useEffect(()=>{
    axios.request(options)
    .then(({data})=>{
       dispatch(handelGetMovies(data.data))
       console.log(data.data)
    })
    .catch (error=>{
        console.error(error);
    }) 
},[])  
}

export default RapidApi