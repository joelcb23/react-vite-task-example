import { useState, useContext } from "react"
import { TaskContext } from "../context/TaskContext";

function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        createTask({
            title,
            description
        });
        setTitle("")
        setDescription("")
    }
    return (
        <div className="max-w-md mx-auto">
            <form className="bg-slate-800 p-10 mb-4" onSubmit={handleSubmit}>
                <h1 className="text-2xl font-bold text-white mb-3">Añade una nueva tarea</h1>
                <input className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe la tarea" onChange={(e) => setTitle(e.target.value)} value={title} autoFocus required />
                <textarea className="bg-slate-300 p-3 w-full mb-2" placeholder="Escribe la descripcion" onChange={(e) => setDescription(e.target.value)} value={description}></textarea>
                <button className="bg-indigo-600 text-white px-3 py-1 rounded-md mt-4 hover:bg-indigo-500">Save</button>
            </form>
        </div>
    )
}

export default TaskForm