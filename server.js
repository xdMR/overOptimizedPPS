const express = require('express');
var cors = require('cors');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req,resp)=>{
    /*
    req.body.item
    [
        {
            id:1,
            quantity:3,
        }
    ]
    */

})