import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Ensure the secret key is defined
if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY in environment variables");
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const amount = body.amount;

    if (!amount || isNaN(amount)) {
      return NextResponse.json({ error: "Invalid amount" }, { status: 400 });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency: "usd",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: `Internal Server Error: ${error}` }, { status: 500 });
  }
}
