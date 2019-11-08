const express = require('express')
const server = express()
const helmet = require('helmet')
const ProjectRouter = ('./projects/project-router.js')


server.use(express.json())
server.use(helmet())
server.use('./api/project', ProjectRouter)

server.get('/', (req,res) => {
     res.send("Hello you are at the root")
})

module.exports = server;