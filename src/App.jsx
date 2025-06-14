import { useState } from 'react'
import './App.css'
import Task from './components/Task'
import Form from './components/Form'
import Header from './components/Header'

function App() {
    const [toDos, setToDos] = useState([])
    const [task, setTask] = useState('')

    const addTask = (task) => {
        setToDos([...toDos, task])
    }

    const updateStatus = (taskId) => {
        setToDos(toDos.map((task) => {
            if (task.id == taskId) {
                task.completed = !task.completed
            }
            return task;
        }))
    }

    const editTask = (taskId) => {
        let seletedTask = toDos.filter((task) => task.id == taskId)
        if (seletedTask.length !== 0) {
            setTask(seletedTask[0].title)
            deleteTask(taskId)
        }
    }

    const deleteTask = (taskId) => {
        setToDos(toDos.filter((task) => task.id !== taskId))
    }

    return (
        <>
            <Header />
            <div style={{ 
                display: "flex", 
                alignItems: "center", 
                flexDirection: "column", 
                padding: "30px 0", 
                backgroundColor: "#bbbdbd", 
                minHeight: "calc(100vh - 80px)", 
                boxSizing: "border-box",
            }}>
                <Form taskHandler={addTask} task={task} setTask={setTask} />
                <div style={{ marginTop: "25px", width: "90%", margin: "25px auto", display: "flex", justifyContent: "space-between", gap: "15px" }}>
                    <div style={{ width: "60%", border: "1px solid #0a4c52", borderRadius: "8px", padding: "10px", maxHeight: "100%", overflowY: "auto" }}>
                        <h4 style={{ color: "#333333" }}>ToDos</h4>
                        <hr style={{ border: "1px solid #888", marginBottom: "10px" }} />
                        {toDos.map((task, index) => {
                            if (!task.completed) {
                                return <Task key={index} task={task} statusHandler={updateStatus} editHandler={editTask} deleteHandler={deleteTask} />;
                            }
                            return null;
                        })}
                    </div>
                    <div style={{ width: "40%", border: "1px solid #0a4c52", borderRadius: "8px", padding: "10px", color: "#444" }}>
                        <h4 style={{ color: "#333333" }}>Completed</h4>
                        <hr style={{ border: "1px solid #888", marginBottom: "10px" }} />
                        {toDos.map((task, index) => {
                            if (task.completed) {
                                return <Task key={index} task={task} statusHandler={updateStatus} deleteHandler={deleteTask} />;
                            }
                            return null;
                        })}
                    </div>
                </div>

            </div>
        </>
    )
}

export default App
