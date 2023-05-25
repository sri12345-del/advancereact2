import React,{useContext} from "react"
import Cartcontaxt from "../../store/context"


const Music = (props) => {

  const autoctx = useContext(Cartcontaxt)
  
  const datahandler = (item) => {
    autoctx.additem(item)
  }
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
                <button variant="primary" onClick={datahandler.bind(null,props.items)}>Add to Cart</button>
              </div>
        </div>
    )
}

export default Music