const Music = (props) => {
    return (
        <div >  
              <h2>{props.items.title}</h2>
              <div>
                <img
                  src={props.items.imageUrl}
                  alt="there is a flower"
                ></img>
              </div>
              <div>
                <span>
                  &<span>{props.items.price}</span>
                </span>
                <button variant="primary">Add to Cart</button>
              </div>
        </div>
    )
}

export default Music