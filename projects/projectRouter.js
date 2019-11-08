const express = require('express')
const router = express.Router();
const db = require('./project-model.js')


//* RESOURCES */
// response sends back ID of newly posted resource
router.post('/resource', (req, res) => {
     const newResource = req.body
     db.postResource(newResource)
     .then(response => {
          res.status(200).json(response)
     })
})
router.get('/resource', (req, res) => {
     db.getResource()
     .then(response => {
          res.status(200).json(response)
     })
})


//* PROJECTS */
// response sends back ID of newly posted project
router.post('/project', (req, res) => {
     const newProject = req.body
     db.postProject(newProject)
     .then(response => {
          res.status(200).json(response)
     })
})
router.get('/project', (req, res) => {
     db.getProject()
     .then(response => {
          res.status(200).json(response)
     })
})


//* TASKS */
router.post('/project/:id/task', (req, res) => {
     const {id} = req.params
     const newTask = {...req.body, project_id: id}

     db.postTask(newTask)
     .then(response => {
          res.status(200).json(response)
     })
})
router.get('/task', (req, res) => {
     db.getTask()
     .then(response => {
          res.status(200).json(response)
     })
})
router.get('/project/:id/task', (req, res) => {
     const {id} = req.params
     db.getTaskById(id)
     .then(response => {
          res.status(200).json(response)
     })
})


module.exports = router;