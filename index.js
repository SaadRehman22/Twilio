const express=require('express');
const app=express();

const client = require('twilio')(accountSid, authToken);
const port=3001;


app.get('/',()=>{
    
    sendTextMessage();
    res.send(`
        <div sttyle="text-align:center;padding-top:40px;">
            <h1>Welcome to my website</h1>
            <p>This is a Hello World</p>
        </div>
    `);

})

function sendTextMessage(){
    client.messages.create({
        from: '+15017122661',  //from twilio
        body: 'Hello from node',
        to: '+15558675310'})
        .then(message => console.log(message.sid));
}


app.listen(port,()=>{
    console.log(`Example app listening at port ${port}`)
})


