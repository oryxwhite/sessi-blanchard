import axios, { Axios } from "axios"
import getStripe from "../api/get-stripe"

const redirectToCheckout = async () => {
    const { 
        data: { id },
    } = await Axios.post('/api/checkout_sessions', {
        items: Object.entries(cartDetails).map(([_, { id, quantity }]) => ({
            price: id,
            quantity,
        }))
    })

    const stripe = await getStripe()
    await stripe.redirectToCheckout({ sessionId: id })
}

