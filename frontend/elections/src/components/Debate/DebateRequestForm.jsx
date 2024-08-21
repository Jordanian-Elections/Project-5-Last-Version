// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   try {
//   //     await axios.post('/api/debates', formData);
//   //     navigate('/create-debate'); // Adjust as needed
//   //   } catch (error) {
//   //     if (error.response && error.response.status === 400) {
//   //       setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//   //     } else {
//   //       setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//   //     }
//   //   }
//   // };
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4003/api/debates', formData); // Updated URL to match the backend server's port
//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;

//////////////////////new//////////////////

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2'; // Import SweetAlert2

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4003/api/debates', formData); // Updated URL to match the backend server's port

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر رد الأدمن عليك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;

/////////////////

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4003/api/debates', formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر رد الأدمن عليك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       // Clear the form fields
//       setFormData({
//         name: '',
//         start_time: '',
//         end_time: '',
//         candidate1_id: '',
//         candidate2_id: ''
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;

///////////////////////correct work ///////////////////////

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4003/api/debates', formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر موافقة الأدمن على طلبك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       // Clear the form fields
//       setFormData({
//         name: '',
//         start_time: '',
//         end_time: '',
//         candidate1_id: '',
//         candidate2_id: ''
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default DebateRequestForm;

///////////////////////////////work correct final version ////////////////////

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import Header from '../Header/Header';
// import Footer from '../Footer/Footer';
// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     start_time: '',
//     end_time: '',
//     candidate1_id: '',
//     candidate2_id: ''
//   });
//   const [error, setError] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateNationalId = (id) => {
//     return id.length === 10;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate national IDs
//     if (!validateNationalId(formData.candidate1_id) || !validateNationalId(formData.candidate2_id)) {
//       setError('الرقم الوطني يجب أن يكون مكونًا من 10 أرقام.');
//       return;
//     }

//     try {
//       await axios.post('http://localhost:4003/api/debates', formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: 'تم إرسال الطلب بنجاح!',
//         text: 'ننتظر موافقة الأدمن على طلبك',
//         icon: 'success',
//         confirmButtonText: 'موافق'
//       });

//       // Clear the form fields
//       setFormData({
//         name: '',
//         start_time: '',
//         end_time: '',
//         candidate1_id: '',
//         candidate2_id: ''
//       });

//       navigate('/create-debate');
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError('المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.');
//       } else {
//         setError('حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.');
//       }
//     }
//   };

//   return (
//     <>
//           <Header/>

//     <div className="max-w-md mx-auto mt-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
//         <h2 className="text-2xl font-bold mb-6 text-center">طلب مناظرة</h2>
//         {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
//             اسم المناظرة
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="name"
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="start_time">
//             وقت البداية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="start_time"
//             type="datetime-local"
//             name="start_time"
//             value={formData.start_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="end_time">
//             وقت النهاية
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="end_time"
//             type="datetime-local"
//             name="end_time"
//             value={formData.end_time}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate1_id">
//             الرقم الوطني للمرشح الأول
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate1_id"
//             type="number"
//             name="candidate1_id"
//             value={formData.candidate1_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="mb-6">
//           <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="candidate2_id">
//             الرقم الوطني للمرشح الثاني
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="candidate2_id"
//             type="number"
//             name="candidate2_id"
//             value={formData.candidate2_id}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div className="flex items-center justify-between">
//           <button
//             className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
//             type="submit"
//           >
//             إرسال الطلب
//           </button>
//         </div>
//       </form>
//     </div>
//     <Footer/>

//     </>

//   );
// };

// export default DebateRequestForm;

/////////

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";
// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     start_time: "",
//     end_time: "",
//     candidate1_id: "",
//     candidate2_id: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateNationalId = (id) => {
//     return id.length === 10;
//   };

//   const validateDates = () => {
//     const now = new Date();
//     const startTime = new Date(formData.start_time);
//     const endTime = new Date(formData.end_time);

//     if (startTime < now) {
//       return "لا يمكن إنشاء مناظرة بتاريخ سابق. يرجى اختيار تاريخ مستقبلي.";
//     }

//     if (endTime <= startTime) {
//       return "يجب أن يكون وقت النهاية بعد وقت البداية.";
//     }

//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate national IDs
//     if (
//       !validateNationalId(formData.candidate1_id) ||
//       !validateNationalId(formData.candidate2_id)
//     ) {
//       setError("الرقم الوطني يجب أن يكون مكونًا من 10 أرقام.");
//       return;
//     }

//     // Validate dates
//     const dateError = validateDates();
//     if (dateError) {
//       setError(dateError);
//       return;
//     }

//     try {
//       await axios.post("http://localhost:4003/api/debates", formData);

//       // Show SweetAlert2 success message
//       Swal.fire({
//         title: "تم إرسال الطلب بنجاح!",
//         text: "ننتظر موافقة الأدمن على طلبك",
//         icon: "success",
//         confirmButtonText: "موافق",
//       });

//       // Clear the form fields
//       setFormData({
//         name: "",
//         start_time: "",
//         end_time: "",
//         candidate1_id: "",
//         candidate2_id: "",
//       });

//       navigate("/create-debate");
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError("المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.");
//       } else {
//         setError("حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.");
//       }
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="w-full max-w-2xl mx-auto mt-10 p-8 rounded-lg shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <h2 className="text-2xl font-bold mb-8 text-right text-[#8E1B3B]">
//           طلب مناظرة جديدة
//         </h2>
//         {error && (
//           <p className="text-red-500 text-sm mb-4 text-right">{error}</p>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
//           <div className="flex flex-col">
//             <label className="mb-2 text-[#8E1B3B] font-semibold" htmlFor="name">
//               اسم المناظرة
//             </label>
//             <input
//               className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#8E1B3B] font-semibold"
//                 htmlFor="start_time"
//               >
//                 وقت البداية
//               </label>
//               <input
//                 className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
//                 id="start_time"
//                 type="datetime-local"
//                 name="start_time"
//                 value={formData.start_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#8E1B3B] font-semibold"
//                 htmlFor="end_time"
//               >
//                 وقت النهاية
//               </label>
//               <input
//                 className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
//                 id="end_time"
//                 type="datetime-local"
//                 name="end_time"
//                 value={formData.end_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#8E1B3B] font-semibold"
//                 htmlFor="candidate1_id"
//               >
//                 الرقم الوطني للمرشح الأول
//               </label>
//               <input
//                 className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
//                 id="candidate1_id"
//                 type="number"
//                 name="candidate1_id"
//                 value={formData.candidate1_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#8E1B3B] font-semibold"
//                 htmlFor="candidate2_id"
//               >
//                 الرقم الوطني للمرشح الثاني
//               </label>
//               <input
//                 className="w-full border-2 border-[#8E1B3B] rounded-md p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#8E1B3B] focus:border-transparent"
//                 id="candidate2_id"
//                 type="number"
//                 name="candidate2_id"
//                 value={formData.candidate2_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex justify-end mt-8">
//             <button
//               type="submit"
//               className="bg-[#8E1B3B] text-white px-8 py-3 rounded-md hover:bg-[#72152d] transition duration-300 text-lg font-semibold"
//             >
//               إرسال الطلب
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default DebateRequestForm;

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import Swal from "sweetalert2";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     start_time: "",
//     end_time: "",
//     candidate1_id: "",
//     candidate2_id: "",
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateNationalId = (id) => {
//     return id.length === 10;
//   };

//   const validateDates = () => {
//     const now = new Date();
//     const startTime = new Date(formData.start_time);
//     const endTime = new Date(formData.end_time);

//     if (startTime < now) {
//       return "لا يمكن إنشاء مناظرة بتاريخ سابق. يرجى اختيار تاريخ مستقبلي.";
//     }

//     if (endTime <= startTime) {
//       return "يجب أن يكون وقت النهاية بعد وقت البداية.";
//     }

//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !validateNationalId(formData.candidate1_id) ||
//       !validateNationalId(formData.candidate2_id)
//     ) {
//       setError("الرقم الوطني يجب أن يكون مكونًا من 10 أرقام.");
//       return;
//     }

//     const dateError = validateDates();
//     if (dateError) {
//       setError(dateError);
//       return;
//     }

//     try {
//       await axios.post("http://localhost:4003/api/debates", formData);

//       Swal.fire({
//         title: "تم إرسال الطلب بنجاح!",
//         text: "ننتظر موافقة الأدمن على طلبك",
//         icon: "success",
//         confirmButtonText: "موافق",
//       });

//       setFormData({
//         name: "",
//         start_time: "",
//         end_time: "",
//         candidate1_id: "",
//         candidate2_id: "",
//       });

//       navigate("/create-debate");
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         setError("المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.");
//       } else {
//         setError("حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.");
//       }
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="w-full max-w-2xl mx-auto mt-10 p-8 rounded-xl shadow-xl"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.85)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <h2 className="text-3xl font-bold mb-8 text-right text-[#274C77]">
//           طلب مناظرة جديدة
//         </h2>
//         {error && (
//           <p className="text-red-500 text-sm mb-4 text-right">{error}</p>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
//           <div className="flex flex-col">
//             <label className="mb-2 text-[#274C77] font-semibold" htmlFor="name">
//               اسم المناظرة
//             </label>
//             <input
//               className="w-full border-2 border-[#274C77] rounded-lg p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-200"
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="start_time"
//               >
//                 وقت البداية
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-200"
//                 id="start_time"
//                 type="datetime-local"
//                 name="start_time"
//                 value={formData.start_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="end_time"
//               >
//                 وقت النهاية
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-200"
//                 id="end_time"
//                 type="datetime-local"
//                 name="end_time"
//                 value={formData.end_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row gap-4">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="candidate1_id"
//               >
//                 الرقم الوطني للمرشح الأول
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-200"
//                 id="candidate1_id"
//                 type="text"
//                 name="candidate1_id"
//                 value={formData.candidate1_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="candidate2_id"
//               >
//                 الرقم الوطني للمرشح الثاني
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-3 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-200"
//                 id="candidate2_id"
//                 type="text"
//                 name="candidate2_id"
//                 value={formData.candidate2_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex justify-end mt-8">
//             <button
//               type="submit"
//               className="bg-[#274C77] text-white px-8 py-3 rounded-lg hover:bg-[#1E385A] transition duration-300 text-lg font-semibold"
//             >
//               إرسال الطلب
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer/>
//     </>
//   );
// };

// export default DebateRequestForm;

////////////////////////////////////////////////////work with malek /////////////////

// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     start_time: "",
//     end_time: "",
//     candidate1_id: "",
//     candidate2_id: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateDates = () => {
//     const { start_time, end_time } = formData;
//     if (new Date(start_time) >= new Date(end_time)) {
//       return "وقت النهاية يجب أن يكون بعد وقت البداية.";
//     }
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emptyFields = Object.keys(formData).filter(
//       (key) => formData[key].trim() === ""
//     );

//     if (emptyFields.length > 0) {
//       Swal.fire({
//         title: "خطأ في الإدخال",
//         text: "يرجى تعبئة جميع الحقول المطلوبة.",
//         icon: "error",
//         confirmButtonText: "موافق",
//       });
//       return;
//     }

//     const dateError = validateDates();
//     if (dateError) {
//       Swal.fire({
//         title: "خطأ في التاريخ",
//         text: dateError,
//         icon: "error",
//         confirmButtonText: "موافق",
//       });
//       return;
//     }

//     try {
//       await axios.post("http://localhost:4003/api/debates", formData);

//       Swal.fire({
//         title: "تم إرسال الطلب بنجاح!",
//         text: "ننتظر موافقة الأدمن على طلبك",
//         icon: "success",
//         confirmButtonText: "موافق",
//       });

//       setFormData({
//         name: "",
//         start_time: "",
//         end_time: "",
//         candidate1_id: "",
//         candidate2_id: "",
//       });

//       navigate("/create-debate");
//     } catch (error) {
//       if (error.response && error.response.status === 400) {
//         Swal.fire({
//           title: "خطأ في المرشحين",
//           text: "المرشحين غير صالحين. يرجى التحقق من الأرقام الوطنية.",
//           icon: "error",
//           confirmButtonText: "موافق",
//         });
//       } else {
//         Swal.fire({
//           title: "خطأ",
//           text: "حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.",
//           icon: "error",
//           confirmButtonText: "موافق",
//         });
//       }
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="w-full max-w-2xl mx-auto mt-10 p-10 rounded-xl shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <h2 className="text-4xl font-bold mb-10 text-right text-[#274C77]">
//           طلب مناظرة جديدة
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
//           <div className="flex flex-col">
//             <label className="mb-2 text-[#274C77] font-semibold" htmlFor="name">
//               اسم المناظرة
//             </label>
//             <input
//               className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="start_time"
//               >
//                 وقت البداية
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="start_time"
//                 type="datetime-local"
//                 name="start_time"
//                 value={formData.start_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="end_time"
//               >
//                 وقت النهاية
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="end_time"
//                 type="datetime-local"
//                 name="end_time"
//                 value={formData.end_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="candidate1_id"
//               >
//                 الرقم الوطني للمرشح الأول
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="candidate1_id"
//                 type="text"
//                 name="candidate1_id"
//                 value={formData.candidate1_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="candidate2_id"
//               >
//                 الرقم الوطني للمرشح الثاني
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="candidate2_id"
//                 type="text"
//                 name="candidate2_id"
//                 value={formData.candidate2_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex justify-start mt-10">
//   <button
//     type="submit"
//     className="bg-[#274C77] text-white px-10 py-4 rounded-lg hover:bg-[#1E385A] transition duration-300 text-lg font-semibold"
//   >
//     إرسال الطلب
//   </button>
// </div>

//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default DebateRequestForm;

//////////////////////////////////work with payment /////////////

// import React, { useState } from "react";
// import axios from "axios";
// import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";
// import Header from "../Header/Header";
// import Footer from "../Footer/Footer";

// const DebateRequestForm = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     start_time: "",
//     end_time: "",
//     candidate1_id: "",
//     candidate2_id: "",
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateDates = () => {
//     const { start_time, end_time } = formData;
//     if (new Date(start_time) >= new Date(end_time)) {
//       return "وقت النهاية يجب أن يكون بعد وقت البداية.";
//     }
//     return null;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const emptyFields = Object.keys(formData).filter(
//       (key) => formData[key].trim() === ""
//     );

//     if (emptyFields.length > 0) {
//       Swal.fire({
//         title: "خطأ في الإدخال",
//         text: "يرجى تعبئة جميع الحقول المطلوبة.",
//         icon: "error",
//         confirmButtonText: "موافق",
//       });
//       return;
//     }

//     const dateError = validateDates();
//     if (dateError) {
//       Swal.fire({
//         title: "خطأ في التاريخ",
//         text: dateError,
//         icon: "error",
//         confirmButtonText: "موافق",
//       });
//       return;
//     }

//     try {
//       // حفظ بيانات المناظرة مؤقتاً في الذاكرة
//       localStorage.setItem("debateFormData", JSON.stringify(formData));

//       // الانتقال إلى صفحة الدفع
//       navigate("/PaymentComponent");
//     } catch (error) {
//       Swal.fire({
//         title: "خطأ",
//         text: "حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.",
//         icon: "error",
//         confirmButtonText: "موافق",
//       });
//     }
//   };

//   return (
//     <>
//       <Header />
//       <div
//         className="w-full max-w-2xl mx-auto mt-10 p-10 rounded-xl shadow-lg"
//         style={{
//           backgroundImage: "url('/picture.jpg')",
//           backgroundColor: "rgba(255, 255, 255, 0.9)",
//           backgroundBlendMode: "overlay",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//         }}
//       >
//         <h2 className="text-4xl font-bold mb-10 text-right text-[#274C77]">
//           طلب مناظرة جديدة
//         </h2>
//         <form onSubmit={handleSubmit} className="space-y-8" dir="rtl">
//           <div className="flex flex-col">
//             <label className="mb-2 text-[#274C77] font-semibold" htmlFor="name">
//               اسم المناظرة
//             </label>
//             <input
//               className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//               id="name"
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//             />
//           </div>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="start_time"
//               >
//                 وقت البداية
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="start_time"
//                 type="datetime-local"
//                 name="start_time"
//                 value={formData.start_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="end_time"
//               >
//                 وقت النهاية
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="end_time"
//                 type="datetime-local"
//                 name="end_time"
//                 value={formData.end_time}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex flex-col md:flex-row gap-6">
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="candidate1_id"
//               >
//                 الرقم الوطني للمرشح الأول
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="candidate1_id"
//                 type="text"
//                 name="candidate1_id"
//                 value={formData.candidate1_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             <div className="flex-1">
//               <label
//                 className="mb-2 text-[#274C77] font-semibold"
//                 htmlFor="candidate2_id"
//               >
//                 الرقم الوطني للمرشح الثاني
//               </label>
//               <input
//                 className="w-full border-2 border-[#274C77] rounded-lg p-4 bg-white text-right focus:outline-none focus:ring-2 focus:ring-[#274C77] focus:border-transparent transition-all duration-300"
//                 id="candidate2_id"
//                 type="text"
//                 name="candidate2_id"
//                 value={formData.candidate2_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//           </div>
//           <div className="flex justify-start mt-10">
//             <button
//               type="submit"
//               className="bg-[#274C77] text-white px-10 py-4 rounded-lg hover:bg-[#1E385A] transition duration-300 text-lg font-semibold"
//             >
//               إرسال الطلب
//             </button>
//           </div>
//         </form>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default DebateRequestForm;

////

import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const DebateRequestForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    start_time: "",
    end_time: "",
    candidate1_id: "",
    candidate2_id: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateDates = () => {
    const { start_time, end_time } = formData;
    if (new Date(start_time) >= new Date(end_time)) {
      return "وقت النهاية يجب أن يكون بعد وقت البداية.";
    }
    return null;
  };

  const checkNationalIds = async () => {
    try {
      const { candidate1_id, candidate2_id } = formData;
      const response = await axios.post(
        "http://localhost:4003/check-candidates",
        {
          candidate1_id,
          candidate2_id,
        }
      );
      return response.data.valid;
    } catch (error) {
      console.error("Error checking national IDs:", error.message);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const emptyFields = Object.keys(formData).filter(
      (key) => formData[key].trim() === ""
    );

    if (emptyFields.length > 0) {
      Swal.fire({
        title: "خطأ في الإدخال",
        text: "يرجى تعبئة جميع الحقول المطلوبة.",
        icon: "error",
        confirmButtonText: "موافق",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
        },
      });
      return;
    }

    const dateError = validateDates();
    if (dateError) {
      Swal.fire({
        title: "خطأ في التاريخ",
        text: dateError,
        icon: "error",
        confirmButtonText: "موافق",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
        },
      });
      return;
    }

    const idsValid = await checkNationalIds();
    if (!idsValid) {
      Swal.fire({
        title: "خطأ",
        text: "الرقم الوطني للمرشح غير صحيح.",
        icon: "error",
        confirmButtonText: "موافق",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
        },
      });
      return;
    }

    try {
      // حفظ بيانات المناظرة مؤقتاً في الذاكرة
      localStorage.setItem("debateFormData", JSON.stringify(formData));

      // الانتقال إلى صفحة الدفع
      navigate("/PaymentComponent");
    } catch (error) {
      Swal.fire({
        title: "خطأ",
        text: "حدث خطأ أثناء إنشاء المناظرة. يرجى المحاولة مرة أخرى.",
        icon: "error",
        confirmButtonText: "موافق",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
        },
      });
    }
  };

  return (
    <>
      <Header />
      <div
        className="max-w-2xl mx-auto bg-zait1 shadow-xl rounded-2xl p-8 mb-16 mt-20"
        style={{
          backgroundImage: "url('/picture.jpg')",
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backgroundBlendMode: "overlay",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-4xl font-bold text-right text-zait mb-8">
          طلب مناظرة جديدة
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
          <div>
            <label
              className="block text-gray-600 text-lg font-semibold mb-2"
              htmlFor="name"
            >
              اسم المناظرة
            </label>
            <input
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-zait"
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                className="block text-gray-600 text-lg font-semibold mb-2"
                htmlFor="start_time"
              >
                وقت البداية
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-zait"
                id="start_time"
                type="datetime-local"
                name="start_time"
                value={formData.start_time}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-gray-600 text-lg font-semibold mb-2"
                htmlFor="end_time"
              >
                وقت النهاية
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-zait"
                id="end_time"
                type="datetime-local"
                name="end_time"
                value={formData.end_time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
              <label
                className="block text-gray-600 text-lg font-semibold mb-2"
                htmlFor="candidate1_id"
              >
                الرقم الوطني للمرشح الأول
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-zait"
                id="candidate1_id"
                type="text"
                name="candidate1_id"
                value={formData.candidate1_id}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex-1">
              <label
                className="block text-gray-600 text-lg font-semibold mb-2"
                htmlFor="candidate2_id"
              >
                الرقم الوطني للمرشح الثاني
              </label>
              <input
                className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none  focus:border-zait"
                id="candidate2_id"
                type="text"
                name="candidate2_id"
                value={formData.candidate2_id}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className="flex justify-start mt-10">
            <button
              type="submit"
              className="bg-zait text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline hover:bg-gray-600 transition duration-300 text-lg"
            >
              إرسال الطلب
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default DebateRequestForm;
