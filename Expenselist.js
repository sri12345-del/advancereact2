import React,{useContext} from "react"
import { Card, Table } from "react-bootstrap"
import Autcontext from "../store/autcontext"

const Expenselist = () => {
    const autctx=useContext(Autcontext)
    return (
        <Card style={{margin:"0rem 25%", padding:"1rem 3rem"}}>
            <Table>
                <thead>
                    <tr>
                        <th>Money</th>
                        <th>Description</th>
                        <th>Catagory</th>
                    </tr>
                </thead>
                <tbody>{autctx.expenseitem.map(item => (
                    <tr id={item.id}>
                        <td>{ item.money}</td>
                        <td>{ item.description}</td>
                        <td>{ item.catagory}</td>
                    </tr>
                )) }</tbody>
           </Table>
        </Card>
    )
}

export default Expenselist