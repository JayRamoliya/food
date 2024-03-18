const mongoose = require('mongoose')

const connectdb = () => {
    mongoose.connect('mongodb://localhost:27017/food', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('Connection Is Ready'))
    .catch((err) => console.log(err))
}

module.exports = connectdb