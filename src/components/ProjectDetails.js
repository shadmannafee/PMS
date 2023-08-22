import { useProjectsContext } from "../hooks/useProjectsContext"
//DATE FNS
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ProjectDetails = ({project}) => {
    const { dispatch } = useProjectsContext()


    const handleClick = async () => {
        const response = await fetch('/api/projects/' + project._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_PROJECT',payload: json})
        }
    }
    return(
        <div className="project-details">
            <h4>{project.title}</h4>
            <p><strong>year: </strong>{project.year}</p>
            <p><strong>duration (months): </strong>{project.duration}</p>
            <p>{formatDistanceToNow(new Date(project.createdAt),{addSuffix: true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick}> delete </span>
        </div>
    ) 
}

export default ProjectDetails