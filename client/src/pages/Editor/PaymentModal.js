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

const CheckoutForm = ({ setPaymentProcessing, handleDownload, setLoading }) => {
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
      setLoading(true);
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
        setLoading(false);
        setErrorMessage(error.message);
      } else {
        toast.success("Payment successful.");
        setLoading(false);
        handleDownload();
        setPaymentProcessing((prev) => ({
          ...prev,
          status: "complete",
        }));
      }
    } catch (error) {
      setLoading(false);
      console.error("Error:", error);
      setErrorMessage("An error occurred while processing your payment.");
    } finally {
      setIsProcessing(false); // Re-enable submit button
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h6 className="mb-4">
        Please make a payment of 1 rupee to download the resume.
      </h6>
      <PaymentElement />
      <hr />
      <div className="d-flex flex-column align-items-end">
        {errorMessage && <small className="text-danger ">{errorMessage}</small>}
        <button
          className="btn btn-primary my-2 w-25"
          type="submit"
          disabled={!stripe || !elements || isProcessing}
        >
          {isProcessing ? "Processing..." : "Confirm"}
        </button>
      </div>
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
  setLoading,
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
            setLoading={setLoading}
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
