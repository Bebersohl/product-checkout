import products from './products.json'

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = () => 
  delay(2000).then(() => products)

