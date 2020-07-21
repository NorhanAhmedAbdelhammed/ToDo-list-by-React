import React from 'react'
import './ViewData.css'

const ViewData = (props) => {
    const { data, deleteItem } = props
    const numberOfItems = data.length
    const listData = numberOfItems ? (
        data.map(item => {
            return (
                <React.Fragment>
                    <tr key={item.id}>
                        <td> {item.project} </td>
                        <td> {item.task}</td>
                        <td> <button onClick={() => { deleteItem(item.id) }}>Done</button> </td>
                    </tr>
                </React.Fragment>
            )
        })
    ) : ( 
            <React.Fragment>
                <tr>
                    <p> There is no tasks to show </p>
                </tr>
            </React.Fragment>
        )

    return (
        <table>
            <thead>
                <td>Project</td>
                <td>Task</td>
                <td>Action</td>
            </thead>
            {listData}
        </table>

    )
}

export default ViewData