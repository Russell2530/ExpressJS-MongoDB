const express = require('express')
const mongoose = require('mongoose');
const Product = require('./models/product.models.js');
const productRoute = require('./routes/product.route.js');
const app = express()

//middleware
app.use(express.json());

//routes
app.use('/api/products', productRoute);


app.get('/', (req, res) => {
  res.send('Hello World from Express!')
})


mongoose.connect("mongodb+srv://rafkanoorputraxpro_db_user:k81HU0L4zr88jq7O@backenddb.7uppjrs.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
  console.log('Connected to database')
    app.listen(3000, () => {
        console.log('Server is running on http://localhost:3000')
    })
})
.catch(() => {
  console.error('Error connecting to database')
})