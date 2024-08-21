import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const RequestAdForm = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    imageUrl: "",
    description: "",
    price: "50.00", // Default value matching the migration script
    status: "rejected", // Default value
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4003/api/ads",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Success:", response.data);

      Swal.fire({
        title: "تم إرسال طلبك!",
        text: "سوف يتم التواصل معك خلال 48 ساعة.",
        icon: "success",
        confirmButtonText: "موافق",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
        },
      });

      navigate("/", { state: { formData } });
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );

      Swal.fire({
        title: "حدث خطأ!",
        text: "يرجى المحاولة مرة أخرى لاحقاً.",
        icon: "error",
        confirmButtonText: "موافق",
        customClass: {
          confirmButton:
            "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
        },
      });
    }
  };

  const handleCancel = () => {
    navigate("/requests");
  };

  return (
    <>
      <Header />
      <div className="relative top-20 mx-auto p-8 md:p-12 bg-gradient-to-b from-gray-100 to-green-100 shadow-xl rounded-2xl w-[42rem] mb-40">
        <h3 className="text-3xl font-extrabold text-center mb-8 text-zait">
          طلب إعلان
        </h3>
        <form onSubmit={handleSubmit} className="space-y-6" dir="rtl">
          <div>
            <label
              htmlFor="candidateName"
              className="block text-lg font-semibold text-zait mb-2"
            >
              اسم المرشح
            </label>
            <input
              type="text"
              id="candidateName"
              name="candidateName"
              value={formData.candidateName}
              onChange={handleInputChange}
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="imageUrl"
              className="block text-lg font-semibold text-zait mb-2"
            >
              رابط صورة المرشح
            </label>
            <input
              type="url"
              id="imageUrl"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleInputChange}
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              required
            />
          </div>
          <div>
            <label
              htmlFor="description"
              className="block text-lg font-semibold text-zait mb-2"
            >
              وصف الإعلان
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows="6"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              placeholder="مثال: انتخبوا مرشحكم فلان"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between mt-8">
            <button
              type="submit"
              className="bg-zait text-white font-bold py-3 px-8 rounded-full 
                      transition-colors duration-300 
                      focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              إرسال
            </button>
            <button
              type="button"
              onClick={handleCancel}
              className="bg-red-600 text-white font-bold py-3 px-8 rounded-full 
                      hover:bg-red-700 transition-colors duration-300 
                      focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            >
              إلغاء
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default RequestAdForm;
