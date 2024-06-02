const express = require('express');
const cors = require('cors');
const app = express();
 
app.use(express.json());

app.use(cors({origin: 'https://placement-portal-frontend.onrender.com/',credentials: true })); 
require('dotenv').config();
const cookieParser = require('cookie-parser');
app.use(cookieParser());
 


const PORT = process.env.PORT || 4000;

//To connect to database
const dbConnect = require('./config/database'); 
dbConnect();  


const user = require('./routes/user');
const placement = require('./routes/placement')
 
app.use('/vplace/v1/user',user)
app.use('/vplace/v1/job',placement) 

app.listen(PORT,()=>{
    console.log(`App is running on ${PORT}`);
})

  
