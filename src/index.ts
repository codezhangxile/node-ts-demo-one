import express from 'express';

//创建服务器程序
const app = express();

app.get('/test',(req,res)=>{
    console.log('test request~');
    res.send({
        code:200,
        msg:null,
        data:122
    });
})

app.listen(8888);