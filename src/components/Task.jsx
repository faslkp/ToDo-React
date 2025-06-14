import React from 'react'

function Task({ task, statusHandler, editHandler, deleteHandler }) {

    return (
        <div style={{ display: "flex", alignItems: "center", border: "1px solid grey", padding: "10px", borderRadius: "4px", marginBottom: "10px" }}>
            {(task.completed === false) ? <i className="fa-regular fa-square" style={{cursor: "pointer"}} onClick={() => { statusHandler(task.id) }}></i> : <i className="fa-regular fa-square-check" style={{cursor: "pointer"}} onClick={() => { statusHandler(task.id) }}></i>}
            <div style={{ marginLeft: "15px", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", paddingRight: "15px" }}>
                <p style={{ fontSize: "24px" }}>{task.title}</p>
                <div style={{display: "flex", alignItems: "center"}}>
                    <i className="fa-solid fa-pencil" style={{marginRight: "10px", cursor: "pointer"}} onClick={() => editHandler(task.id)} ></i>
                    <i className="fa-solid fa-trash-can" style={{cursor: "pointer"}} onClick={() => { deleteHandler(task.id) }}></i>
                </div>
            </div>
        </div>
    )
}

export default Task
