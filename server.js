require('dotenv').config();

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
            price:1,
            quantity:3,
        }
    ]
    */
    console.log(req.body);

    //Format to Stripe prefered naming
    // we have items and Stripe requires "price"
    const items = req.body.items;
    let lineItems =[];
    items.forEach((item)=> {
        lineItems.push(
            {
                price: item.id,
                quantity: item.quantity
            }
        )
    });

    const session = await stripe.checkout.sessions.create({
        line_items: lineItems,
        mode: 'payment',
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/",
        // customer_email:"marko@me.com",
        custom_text:{
            submit:{message:"test custom text"}
        },
        // metadata:{
        //     company_name:"CenterCentre"
        // },

    });

    resp.send(JSON.stringify({
        url: session.url
    }));

});

app.listen(4000, () => console.log("Listening on port 4000!"));
