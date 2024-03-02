import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const handleSubmit = async(event) =>{
        event.preventDefault()
        if(!stripe || !elements){
            return;
        }
        const card = elements.getElement(CardElement)
        if( card== null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type:"card",
          card
        })
        if(error){
          console.log('payment error', error );
        }
        else {
          console.log('payment method', paymentMethod);
        }
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
            <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
          />
          <button type="submit" disabled={!stripe} className='flex justify-center items-center bg-sky-800 text-sky-50  rounded-md text-xl  font-medium mt-20 px-4 py-2 w-1/2  mx-auto'>
          Pay
        </button>
            </form>
        </div>
    );
};

export default CheckoutForm;