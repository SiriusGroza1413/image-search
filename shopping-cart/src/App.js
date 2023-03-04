import { useState } from "react"
import Product from "./components/Product.jsx"


const App = () => {
  const [allProducts, setAllProducts] = useState([
    { name: "Tomato", price: "$20", img: "/productos/tomate.jpg" },
    { name: "Lettuce", price: "$35", img: "/productos/lechuga.jpg"},
    { name: "Bee", price: "$15", img: "./productos/arbejas.jpg"}
  ]) 
  
  return (
    <div>
      <Product 
      addToCart={() => console.log("added")}
      allProducts={allProducts}
      />
    </div>
  )
}
export default App;
