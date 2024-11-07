const mongoose = require('mongoose');

const connection = async () => {
    const url = process.env.MONGO_URI;

    try {
        await mongoose.connect(url, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            autoIndex: true, 
        });

        console.log("Mongoose connected to DB");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
        process.exit(1); 
    }
};

module.exports = connection;
