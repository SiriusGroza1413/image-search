const styles = {
    item: {
      border: "solid 1px #eee",
      boxShadow: "0px 5px 5px rgb(0, 0, 0, 0.1)",
      width: "27%",
      padding: "10px 15px",
      borderRadius: "5px"
    }
  }
  

const Item = (props) => {
    return (
        <div style={styles.item}>
            <img src={props.image} alt={props.name}/>
            <h3>{props.name}</h3>
            <p>{props.price}</p>
        </div>
    )
}

export default Item