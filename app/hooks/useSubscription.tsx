import { addNewMemberMutation } from '@/app/_utils/GlobalApi';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'sonner';

type RazorPaymentID = {
  razorpay_payment_id: string;
};

function useSubscription() {
  const [subscriptionId, setSubscriptionId] = useState(null);

  const { user } = useUser();

  const createSubsription = async (plan_id: string) => {
    axios
      .post(
        '/api/create-subscription',
        JSON.stringify({
          plan_id: plan_id
        })
      )
      .then((resp) => {
        setSubscriptionId(resp.data.id);
        makePayment();
      });
  };

  const makePayment = () => {
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_LIVE_KEY,
      subscription_id: subscriptionId,
      name: 'My Academy',
      description: 'My Academy pro membership',
      handler: async (resp: RazorPaymentID) => {
        if (resp) {
          addNewMember(resp?.razorpay_payment_id);
        }
      },
      theme: {
        color: '#7D41E1'
      }
    };

    const rzp = new (window as any).Razorpay(options);
    rzp.open();
  };

  const addNewMember = (paymentId: string) => {
    addNewMemberMutation(user?.primaryEmailAddress?.emailAddress, paymentId).then(() => {
      toast('Successfully doing payment !!');
    });
  };

  return { createSubsription };
}

export default useSubscription;
