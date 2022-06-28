import { loadStripe } from "@stripe/stripe-js";

let stripePromise = null

export default async function checkout({lineItems}){
    console.log(lineItems)

    const getStripe = () => {
        if (!stripePromise) {
            stripePromise = loadStripe('pk_test_51Kr9ujGAvyRgIANdcAJyhVmeKOnZh9KXxhmDJyYvA5m9Gx8VySrmxscfiK3d3pSe4yYsJRo9VfsZkzJRaIpOlW50000z4hGWCL')
        }
        return stripePromise
    }

    const stripe = await getStripe()

    await stripe.redirectToCheckout({
        mode: 'payment',
        lineItems,
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/shop`
        
    })

}
