import products from './products.json'

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

const fetchProducts = () => 
  delay(2000).then(() => products)

export default fetchProducts
