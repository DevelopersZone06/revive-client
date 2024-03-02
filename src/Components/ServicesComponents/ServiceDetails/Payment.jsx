import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";

//ToDo : add publishable key
const stripPromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK)
const Payment = () => {
    return (
        <div className="m-20 ">
            
            
          <Elements stripe={stripPromise }>
          <CheckoutForm></CheckoutForm>
          </Elements>
        </div>
    );
};

export default Payment;