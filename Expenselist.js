import React from "react"
import { Card, Table } from "react-bootstrap"

const Expenselist = (props) => {
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
                <tbody>{props.items.map(item => (
                    <tr key={ item.id} id={item.id}>
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