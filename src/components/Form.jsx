import React, { useState } from 'react'

function Form({ task, setTask, taskHandler }) {

    const addTask = () => {
        if (task.trim() != "") {
            taskHandler({ id: Date.now(), title: task, completed: false })
            setTask("")
        }

    }

    return (
        <div style={{ width: "90%", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: "90%", maxWidth: "600px", height: "40px", backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center", borderRadius: "4px" }}>
                <input
                    type="text"
                    name="task"
                    id="task"
                    style={{ width: "90%", height: "100%", marginRight: "15px", border: "0", outline: "0", fontSize: "20px" }}
                    placeholder="Enter new task.."
                    onChange={(e) => {
                        setTask(e.target.value)
                    }}
                    onKeyUp={(e) => {
                        if (e.key == 'Enter') {
                            addTask()
                        }

                    }}
                    value={task}
                />
                <i
                    className="fa-solid fa-plus"
                    onClick={addTask}
                ></i>
            </div>
        </div>
    )
}

export default Form
