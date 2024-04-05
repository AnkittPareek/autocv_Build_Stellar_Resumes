const stripe = require("stripe")(process.env.STRIPE_TEST_KEY);

exports.pay = async (req, res) => {
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: 100,
      currency: "inr",

      //description and user information are kept static just for test purposes
      // we can actually create a ui in frontend and fetch this information too
      description: "testdescription",

      shipping: {
        name: "Jenny Rosen",
        address: {
          line1: "510 Townsend St",
          postal_code: "98140",
          city: "San Francisco",
          state: "CA",
          country: "US",
        },
      },
      //   payment_method_types: ["card"],
    });

    res.json({ client_secret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Error creating PaymentIntent:", error);
    res.status(500).json({ error: error.message });
  }
};
