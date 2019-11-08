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


//TODO POST resources 
function postResource(){
     
}
//TODO GET all resources
function getResource(){
     return db('resource')
}

//TODO POST projects
function postProject(){

}
//TODO GET all projects 
function getProject(){
     return db('project')
}

//TODO POST task 
function postTask(){

}
//TODO GET all tasks 
function getTask(){
     return db('task')
}
//TODO GET list of tasks for a project (should include the project name and description)
function getTaskById(){

}