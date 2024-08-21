// // // // PaymentComponent.js

// // // import React, { useState } from 'react';
// // // import { loadStripe } from '@stripe/stripe-js';
// // // import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // // const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// // // const CheckoutForm = () => {
// // //   const stripe = useStripe();
// // //   const elements = useElements();
// // //   const [error, setError] = useState(null);
// // //   const [processing, setProcessing] = useState(false);
// // //   const [succeeded, setSucceeded] = useState(false);

// // //   const handleSubmit = async (event) => {
// // //     event.preventDefault();
// // //     setProcessing(true);

// // //     const { error: backendError, clientSecret } = await fetch('/create-payment-intent', {
// // //       method: 'POST',
// // //       headers: { 'Content-Type': 'application/json' },
// // //       body: JSON.stringify({ amount: 1000, currency: 'usd' }), // example amount
// // //     }).then((r) => r.json());

// // //     if (backendError) {
// // //       setError(backendError);
// // //       setProcessing(false);
// // //       return;
// // //     }

// // //     const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// // //       payment_method: {
// // //         card: elements.getElement(CardElement),
// // //       },
// // //     });

// // //     if (stripeError) {
// // //       setError(stripeError.message);
// // //     } else if (paymentIntent.status === 'succeeded') {
// // //       setSucceeded(true);
// // //     }

// // //     setProcessing(false);
// // //   };

// // //   return (
// // //     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
// // //       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
// // //       {error && <div className="text-red-500">{error}</div>}
// // //       <button
// // //         type="submit"
// // //         disabled={!stripe || processing || succeeded}
// // //         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
// // //       >
// // //         {processing ? 'Processing...' : 'Pay Now'}
// // //       </button>
// // //       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
// // //     </form>
// // //   );
// // // };

// // // const PaymentComponent = () => {
// // //   return (
// // //     <Elements stripe={stripePromise}>
// // //       <CheckoutForm />
// // //     </Elements>
// // //   );
// // // };

// // // export default PaymentComponent;

// // // PaymentComponent.js

// // import React, { useState } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// // const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const [error, setError] = useState(null);
// //   const [processing, setProcessing] = useState(false);
// //   const [succeeded, setSucceeded] = useState(false);

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setProcessing(true);

// //     try {
// //       const response = await fetch('http://localhost:4003/create-payment-intent', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ amount: 1000, currency: 'usd' }), // example amount
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const { error: backendError, clientSecret } = await response.json();

// //       if (backendError) {
// //         setError(backendError);
// //         setProcessing(false);
// //         return;
// //       }

// //       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: {
// //           card: elements.getElement(CardElement),
// //         },
// //       });

// //       if (stripeError) {
// //         setError(stripeError.message);
// //       } else if (paymentIntent.status === 'succeeded') {
// //         setSucceeded(true);
// //       }

// //       setProcessing(false);
// //     } catch (error) {
// //       console.error('Error:', error.message);
// //       setError(error.message);
// //       setProcessing(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
// //       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
// //       {error && <div className="text-red-500">{error}</div>}
// //       <button
// //         type="submit"
// //         disabled={!stripe || processing || succeeded}
// //         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
// //       >
// //         {processing ? 'Processing...' : 'Pay Now'}
// //       </button>
// //       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
// //     </form>
// //   );
// // };

// // const PaymentComponent = () => {
// //   return (
// //     <Elements stripe={stripePromise}>
// //       <CheckoutForm />
// //     </Elements>
// //   );
// // };

// // export default PaymentComponent;

// // PaymentComponent.js

// /////كود لستلمتو/////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

// const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [error, setError] = useState(null);
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);
//   const [email, setEmail] = useState('');
//   const [amount, setAmount] = useState(0);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);

//     try {
//       const response = await fetch('http://localhost:4003/create-payment-intent', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ amount: parseInt(amount), currency: 'usd' }),
//       });

//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }

//       const { error: backendError, clientSecret } = await response.json();

//       if (backendError) {
//         setError(backendError);
//         setProcessing(false);
//         return;
//       }

//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: {
//             email: email,
//           },
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         setSucceeded(true);
//       }

//       setProcessing(false);
//     } catch (error) {
//       console.error('Error:', error.message);
//       setError(error.message);
//       setProcessing(false);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="mb-4 p-3 w-full border border-gray-300 rounded-md"
//         required
//       />
//       <input
//         type="number"
//         placeholder="Amount in cents"
//         value={amount}
//         onChange={(e) => setAmount(e.target.value)}
//         className="mb-4 p-3 w-full border border-gray-300 rounded-md"
//         required
//       />
//       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
//       {error && <div className="text-red-500">{error}</div>}
//       <button
//         type="submit"
//         disabled={!stripe || processing || succeeded}
//         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
//       >
//         {processing ? 'Processing...' : 'Pay Now'}
//       </button>
//       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
//     </form>
//   );
// };

// const PaymentComponent = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PaymentComponent;

// // import React, { useState } from 'react';
// // import { loadStripe } from '@stripe/stripe-js';
// // import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// // import { useLocation } from 'react-router-dom';
// // import axios from 'axios';

// // const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// // const CheckoutForm = () => {
// //   const stripe = useStripe();
// //   const elements = useElements();
// //   const location = useLocation(); // استخدام useLocation لاستخراج البيانات
// //   const { formData } = location.state || {}; // البيانات القادمة من صفحة طلب الإعلان
// //   const [error, setError] = useState(null);
// //   const [processing, setProcessing] = useState(false);
// //   const [succeeded, setSucceeded] = useState(false);
// //   const [email, setEmail] = useState('');
// //   const [amount, setAmount] = useState(4003); // تحديد المبلغ هنا (مثلاً 4003 سنت أي 50 دولار)

// //   const handleSubmit = async (event) => {
// //     event.preventDefault();
// //     setProcessing(true);

// //     try {
// //       const response = await fetch('http://localhost:4003/create-payment-intent', {
// //         method: 'POST',
// //         headers: { 'Content-Type': 'application/json' },
// //         body: JSON.stringify({ amount: parseInt(amount), currency: 'usd' }),
// //       });

// //       if (!response.ok) {
// //         throw new Error(`HTTP error! status: ${response.status}`);
// //       }

// //       const { error: backendError, clientSecret } = await response.json();

// //       if (backendError) {
// //         setError(backendError);
// //         setProcessing(false);
// //         return;
// //       }

// //       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
// //         payment_method: {
// //           card: elements.getElement(CardElement),
// //           billing_details: {
// //             email: email,
// //           },
// //         },
// //       });

// //       if (stripeError) {
// //         setError(stripeError.message);
// //       } else if (paymentIntent.status === 'succeeded') {
// //         setSucceeded(true);

// //         // تخزين البيانات في قاعدة البيانات بعد نجاح الدفع
// //         await axios.post('http://localhost:4003/api/ads', formData, {
// //           headers: {
// //             'Content-Type': 'application/json',
// //           }
// //         });

// //         console.log('تم تخزين بيانات الإعلان بنجاح');
// //       }

// //       setProcessing(false);
// //     } catch (error) {
// //       console.error('Error:', error.message);
// //       setError(error.message);
// //       setProcessing(false);
// //     }
// //   };

// //   return (
// //     <form onSubmit={handleSubmit} className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
// //       <input
// //         type="email"
// //         placeholder="Email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //         className="mb-4 p-3 w-full border border-gray-300 rounded-md"
// //         required
// //       />
// //       <input
// //         type="number"
// //         placeholder="Amount in cents"
// //         value={amount}
// //         onChange={(e) => setAmount(e.target.value)}
// //         className="mb-4 p-3 w-full border border-gray-300 rounded-md"
// //         required
// //       />
// //       <CardElement className="mb-4 p-3 border border-gray-300 rounded-md" />
// //       {error && <div className="text-red-500">{error}</div>}
// //       <button
// //         type="submit"
// //         disabled={!stripe || processing || succeeded}
// //         className={`mt-4 p-3 w-full text-white ${processing ? 'bg-gray-500' : 'bg-blue-600'} rounded-md`}
// //       >
// //         {processing ? 'Processing...' : 'Pay Now'}
// //       </button>
// //       {succeeded && <p className="text-green-500 mt-4">Payment succeeded!</p>}
// //     </form>
// //   );
// // };

// // const PaymentComponent = () => {
// //   return (
// //     <Elements stripe={stripePromise}>
// //       <CheckoutForm />
// //     </Elements>
// //   );
// // };

// // export default PaymentComponent;

/////////////////////////////////////////////work with malek/////////////

// import React, { useState } from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
// import axios from 'axios';

// // Replace with your own publishable key
// const stripePromise = loadStripe('pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt');

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();
//   const [email, setEmail] = useState('');
//   const [error, setError] = useState('');
//   const [processing, setProcessing] = useState(false);
//   const [succeeded, setSucceeded] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setProcessing(true);
//     setError('');

//     // Default amount in cents (200 dollars)
//     const amountInCents = 200;

//     try {
//       const response = await axios.post('http://localhost:4003/payments/create-payment-intent', { amount: amountInCents, currency: 'usd' });
//       const { error: backendError, clientSecret } = response.data;

//       if (backendError) {
//         setError(backendError);
//         setProcessing(false);
//         return;
//       }

//       const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: elements.getElement(CardElement),
//           billing_details: { email },
//         },
//       });

//       if (stripeError) {
//         setError(stripeError.message);
//       } else if (paymentIntent.status === 'succeeded') {
//         setSucceeded(true);
//       }

//       setProcessing(false);
//     } catch (error) {
//       console.error('Error:', error.message);
//       setError('حدث خطأ أثناء معالجة الدفع.');
//       setProcessing(false);
//     }
//   };

//   return (
//     <div className="checkout-page flex items-center justify-center min-h-screen bg-gray-100 rtl">
//       <div className="checkout-container bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
//         <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">إتمام الدفع</h1>
//         {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
//         {succeeded && <p className="text-green-600 mb-4 text-center">تمت عملية الدفع بنجاح!</p>}
//         <form onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">البريد الإلكتروني</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div className="mb-6">
//             <label className="block text-sm font-medium text-gray-700 mb-2">تفاصيل بطاقة الدفع</label>
//             <CardElement
//               className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//               options={{
//                 style: {
//                   base: {
//                     fontSize: '16px',
//                     color: '#424770',
//                     '::placeholder': {
//                       color: '#aab7c4',
//                     },
//                   },
//                   invalid: {
//                     color: '#9e2146',
//                   },
//                 },
//               }}
//             />
//           </div>
//           <button
//             type="submit"
//             disabled={!stripe || processing || succeeded}
//             className={`w-full py-3 px-4 rounded-md text-white ${processing ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'} transition duration-200`}
//           >
//             {processing ? 'جاري معالجة الدفع...' : 'ادفع الآن'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const PaymentComponent = () => {
//   return (
//     <Elements stripe={stripePromise}>
//       <CheckoutForm />
//     </Elements>
//   );
// };

// export default PaymentComponent;

import React, { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const stripePromise = loadStripe(
  "pk_test_51PnmyzLnJej27waJMLMa1v5bytDTIMqPrzKtmEsLslorjlsqAe7WKblwcWJ8ZKyKcixgSPtuPQVp5nW9tRTt44s400crytM4qt"
);

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    setError("");

    const amountInCents = 200;

    try {
      // Display confirmation alert
      const result = await Swal.fire({
        title: "هل أنت متأكد؟",
        text: "هل تريد إتمام عملية الدفع؟",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "نعم، أكمل الدفع",
        cancelButtonText: "إلغاء",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
          cancelButton:
            "bg-red-500 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
        },
      });

      // If the user confirmed, proceed with the payment
      if (result.isConfirmed) {
        const response = await axios.post(
          "http://localhost:4003/payments/create-payment-intent",
          { amount: amountInCents, currency: "usd" }
        );
        const { error: backendError, clientSecret } = response.data;

        if (backendError) {
          setError(backendError);
          setProcessing(false);
          return;
        }

        const { error: stripeError, paymentIntent } =
          await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
              card: elements.getElement(CardElement),
              billing_details: { email },
            },
          });

        if (stripeError) {
          setError(stripeError.message);
        } else if (paymentIntent.status === "succeeded") {
          setSucceeded(true);

          // Get the form data from local storage or context/state
          const debateFormData = JSON.parse(
            localStorage.getItem("debateFormData")
          );

          // Send the debate request data to the server
          await axios.post("http://localhost:4003/api/debates", debateFormData);

          Swal.fire({
            title: "تم إرسال الطلب بنجاح!",
            text: "ننتظر موافقة الأدمن على طلبك",
            icon: "success",
            confirmButtonText: "موافق",
            customClass: {
              confirmButton:
                "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
            },
          });

          // Clear local storage and navigate
          localStorage.removeItem("debateFormData");
          navigate("/create-debate");
        }

        setProcessing(false);
      } else {
        setProcessing(false);
        Swal.fire({
          title: "تم إلغاء الدفع",
          text: "لم يتم إتمام عملية الدفع",
          icon: "info",
          confirmButtonText: "موافق",
          customClass: {
            confirmButton:
              "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
          },
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      setError("حدث خطأ أثناء معالجة الدفع.");
      setProcessing(false);
    }
  };

  return (
    <div className="checkout-page flex items-center justify-center min-h-screen bg-gray-100 rtl">
      <div className="checkout-container bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          إتمام الدفع
        </h1>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        {succeeded && (
          <p className="text-green-600 mb-4 text-center">
            تمت عملية الدفع بنجاح!
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              تفاصيل بطاقة الدفع
            </label>
            <CardElement
              className="border border-gray-300 p-3 w-full rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </div>
          <button
            type="submit"
            disabled={!stripe || processing || succeeded}
            className={`w-full py-3 px-4 rounded-md text-white ${
              processing ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"
            } transition duration-200`}
          >
            {processing ? "جاري معالجة الدفع..." : "ادفع الآن"}
          </button>
        </form>
      </div>
    </div>
  );
};

const PaymentComponent = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default PaymentComponent;
