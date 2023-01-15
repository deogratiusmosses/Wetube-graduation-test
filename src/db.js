import mongoose from 'mongoose'

mongoose.connect('mongodb://127.0.0.1:27017/wetube-test', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
/*   useFindAndModify:false, */

})

const db = mongoose.connection

