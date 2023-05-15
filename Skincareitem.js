const SkincareItem = (props) => {
    const selecthandler = (e) => {
        props.remove(e.target.id)
     }
   return (
     <div>
       <h3>Table 3</h3>
       <ul>
         {props.items.map((data) => {
           return (
               <li key={data.id}>
               {data.SellingPrice}-{data.ProductType}-{data.ProductName}
                   <button id={ data.ProductId} onClick={selecthandler}>delete item</button>
             </li>
           );
         })}
       </ul>
     </div>
   );
}

export default SkincareItem;