const express = require('express')
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose')

const QuestionRoutes = require('./routes/questions')
const CommentRoutes = require('./routes/comments')
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

require('dotenv/config')

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Allow requests from any origin
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// //Used with React()
// app.use(cors({
//     origin: '*'
// }))

app.use('/questionImages', express.static('questionImages'))
app.use('/userImages', express.static('userImages'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))


app.use(QuestionRoutes)
app.use(CommentRoutes)
app.use('/api/users', userRoutes)
app.use('/api/auth', authRoutes)
app.use(userRoutes)
app.use(authRoutes)

app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

// Serve the React app's 'index.html' for all routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'));
});

//Connect to DB
mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Whirlpool' //Collection Name
}).then(() => {
    console.log("Connected to DB")
}).catch((err) => {
    console.log("No connection. Error: " + err)
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => {
    console.log("Server Started On Port: ", PORT)
})