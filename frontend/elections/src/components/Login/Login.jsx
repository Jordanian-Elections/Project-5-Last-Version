// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Login({ handleLogin }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nationalID, setNationalID] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleLogin({ name, email, password, nationalID });
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="الاسم"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zait"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="البريد الإلكتروني"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة المرور</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="كلمة المرور"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="nationalID" className="block text-sm font-medium text-gray-700">رقم الهوية الوطنية</label>
//             <input
//               id="nationalID"
//               type="text"
//               placeholder="رقم الهوية الوطنية"
//               value={nationalID}
//               onChange={(e) => setNationalID(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             تسجيل الدخول
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           ليس لديك حساب؟ <Link to="/signup" className="text-blue-600 hover:underline">سجل الآن</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

/////////////////////////////////////////////

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import Cookies from 'js-cookie';

// function Login({ handleLogin }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nationalID, setNationalID] = useState('');
//   const [error, setError] = useState('');

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     const response = await axios.post('http://localhost:4003/api/userAuth/login', { name, email, password, nationalID });
//   //     const { token } = response.data;
//   //     Cookies.set('token', token, { expires: 1 }); // Token expires in 1 day
//   //     handleLogin();
//   //   } catch (error) {
//   //     setError(error.response.data.message || 'An error occurred');
//   //   }
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4003/api/userAuth/login', { name, email, password, nationalID });
//       console.log('Response:', response); // Add this line to log the response
//       if (response && response.data) {
//         const { token } = response.data;
//         Cookies.set('token', token, { expires: 1 }); // Token expires in 1 day
//         handleLogin();
//       } else {
//         setError('Unexpected response format');
//       }
//     } catch (error) {
//       if (error.response) {
//         // Error from the server
//         console.error('Error response:', error.response); // Log the error response
//         setError(error.response.data.message || 'An error occurred');
//       } else {
//         // Error from the client (e.g., network error)
//         console.error('Error:', error); // Log the error
//         setError('Network error or server is down');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="الاسم"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="البريد الإلكتروني"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة المرور</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="كلمة المرور"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="nationalID" className="block text-sm font-medium text-gray-700">رقم الهوية الوطنية</label>
//             <input
//               id="nationalID"
//               type="text"
//               placeholder="رقم الهوية الوطنية"
//               value={nationalID}
//               onChange={(e) => setNationalID(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           {error && <p className="text-red-600">{error}</p>}
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             تسجيل الدخول
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           ليس لديك حساب؟ <Link to="/signup" className="text-blue-600 hover:underline">سجل الآن</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

////////////////////////////////////////////////////////

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Link } from 'react-router-dom';

// function Login({ handleLogin }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nationalID, setNationalID] = useState('');
//   const [error, setError] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4003/api/userAuth/login', { name, email, password, nationalID });
//       console.log('Response:', response); // Add this line to log the response
//       if (response && response.data) {
//         const { token } = response.data;
//         Cookies.set('token', token, { expires: 1 }); // Token expires in 1 day
//         if (handleLogin) {
//           handleLogin(); // Call handleLogin if it's a function
//         }
//       } else {
//         setError('Unexpected response format');
//       }
//     } catch (error) {
//       if (error.response) {
//         // Error from the server
//         console.error('Error response:', error.response); // Log the error response
//         setError(error.response.data.message || 'An error occurred');
//       } else {
//         // Error from the client (e.g., network error)
//         console.error('Error:', error); // Log the error
//         setError('Network error or server is down');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="الاسم"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="البريد الإلكتروني"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة المرور</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="كلمة المرور"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="nationalID" className="block text-sm font-medium text-gray-700">رقم الهوية الوطنية</label>
//             <input
//               id="nationalID"
//               type="text"
//               placeholder="رقم الهوية الوطنية"
//               value={nationalID}
//               onChange={(e) => setNationalID(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           {error && <p className="text-red-600">{error}</p>}
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             تسجيل الدخول
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           ليس لديك حساب؟ <Link to="/signup" className="text-blue-600 hover:underline">سجل الآن</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;  this is work

// import React, { useState } from 'react';
// import axios from 'axios';
// import Cookies from 'js-cookie';
// import { Link, useNavigate } from 'react-router-dom';

// function Login({ handleLogin }) {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [nationalID, setNationalID] = useState('');
//   const [error, setError] = useState('');

//   // Initialize useNavigate
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4003/api/userAuth/login', { name, email, password, nationalID });
//       console.log('Response:', response);
//       if (response && response.data) {
//         const { token } = response.data;
//         Cookies.set('token', token, { expires: 1 });
//         if (handleLogin) {
//           handleLogin();
//         }
//         // Redirect to home page after login
//         navigate('/');
//       } else {
//         setError('Unexpected response format');
//       }
//     } catch (error) {
//       if (error.response) {
//         console.error('Error response:', error.response);
//         setError(error.response.data.message || 'An error occurred');
//       } else {
//         console.error('Error:', error);
//         setError('Network error or server is down');
//       }
//     }
//   };

//   return (
//     <div className="flex justify-center items-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">تسجيل الدخول</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block text-sm font-medium text-gray-700">الاسم</label>
//             <input
//               id="name"
//               type="text"
//               placeholder="الاسم"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">البريد الإلكتروني</label>
//             <input
//               id="email"
//               type="email"
//               placeholder="البريد الإلكتروني"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="password" className="block text-sm font-medium text-gray-700">كلمة المرور</label>
//             <input
//               id="password"
//               type="password"
//               placeholder="كلمة المرور"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           <div>
//             <label htmlFor="nationalID" className="block text-sm font-medium text-gray-700">رقم الهوية الوطنية</label>
//             <input
//               id="nationalID"
//               type="text"
//               placeholder="رقم الهوية الوطنية"
//               value={nationalID}
//               onChange={(e) => setNationalID(e.target.value)}
//               className="w-full px-4 py-2 mt-1 text-right border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//           </div>
//           {error && <p className="text-red-600">{error}</p>}
//           <button
//             type="submit"
//             className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
//           >
//             تسجيل الدخول
//           </button>
//         </form>
//         <p className="mt-4 text-center text-gray-600">
//           ليس لديك حساب؟ <Link to="/signup" className="text-blue-600 hover:underline">سجل الآن</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Login;

//////////////////////// woooork

import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login({ handleLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nationalID, setNationalID] = useState("");
  const [error, setError] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [nationalIDError, setNationalIDError] = useState("");

  const navigate = useNavigate();

  const validateInputs = () => {
    let valid = true;

    // Name validation (Arabic letters and spaces only)
    const nameRegex = /^[\u0621-\u064A\s]+$/;
    if (!nameRegex.test(name)) {
      setNameError("الاسم يجب أن يحتوي فقط على الحروف العربية والمسافات");
      valid = false;
    } else {
      setNameError("");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("البريد الإلكتروني غير صالح");
      valid = false;
    } else {
      setEmailError("");
    }

    // // Password validation (at least 8 characters, one number, one letter)
    // const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    // if (!passwordRegex.test(password)) {
    //   setPasswordError('كلمة المرور يجب أن تكون 8 أحرف على الأقل وتحتوي على حرف ورقم');
    //   valid = false;
    // } else {
    //   setPasswordError('');
    // }

    // Password validation (at least 8 characters, one letter, one number, and one special character)
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (!passwordRegex.test(password)) {
      setPasswordError(
        "كلمة المرور يجب أن تكون 8 أحرف على الأقل وتحتوي على حرف، ورقم، ورمز خاص"
      );
      valid = false;
    } else {
      setPasswordError("");
    }

    // National ID validation (numbers only, 10 digits)
    const nationalIDRegex = /^\d{10}$/;
    if (!nationalIDRegex.test(nationalID)) {
      setNationalIDError("رقم الهوية الوطنية يجب أن يتكون من 10 أرقام");
      valid = false;
    } else {
      setNationalIDError("");
    }

    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4003/api/userAuth/login",
        { name, email, password, nationalID }
      );
      console.log("Response:", response);
      if (response && response.data) {
        // <<<<<<< HEAD
        //         const { token, nationalID } = response.data;
        // console.log(response.data.national_id);

        const { token } = response.data;
        sessionStorage.setItem("national_id", response.data.national_id);
        sessionStorage.setItem("token", response.data.token);

        console.log(response.data.national_id);
        Cookies.set("token", token, { expires: 1 });

        Swal.fire({
          title: "تم تسجيل الدخول بنجاح!",
          text: "مرحبًا بك في منصتنا.",
          icon: "success",
          confirmButtonText: "موافق",
          color: "",
        }).then(() => {
          if (handleLogin) {
            handleLogin();
          }
          navigate("/");
        });
      } else {
        setError("Unexpected response format");
      }
    } catch (error) {
      if (error.response) {
        console.error("Error response:", error.response);
        setError(error.response.data.message || "An error occurred");
      } else {
        console.error("Error:", error);
        setError("Network error or server is down");
      }
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-zait1">
      <div className="w-full max-w-md p-8 bg-white opacity-80 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6 text-center text-zait">
          تسجيل الدخول
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              الاسم
            </label>
            <input
              id="name"
              type="text"
              placeholder="الاسم"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full px-4 py-2 mt-1 text-right border ${
                nameError ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zait`}
            />
            {nameError && <p className="text-red-600">{nameError}</p>}
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              type="email"
              placeholder="البريد الإلكتروني"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`w-full px-4 py-2 mt-1 text-right border ${
                emailError ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zait`}
            />
            {emailError && <p className="text-red-600">{emailError}</p>}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              كلمة المرور
            </label>
            <input
              id="password"
              type="password"
              placeholder="كلمة المرور"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full px-4 py-2 mt-1 text-right border ${
                passwordError ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zait`}
            />
            {passwordError && <p className="text-red-600">{passwordError}</p>}
          </div>
          <div>
            <label
              htmlFor="nationalID"
              className="block text-sm font-medium text-gray-700"
            >
              رقم الهوية الوطنية
            </label>
            <input
              id="nationalID"
              type="text"
              placeholder="رقم الهوية الوطنية"
              value={nationalID}
              onChange={(e) => setNationalID(e.target.value)}
              className={`w-full px-4 py-2 mt-1 text-right border ${
                nationalIDError ? "border-red-500" : "border-gray-300"
              } rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-zait`}
            />
            {nationalIDError && (
              <p className="text-red-600">{nationalIDError}</p>
            )}
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit"
            className="w-full px-4 py-2 bg-zait text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            تسجيل الدخول
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          ليس لديك حساب؟{" "}
          <Link to="/signup" className="text-zait hover:underline">
            سجل الآن
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
