import mongoose from "mongoose";

export const Connection = async (username, password) => {
    try {
        const URL = `mongodb+srv://${username}:${password}@ecom-mern.edqwq4w.mongodb.net/ECOM-MERN?retryWrites=true&w=majority`;
        await mongoose.connect(URL);
        console.log("Database connected successfully!!!!");
    } catch (error) {
        console.log(error);
    }
};

export default Connection;
