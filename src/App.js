import axios from 'axios'
import { useEffect, useReducer } from 'react';
import './App.css';
import { cartReducer } from './reducers/cartReducer';

function App() {
  const [state, dispatch] = useReducer(cartReducer, {
    products: [],
    cart: []

  })

  const baseUrl = "https://dummyjson.com/products"
  const fetchProducts = async () => {
    const { data } = await axios.get(baseUrl, {
      headers: { "Access-Control-Allow-Origin": "*" }
    }
    )

    dispatch({
      type: 'ADD_PRODUCTS',
      payload: data.products
    })
    console.log(state)

  }

  useEffect(() => {
    fetchProducts()
  }, [])
  return (
    <div className="App">
      hello
    </div>
  );
}

export default App;
