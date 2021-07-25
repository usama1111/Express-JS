import express, { request, response } from 'express';
import mongoose from 'mongoose';
import route from './routes/routes.js'
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
const url = 'mongodb://usama:usama123@cluster0-shard-00-00.n0rad.mongodb.net:27017,cluster0-shard-00-01.n0rad.mongodb.net:27017,cluster0-shard-00-02.n0rad.mongodb.net:27017/Cluster0?ssl=true&replicaSet=atlas-104djj-shard-0&authSource=admin&retryWrites=true&w=majority'


app.use(bodyParser.json({extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/users', route);

const port = 3010


mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => { 
    // we need .then becausew
    //it returns a promise 
    app.listen(port, () => console.log(`Server is running on PORT: ${port}`))
}).catch((error) => {
    console.log('Error:', error.message)
})