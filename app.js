import express from 'express'; 

const app = express();

app.use(express.urlencoded());
app.use(express.json());


app.use('/', (req,res) => {
    return res.status(200).json({massage: "hello from AWS pipline"});
});



app.listen(3001);