const mongoose = require("mongoose");
const mongoURI = 'mongodb+srv://mnegi17:oufdFEsshh2bUHGT@cluster0.8n60td7.mongodb.net/InFOODs'


const mongoDB = async () => {
    try {
        await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('Connected to MongoDB');
        const fetched_data = await mongoose.connection.db.collection('food_items');
        fetched_data.find({}).toArray(function(err,data){
            if(err){console.log("error")}
            else{
            global.food_items =data;
            console.log(global.food_items)
        }

        })

        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

module.exports = mongoDB;