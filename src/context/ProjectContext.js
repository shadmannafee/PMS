import { createContext,useReducer } from 'react'

export const ProjectsContext = createContext()

export const projectsReducer = (state, action) => {
    switch (action.type){
        case 'SET_PROJECTS':
            return {
                projects: action.payload
            }
        case 'CREATE_PROJECT':
            return {
                projects: [action.payload, ...state.projects]
            }
            //here we filter the particular project that we will delete using the FILTER(), we find the project and keep the rest 
        case 'DELETE_PROJECT':
            return {
                projects: state.projects.filter((x) => x._id !== action.payload._id)
            }
        default:
            return state
    }
}


//Here below the children is basically the app from index.js
export const ProjectsContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(projectsReducer, { 
        projects: null
    })


     
    return (
        <ProjectsContext.Provider value = {{...state, dispatch}}>
            { children }
        </ProjectsContext.Provider>
    )
}

