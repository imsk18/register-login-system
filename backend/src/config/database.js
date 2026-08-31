const mongoose = require('mongoose')
async function connectToDB(){
    mongoose.connect(process.env.DB_URI)
    .then(()=>{
        console.log("DB connected");
        
    })
}

module.exports = connectToDB