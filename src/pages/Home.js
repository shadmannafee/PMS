import { useEffect} from "react";
import { useProjectsContext } from "../hooks/useProjectsContext";

//components
import ProjectDetails from '../components/ProjectDetails'
import ProjectForm from '../components/ProjectForm'

const Home = () => {
    const {projects, dispatch} = useProjectsContext()

    useEffect(() => {
        const fetchProjects = async () => {
            const response = await fetch('/api/projects')
            const json = await response.json()

            if (response.ok){
                dispatch({type: 'SET_PROJECTS', payload: json})
            }
        }
        fetchProjects()
    }, [dispatch])
//if value of project is null// jodi project empty thake tahole .map will never run
    return (
        <div className="home">
            <div className="projects">
            {projects && projects.map((project) => (
                <ProjectDetails key ={project._id} project = {project} />
            ))}
            </div>
            <ProjectForm/>
        </div>
        )
    }

export default Home;