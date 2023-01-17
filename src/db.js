import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/wetube-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const db = mongoose.connection

const handleOpen = () => console.log('connected to DB🔊')
const handleEror = (error) => console.log('DB Error ✖', Error)

db.on('error', handleEror)

db.once('open', handleOpen)
