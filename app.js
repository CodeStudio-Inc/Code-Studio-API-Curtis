express = require('express');
mongoose = require ('mongoose');

const cors = require('cors')

PORT = process.env.port || 3000;

// DBCONNECTION
const db = mongoose.connection;

mongoose.connect('mongodb://localhost:27017/curtisdb',{ useNewUrlParser: true,useUnifiedTopology: true })

db.on('error',()=>{
console.log('db not connected')
});

db.once('open',()=>{
    console.log('db connected sucessfully')
})

// middleware
app = express();
app.use(cors());


app.listen(PORT,(err)=>{
    console.log('server running at http://localhost:3000')
});

app.get('/',(req, res)=>{
res.send("<h1>Hello World</h1>")
});
