const express = require('express')
const server = express()
const helmet = require('helmet')
const ProjectRouter = require('./projects/projectRouter.js')


server.use(express.json())
server.use('/api', ProjectRouter)


server.get('/', (req,res) => {
     res.send('Hello you are at the root')
})

module.exports = server;