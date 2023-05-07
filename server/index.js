const express = require("express");
const connection = require("./db/db");
const app = express();
const userRouter = require('./routes/User.routes')
const cors = require('cors')
// const bodyParser = require("body-parser"); 
const dotenv = require("dotenv");

// app.use(bodyParser.json());
app.use(cors())
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended:true}))

const PORT = process.env.PORT || 8000;

app.use('/api',userRouter)

app.get("/", (req, res) => {
    res.status(200).send("<h2>Welcome, Server is running</h2>");
});



app.listen(PORT, async () => {
    try {
        await connection;
        console.log("listening on port http://localhost:8000");
    } catch (err) {
        console.log(err, "error while listening server");
    }
});
