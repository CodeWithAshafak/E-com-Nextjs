'use server';

import Razorpay from 'razorpay';
// import { prisma } from '../../lib/prisma';
import { PrismaClient } from "../generated/prisma";
// import {PrismaClient} from '@prisma/client'

if(!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
  throw new Error('Razorpay credentials are not set in environment variables.');
}




const razorpay = new Razorpay({
  //  key_id: process.env.RAZORPAY_KEY_ID!,
  //  key_secret: process.env.RAZORPAY_KEY_SECRET!,

  key_id:'rzp_test_dqhXRIw12Hn1KY',
  key_secret:'A2OtrCLVy2V2HKDVFnB9C2AR'
  //rzp_test_dqhXRIw12Hn1KY
  // A2OtrCLVy2V2HKDVFnB9C2AR

});

export default async function createOrder(amount: number,user: any, products: any) {

  if(!amount || !user?.name || !user?.email || !products) {

    throw new Error('Invalid input: amount, user, and products are required.');
  }
  const prisma = new PrismaClient(); 
  const options = {
    amount:Math.round(amount * 100), 
    currency: 'INR',
    receipt: `receipt_order_${Date.now()}`,
  };

  try {
    const orders = await razorpay.orders.create(options);

    console.log("Razorpay Order Response:", orders)
    if (!orders || !orders.id) {
      throw new Error('Order creation failed: No order ID received.');
    }
    await prisma.order.create({
      data: {
        razorpayOrderId: orders.id,
        razorpayPaymentId: '',
        razorpaySignature: '',
        amount,
        userName: user.name,
        userEmail: user.email,
        phoneNumber: user.phoneNumber,
        address: user.address,
        pincode: user.pincode,
        products: products
      },
    });
    

    return orders;
  } catch (err) {
    console.error('Error during order creation:', err);
    throw new Error('Order creation failed');
  }
}







