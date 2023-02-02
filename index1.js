const express=require('express');
const app=express();


const twilioRouter=require('./routes/twilio-sms');


app.use('/twilio-sms',twilioRouter);


app.listen(port,()=>{
    console.log(`Example app listening at port ${port}`)
})
