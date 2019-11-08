const db = require('../data/db-config.js')

module.exports = {
     postResource,
     getResource,
     postProject, 
     getProject,
     postTask,
     getTask,
     getTaskById
}

//* RESOURCES */
//TODO POST resources 
function postResource(newResource){
     return db('resource')
     .insert(newResource)
     // .then(([id]) => findById(id))
}
//TODO GET all resources
function getResource(){
     return db('resource')
}


//* PROJECTS */
//TODO POST projects
function postProject(newProject){
     return db('project')
     .insert(newProject)
}
//TODO GET all projects 
function getProject(){
     return db('project')
}


//* TASKS */
//TODO POST task 
function postTask(newTask){
     return db('task')
     .insert(newTask)
}
//TODO GET all tasks 
function getTask(){
     return db('task')
}
//TODO GET list of tasks for a project (should include the project name and description)
function getTaskById(id){
     return db
     .select('project.name', 'project.description', 'task.description', 'task.notes', 'task.completed')
     .from('project')
     .join('task', 'task.project_id', '=', 'project.id')
     .where('project.id', '=', id)
}