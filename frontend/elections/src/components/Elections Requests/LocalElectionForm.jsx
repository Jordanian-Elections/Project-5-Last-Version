import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const LocalElectionForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    national_id: "",
    name: "",
    city: "",
    circle: "",
    email: "",
    local_list_name: "",
    members: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // useEffect(() => {
  //   const loadCitiesAndCircles = async () => {
  //     // Assuming fetchCities and fetchCircles are implemented
  //     const citiesData = await fetchCities();
  //     setCities(citiesData);
  //     const circlesData = await fetchCircles();
  //     setCircles(circlesData);
  //   };
  //   loadCitiesAndCircles();
  // }, []);

  // const handleNationalIdChange = async (e) => {
  //   const { value } = e.target;
  //   setFormData((prev) => ({ ...prev, national_id: value }));
  //   if (value.length === 10) {
  //     // Assuming Jordanian National ID is 10 digits
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `http://localhost:4003/api/requests/nationalId/${value}`
  //       );
  //       const userData = response.data;
  //       setFormData((prev) => ({
  //         ...prev,
  //         name: userData.name,
  //         city: userData.city,
  //         circle: userData.circle,
  //         email: userData.email,
  //       }));
  //     } catch (err) {
  //       setError("لم يتم العثور على بيانات المستخدم");
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  // };

  // const handleNationalIdChange = async (e) => {
  //   const { value } = e.target;
  //   setFormData((prev) => ({ ...prev, national_id: value }));

  //   if (value.length === 10 && /^[0-9]+$/.test(value)) {
  //     // Assuming Jordanian National ID is 10 digits and numeric
  //     try {
  //       setLoading(true);
  //       const response = await axios.get(
  //         `http://localhost:4003/api/requests/nationalId/${value}`
  //       );
  //       const userData = response.data;

  //       setFormData((prev) => ({
  //         ...prev,
  //         name: userData.name || '',
  //         city: userData.city || '',
  //         circle: userData.circle || '',
  //         email: userData.email || '',
  //       }));
  //     } catch (err) {
  //       setError("لم يتم العثور على بيانات المستخدم");
  //     } finally {
  //       setLoading(false);
  //     }
  //   } else if (value.length > 10) {
  //     setError("رقم الهوية الوطنية يجب أن يتكون من 10 أرقام");
  //   }
  // };

  const handleNationalIdChange = async (e) => {
    const { value } = e.target;
    setFormData((prev) => ({ ...prev, national_id: value }));

    if (value.length === 10 && /^[0-9]+$/.test(value)) {
      try {
        setLoading(true);
        const response = await axios.get(
          `http://localhost:4003/api/requests/nationalId/${value}`
        );
        const userData = response.data;
        console.log("Fetched user data:", userData); // Debugging line

        setFormData((prev) => ({
          ...prev,
          name: userData.name || "",
          city: userData.city || "",
          circle: userData.circle || "",
          email: userData.email || "",
        }));
      } catch (err) {
        console.error("Error fetching user data:", err); // Debugging line
        setError("لم يتم العثور على بيانات المستخدم");
      } finally {
        setLoading(false);
      }
    } else if (value.length > 10) {
      setError("رقم الهوية الوطنية يجب أن يتكون من 10 أرقام");
    } else {
      setError(""); // Clear error if ID length is invalid
    }
  };

  const handleAddMember = async () => {
    const { value: memberId } = await Swal.fire({
      title: "إضافة عضو",
      input: "text",
      inputLabel: "أدخل الرقم الوطني للعضو",
      inputPlaceholder: "الرقم الوطني",
      confirmButtonText: "إضافة",
      cancelButtonText: "إلغاء",
      showCancelButton: true,
      buttonsStyling: false, // Disable default styles
      customClass: {
        confirmButton:
          "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline ml-1",
        cancelButton:
          "bg-red-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline mr-1",
        inputLabel: "text-xl font-bold", // Custom class for larger label text
      },
      inputValidator: (value) => {
        if (!value) {
          return "يجب إدخال الرقم الوطني للعضو";
        }
      },
    });

    if (memberId) {
      // Check if the member is already in the list
      if (formData.members.some((member) => member.id === memberId)) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "هذا العضو موجود بالفعل في القائمة",
          confirmButtonText: "موافق",
        });
        return;
      }

      try {
        const response = await axios.get(
          `http://localhost:4003/api/requests/nationalId/${memberId}`
        );
        const memberData = response.data;

        if (memberData.circle !== formData.circle) {
          Swal.fire({
            icon: "error",
            title: "خطأ",
            text: "يجب أن يكون العضو من نفس الدائرة",
            confirmButtonText: "موافق",
            buttonsStyling: false, // Disable default styles
            customClass: {
              confirmButton:
                "bg-zait text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline",
            },
          });
          return;
        }

        setFormData((prev) => ({
          ...prev,
          members: [
            ...prev.members,
            { id: memberId, name: memberData.name, circle: memberData.circle },
          ],
        }));
        Swal.fire({
          icon: "success",
          title: "عضو مضاف",
          text: "تم إضافة العضو بنجاح.",
          confirmButtonText: "موافق",
        });
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "لم يتم العثور على بيانات العضو.",
          confirmButtonText: "موافق",
        });
      }
    }
  };

  // Function to remove a member
  const handleRemoveMember = (memberId) => {
    setFormData((prev) => ({
      ...prev,
      members: prev.members.filter((member) => member.id !== memberId),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.members.length < 3) {
      Swal.fire({
        icon: "warning",
        title: "تحذير",
        text: "يجب إضافة 3 أعضاء على الأقل.",
        confirmButtonText: "موافق",
      });
      return;
    }

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
      },
    });

    if (result.isConfirmed) {
      try {
        setLoading(true);
        const requestData = {
          national_id: formData.national_id,
          local_list_name: formData.local_list_name,
          circle: formData.circle,
          members: formData.members.map((member) => ({
            id: member.id,
            name: member.name,
          })),
        };

        await axios.post(
          "http://localhost:4003/api/requests/local-election-requests",
          requestData
        );

        Swal.fire({
          icon: "success",
          title: "تم تقديم الطلب",
          text: "تم تقديم الطلب بنجاح. سيتم مراجعة الطلب خلال 48 ساعة وفي حال قبول الطلب ستم التواصل مع جميع الأشخاص المعنيين",
          confirmButtonText: "موافق",
        }).then(() => {
          navigate("/");
        });
      } catch (err) {
        console.error("Error submitting form:", err);
        Swal.fire({
          icon: "error",
          title: "خطأ",
          text: "حدث خطأ أثناء تقديم الطلب.",
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
          نموذج الانتخابات المحلية
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
              htmlFor="local_list_name"
              className="block text-zait text-lg font-semibold mb-2"
            >
              اسم القائمة المحلية
            </label>
            <input
              id="local_list_name"
              className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
              value={formData.local_list_name}
              onChange={(e) =>
                setFormData((prev) => ({
                  ...prev,
                  local_list_name: e.target.value,
                }))
              }
              required
            />
          </div>

          <div>
            <label className="block text-zait text-lg font-semibold mb-2">
              الأعضاء
            </label>
            {formData.members.map((member, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <input
                  className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:border-green-500"
                  value={member.id}
                  readOnly
                />
                <span className="text-gray-800">{member.name}</span>
              </div>
            ))}
            <button
              type="button"
              onClick={handleAddMember}
              disabled={formData.members.length >= 3}
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-xl focus:outline-none focus:shadow-outline mt-2"
            >
              إضافة عضو
            </button>
          </div>

          <button
            type="submit"
            className="bg-zait hover:bg-green-800 text-white font-bold py-3 px-4 rounded-xl focus:outline-none focus:shadow-outline w-full"
            disabled={loading}
          >
            {loading ? "جاري التقديم..." : "تقديم الطلب"}
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default LocalElectionForm;
