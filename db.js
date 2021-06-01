const mongoose = require('mongoose')

const uri = 'mongodb+srv://passport:passport@cluster0.iith6.mongodb.net/samlpoc?retryWrites=true&w=majority'
mongoose.connect(uri)

mongoose.connection.close()
