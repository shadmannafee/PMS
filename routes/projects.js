const express = require('express')
const {
    createProject, 
    getProjects,
    getProject,
    updateProject,
    deleteProject
} = require('../controllers/projectController')
const Project = require('../models/projectModel')

const router = express.Router()

//Get all projects
router.get('/',getProjects)
//Get a single Project
router.get('/:id', getProject)

//Post a new project
router.post('/', createProject)
    /*const {title, year, duration} = req.body

    try {
        const project = await Project.create({title, year, duration})
        res.status(200).json(project)
    } catch (error) {
        res.status(400).json({error: error.message})
    }*/


//Delete a project
router.delete('/:id', deleteProject)


//Update a project
router.patch('/:id', updateProject)



module.exports = router