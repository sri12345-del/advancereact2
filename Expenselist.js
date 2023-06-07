import React from "react"
import { Button, Card, Table } from "react-bootstrap"

const Expenselist = (props) => {

    const deletehandler = (item) => {
        props.delete(item)
    }

    const edithandler = (item) => {
        props.edit(item)
    }
    return (
        <Card style={{margin:"0rem 25%", padding:"1rem 3rem"}}>
            <Table>
                <thead>
                    <tr>
                        <th>Money</th>
                        <th>Description</th>
                        <th>Catagory</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>{props.items.map(item => (
                    <tr key={ item.id} id={item.id}>
                        <td>{ item.money}</td>
                        <td>{ item.description}</td>
                        <td>{item.catagory}</td>
                        <td><Button onClick={deletehandler.bind(null,item.key)}>Delete</Button></td>
                        <td><Button onClick={edithandler.bind(null,item.key)}>Edit</Button></td>
                    </tr>
                )) }</tbody>
           </Table>
        </Card>
    )
}

export default Expenselist