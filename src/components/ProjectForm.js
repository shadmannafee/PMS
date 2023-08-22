import { useState } from "react"
import { useProjectsContext } from "../hooks/useProjectsContext";
const ProjectForm = () => {
    const { dispatch } = useProjectsContext()
    const [title, setTitle] = useState('')
    const [year, setYear] = useState('')
    const [duration, setDuration] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async(e) => {
         e.preventDefault()

         const project = {title,year,duration}

         const response = await fetch('/api/projects',{
            method: 'POST',
            body: JSON.stringify(project),
            headers:{
                'Content-Type': 'application/json'
            }
         })
         const json = await response.json()

         if (!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
         }
         if (response.ok){
            setError(null)
            setTitle('')
            setYear('')
            setDuration('')
            setEmptyFields([])
            console.log('New Project Added', json)
            dispatch({type: 'CREATE_PROJECT',payload: json})
         }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a New Project</h3>
            
            <label>Project Title</label>
            <input
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value = {title}
            className={emptyFields.includes('title') ? 'error': ''}
            />

            <label>Project Starting Year </label>
            <input
                type="number"
                onChange={(e) => setYear(e.target.value)}
                value = {year}
                className={emptyFields.includes('year') ? 'error': ''}
            />
            
            <label>Project Duration</label>
            <input
                type="number"
                onChange={(e) => setDuration(e.target.value)}
                value = {duration}
                className={emptyFields.includes('duration') ? 'error': ''}
            />
            
            <button>Add Project</button>
            {error && <div className="error">{error}</div>}
        </form>   
    )
}

export default ProjectForm