const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const config = require('config')
require('dotenv').config();



const app = express();

// Bodyparser Middlewre
app.use(express.json());

// DB Config
const db = process.env.mongoURI;

// Connect to mongo
mongoose
   .connect(db, {useNewUrlParser: true}) //Adding new mongo url parser
   .then(() => console.log('MongoDB Connected Successfully...'))
   .catch(err => console.log(err))

//Use Routes
app.use('/api/items', require('./Routes/api/Items'))
app.use('/api/users', require('./Routes/api/Users'))
app.use('/api/auth', require('./Routes/api/Auth'))

//Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
   //Set static folder
   app.use(express.static('client/build'));

   app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
   });
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))
