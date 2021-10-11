import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price })=>{
    const priceForStripe = price * 100;
    const publishableKey = 
    'pk_test_51JjHk5GJDoXf3rjwQelmT0ScR8jJ3Py3UZwgQ4J187qCD07sOU2xnfModMfs1F5TlcLvx25QdffqCM62ft08GyFO00fjYQwhUx'

 const onToken = token =>{
     console.log(token);
     alert('Payment Successful')
 }   
    return (
        <StripeCheckout 
            label='Pay Now'
            name='Clothing'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description ={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton;
