const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

module.exports = function(event, context, callback) {

  const token = event.token.id;
  const amount = event.charge.amount;
  const currency = event.charge.currency;

  return stripe.charges.create({ // Create Stripe charge with token
    amount,
    currency,
    description: "productOne Stripe charge",
    source: token,
  }).then((charge) => { // Success response
      const response = {
        statusCode: 200,
        source: token,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          message: `Charge processed succesfully!`,
          charge
        }),
      };
      callback(null, response);
    })
    .catch((err) => { // Error response
      const response = {
        statusCode: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
          "Access-Control-Allow-Origin": "*"
        },
        body: JSON.stringify({
          error: err.message,
        }),
      };
      callback(null, response);
    })
};
