import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { loadStripe } from "@stripe/stripe-js";
import {
  PaymentElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { PAYMENT_URL } from "../../constants";
import axiosInstance from "../../api/axios";
import { toast } from "react-toastify";

const CheckoutForm = ({ setPaymentProcessing, handleDownload }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false); // Add state for processing status

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || isProcessing) {
      return;
    }

    setIsProcessing(true);
    try {
      const { error: submitError } = await elements.submit();
      if (submitError) {
        setErrorMessage(submitError.message);
        setIsProcessing(false);
        return;
      }

      const response = await axiosInstance.get(PAYMENT_URL);

      const { client_secret: clientSecret } = response.data;

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          return_url: "https://example.com/order/123/complete",
        },
        redirect: "if_required",
      });

      if (error) {
        setErrorMessage(error.message);
      } else {
        toast.success("Payment successful.");
        handleDownload();
        setPaymentProcessing((prev) => ({
          ...prev,
          status: "complete",
        }));
      }
    } catch (error) {
      console.error("Error:", error);
      setErrorMessage("An error occurred while processing your payment.");
    } finally {
      setIsProcessing(false); // Re-enable submit button
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      <Button type="submit" disabled={!stripe || !elements || isProcessing}>
        {isProcessing ? "Processing..." : "Pay"}
      </Button>
      {errorMessage && <div>{errorMessage}</div>}
    </form>
  );
};

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISH_KEY);

const options = {
  mode: "payment",
  amount: 100,
  currency: "inr",

  appearance: {},
};

const PaymentModal = ({
  paymentProcessing,
  setPaymentProcessing,
  handleDownload,
}) => {
  const handleClose = () =>
    setPaymentProcessing({
      paymentFor: "",
      status: "",
    });

  return (
    <Modal
      show={paymentProcessing?.status === "processing"}
      onHide={handleClose}
    >
      <Modal.Header closeButton>
        <Modal.Title>Payment</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm
            paymentProcessing={paymentProcessing}
            setPaymentProcessing={setPaymentProcessing}
            handleDownload={handleDownload}
          />
        </Elements>
      </Modal.Body>
    </Modal>
  );
};

export default PaymentModal;
