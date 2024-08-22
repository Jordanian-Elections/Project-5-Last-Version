import React, { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import axios from "axios";
import Swal from "sweetalert2"; // Make sure to install SweetAlert2: npm install sweetalert2
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    contact_name: "",
    contact_national_id: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const result = await Swal.fire({
      title: "تأكيد",
      text: "هل أنت متأكد أنك تريد إرسال هذه الرسالة؟",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "نعم، أرسل",
      cancelButtonText: "إلغاء",
    });

    if (result.isConfirmed) {
      try {
        const response = await axios.post(
          "http://localhost:4003/api/requests/contact",
          formData
        );
        console.log("Form data submitted:", response.data);
        Swal.fire({
          title: "تم تقديم الطلب بنجاح",
          text: "سنتواصل معك في أقرب وقت ممكن.",
          icon: "success",
          confirmButtonText: "موافق",
        });
        // Clear form data after submission
        setFormData({
          contact_name: "",
          contact_national_id: "",
          phone: "",
          subject: "",
          message: "",
        });
      } catch (error) {
        console.error("Error submitting form:", error);
        Swal.fire({
          title: "خطأ",
          text: "حدث خطأ أثناء إرسال النموذج. يرجى المحاولة مرة أخرى.",
          icon: "error",
          confirmButtonText: "موافق",
        });
      }
    }
  };

  return (
    <>
      <Header />
      <div className="bg-gray-100 min-h-screen" dir="rtl">
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center text-zait mb-8">
            تواصل معنا
          </h1>
          <p className="text-lg text-center text-gray-600 mb-12">
            هل لديك أي سؤال أو اقتراح أو طلب؟ تواصل معنا وسنعاود الاتصال بك في
            أقرب وقت ممكن
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 px-52">
            <div className="flex flex-col items-center">
              <Phone className="w-12 h-12 text-zait mb-4" />
              <h2 className="text-xl font-semibold text-zait mb-2">اتصل بنا</h2>
              <p className="text-gray-600 text-center" dir="ltr">
                +962 6 123 4567
              </p>
            </div>
            <div className="flex flex-col items-center">
              <Mail className="w-12 h-12 text-zait mb-4" />
              <h2 className="text-xl font-semibold text-zait mb-2">راسلنا</h2>
              <p className="text-gray-600 text-center">info@example.com</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-12 h-12 text-zait mb-4" />
              <h2 className="text-xl font-semibold text-zait mb-2">موقعنا</h2>
              <p className="text-gray-600 text-center">الزرقاء، الأردن</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-3xl mx-auto"
          >
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contact_name"
              >
                الاسم الكامل
              </label>
              <input
                className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact_name"
                type="text"
                name="contact_name"
                value={formData.contact_name}
                onChange={handleChange}
                required
                placeholder="أدخل اسمك الكامل"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="contact_national_id"
              >
                الرقم الوطني
              </label>
              <input
                className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact_national_id"
                type="text"
                name="contact_national_id"
                value={formData.contact_national_id}
                onChange={handleChange}
                required
                placeholder="أدخل رقمك الوطني"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phone"
              >
                رقم الهاتف
              </label>
              <input
                className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="أدخل رقم هاتفك"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="subject"
              >
                الموضوع
              </label>
              <input
                className="shadow appearance-none border rounded w-full h-14 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="أدخل موضوع رسالتك"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                الرسالة
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="اكتب رسالتك هنا"
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="bg-zait hover:bg-[#024d3f] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                إرسال الرسالة
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
