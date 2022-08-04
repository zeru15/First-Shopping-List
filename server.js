const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const items = require('./Routes/api/Items')

const app = express();

// Bodyparser Middlewre
app.use(bodyParser.json());

// DB Config
const db = require('./Config/keys').mongoURI;

// Connect to mongo
mongoose
   .connect(db)
   .then(() => console.log('MongoDB Connected Successfully...'))
   .catch(err => console.log(err))

//Use Routes
app.use('/api/items', items)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`))
