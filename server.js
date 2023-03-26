// 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
// Coffee: price_1MpirfCCfVRJgqGQfqsVKfvq
// Sunglasses: price_1MpisJCCfVRJgqGQh5JfWAbC
// Camera: price_1MpismCCfVRJgqGQ0bEvcMjE

const express = require('express');
var cors = require('cors');
const stripe = require('stripe')('sk_test_51MpidxCCfVRJgqGQML19Fpz1xZoBQYKtwKnXPTnNttigLWDN2oiWhkLL5nsYbOE8TI3IL5ru1nP8UjBank2Hrl3700PLMTRytN')

const app = express();
app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout', async (req, res) => {
    /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]
    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
    console.log(req.body);
    const items = req.body.items;
    let lineItems = [];
    items.forEach((item) => {
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
       success_url: 'http://localhost:3000/success',
       cancel_url: 'http://localhost:3000/cancel' 
    });

    res.send(JSON.stringify({
        url: session.url
    }));
});

app.listen(4000, () => console.log("Listening on port 4000!"));