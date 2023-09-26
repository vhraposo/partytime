const mongoose = require("mongoose")

async function main(){
    try{
        await mongoose.connect(
            "mongodb+srv://admin:wpxTbcictTYpSUmb@cluster0.x5lfisu.mongodb.net/?retryWrites=true&w=majority"
        )
        console.log("Conectado ao banco!")
    }catch(error){
        console.log(`Erro ${error}`)
    }
}

module.exports = main