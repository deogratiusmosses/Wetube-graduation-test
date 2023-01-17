import express from 'express'
import MongoStore from 'connect-mongo'
import morgan from 'morgan'
import session from 'express-session'
import flash from 'express-flash'
import globalRouter from './routers/globalRouter'
import videoRouter from './routers/videoRouter'
import userRouter from './routers/userRouter'
import viewsRoter from './routers/viewsRouter'
import { localsMiddleware } from './middlewares'

const app = express()
const logger = morgan('dev')

app.set('view engine', 'pug')
app.set('views', process.cwd() + '/src/views')
app.use(logger)
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(
  session({
    secret: 'Hello!',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: 'mongodb://127.0.0.1:27017/wetube-test',
    }),
  })
)
app.use(flash())
app.use(localsMiddleware)
app.use('/uploads', express.static('uploads'))
app.use('/static', express.static('assets'))
app.use('/', globalRouter)
app.use('/videos', videoRouter)
app.use('/users', userRouter)
app.use('/viewed', viewsRoter)

export default app
