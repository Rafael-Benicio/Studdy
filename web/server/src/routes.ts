import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsConstroller from './controllers/ConnectionsController'

const routes=express.Router()
const classesControllers = new ClassesController()
const connectionsConstroller = new ConnectionsConstroller()


routes.post('/classes', classesControllers.create)
routes.get('/classes', classesControllers.index)

routes.post('/connections', connectionsConstroller.create)
routes.get('/connections', connectionsConstroller.index)


 export default routes