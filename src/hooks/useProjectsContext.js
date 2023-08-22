import { ProjectsContext } from '../context/ProjectContext'
import { useContext } from 'react'

export const useProjectsContext = () => {
    const context = useContext(ProjectsContext) // value that we passed into the provider component

    if (!context) {
        throw Error('useProjectsContext should be inside a ProjectsContextProvider')
    }

    return context 
}