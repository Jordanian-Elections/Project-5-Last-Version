import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Assuming you're using axios for API calls
import Swal from "sweetalert2"; // Import SweetAlert2
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

// Static list of party names
const PARTY_LISTS = [
  "الحزب الوطني الأردني",
  "حزب الحياة الأردني",
  "حزب الرسالة",
  "حزب الشعب الديمقراطي الأردني (حشد)",
  "حزب الوحدة الشعبية الديمقراطي الأردني",
  "حزب البعث العربي التقدمي",
  "حزب الجبهة الأردنية الموحدة",
  "حزب المؤتمر الوطني (زمزم)",
];

const PartyElectionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    national_id: "",
    name: "",
    city: "",
    circle: "",
    email: "",
    party_list_name: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleNationalIdChange = async (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, national_id: value }));
    if (value.length === 10) {
      // Assuming Jordanian National ID is 10 digits
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4003/api/requests/nationalId/${value}`
        );
        const userData = response.data;
        if (userData.isApproved) {
          setFormData((prev) => ({
            ...prev,
            name: userData.name,
            city: userData.city,
            circle: userData.circle,
            email: userData.email,
          }));
          setError("");
        } else {
          setFormData((prev) => ({
            ...prev,
            name: "",
            city: "",
            circle: "",
            email: "",
          }));
          setError("عذراً، أنت غير مؤهل لتقديم طلب انتخابات حزبية.");
        }
      } catch (err) {
        setError("لم يتم العثور على بيانات المستخدم");
      } finally {
        setLoading(false);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show confirmation dialog
    const result = await Swal.fire({
      title: "تأكيد",
      text: "هل أنت متأكد أنك تريد تقديم الطلب؟",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "نعم، تأكيد",
      cancelButtonText: "إلغاء",
      customClass: {
        confirmButton:
          "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
        cancelButton:
          "bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mr-1",
      },
    });

    if (result.isConfirmed) {
      try {
        setLoading(true);
        await axios.post(
          "http://localhost:4003/api/requests/party-election-requests",
          formData
        );
        Swal.fire({
          title: "نجاح!",
          text: "تم تقديم الطلب بنجاح. سيتم مراجعة الطلب خلال 48 ساعة وفي حال قبول الطلب ستم التواصل مع جميع الأشخاص المعنيين",
          icon: "success",
          confirmButtonText: "موافق",
          customClass: {
            confirmButton:
              "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
          },
        }).then(() => {
          navigate("/");
        });
      } catch (err) {
        Swal.fire({
          title: "خطأ!",
          text: "حدث خطأ أثناء تقديم الطلب",
          icon: "error",
          confirmButtonText: "موافق",
        });
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <Header />
      <div className="max-w-2xl mx-auto bg-gradient-to-b from-gray-100 to-green-100 shadow-xl rounded-2xl p-8 mb-12 mt-12">
        <h2 className="text-4xl font-extrabold text-center text-zait mb-8">
          نموذج الانتخابات الحزبية
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label
              htmlFor="national_id"
              className="block text-zait text-lg font-semibold mb-2"
            >
              الرقم الوطني
            </label>
            <input
              id="national_id"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.national_id}
              onChange={handleNationalIdChange}
              required
            />
          </div>

          {loading && (
            <div className="text-center text-green-600">جاري التحميل...</div>
          )}

          {error && (
            <div
              className="bg-red-100 border border-red-300 text-red-600 px-4 py-3 rounded-xl relative"
              role="alert"
            >
              {error}
            </div>
          )}

          <div>
            <label
              htmlFor="name"
              className="block text-zait text-lg font-semibold mb-2"
            >
              الاسم
            </label>
            <input
              id="name"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.name}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="city"
              className="block text-zait text-lg font-semibold mb-2"
            >
              المدينة
            </label>
            <input
              id="city"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.city}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="circle"
              className="block text-zait text-lg font-semibold mb-2"
            >
              الدائرة
            </label>
            <input
              id="circle"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.circle}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-zait text-lg font-semibold mb-2"
            >
              البريد الإلكتروني
            </label>
            <input
              id="email"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.email}
              readOnly
            />
          </div>

          <div>
            <label
              htmlFor="party_list_name"
              className="block text-zait text-lg font-semibold mb-2"
            >
              اسم القائمة الحزبية
            </label>
            <select
              id="party_list_name"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.party_list_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  party_list_name: e.target.value,
                }))
              }
              required
            >
              <option value="">اختر القائمة الحزبية</option>
              {PARTY_LISTS.map((partyName) => (
                <option key={partyName} value={partyName}>
                  {partyName}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="bg-zait hover:bg-green-800 text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
            disabled={loading || !formData.name}
          >
            {loading ? "جاري التقديم..." : "تقديم الطلب"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default PartyElectionForm;
