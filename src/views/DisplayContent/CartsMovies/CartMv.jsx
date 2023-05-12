import React,{ useEffect }  from 'react'
import Cart from './Cart'
import { useSelector,useDispatch } from 'react-redux'
import axios from 'axios';
import { handelGetMovies } from '../../../Redux/featurs/MoviesSlice';
const options = {
  method: 'GET',
  url: 'https://imdb8.p.rapidapi.com/auto-complete',
  params: {q: 'game of thr'},
  headers: {
    'X-RapidAPI-Key': 'da39eba0f1msha2a13bb9a3d3db6p115808jsn7d3ff3997e71',
    'X-RapidAPI-Host': 'imdb8.p.rapidapi.com'
  }
};

try {
	const response = await axios.request(options);
	console.log(response.data);
} catch (error) {
	console.error(error);
}
function CartMv() {
  return (
    <div className='ListMv'>
    <div className='CardMv'>
      <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
      <Cart/>
    </div>
  </div>
  )
}

export default CartMv