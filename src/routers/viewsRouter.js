import express from 'express'
import { registerView, createComment } from '../controllers/videoController'

const viewsRouter = express.Router()

viewsRouter.post('/videos/:id([0-9a-f]{24})/view', registerView)
viewsRouter.post('/videos/:id([0-9a-f]{24})/comment', createComment)

export default viewsRouter
