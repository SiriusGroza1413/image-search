import Item from "./Item.jsx"

const styles = {
    products: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around"
    }
  }


const Product = ({allProducts, addToCart}) => {
    return (
        <div style={styles.products}>
            {allProducts.map(p => {
                return(
                    <Item 
                    addToCart={addToCart}
                    key={p.name}
                    name={p.name}
                    price={p.price}
                    image={p.img}
                    />
                )
            })}
        </div>
    )
}

export default Product