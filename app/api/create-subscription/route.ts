import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: any, res: any) {
  const data = await req.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_LIVE_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
  });

  const result = await instance.subscriptions.create({
    plan_id: data.plan_id,
    customer_notify: 1,
    quantity: 1,
    total_count: 6,
    addons: [],
    notes: {
      key1: 'value3',
      key2: 'value2'
    }
  });

  return NextResponse.json(result);
}
