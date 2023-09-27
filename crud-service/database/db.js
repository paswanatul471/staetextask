import mongoose from 'mongoose';
const mongooseURI = "mongodb+srv://Atul0786:Atul0786@cluster0.cvfnvay.mongodb.net/atul?retryWrites=true&w=majority"

const Connection = () => {
    mongoose.connect(mongooseURI,()=>{
        console.log("Connected to mongo succesfull");
    })
}

export default Connection;