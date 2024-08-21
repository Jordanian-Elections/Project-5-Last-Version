import { useNavigate } from "react-router-dom";
import { FaListUl, FaChartBar } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";

const AllResults = () => {
  const navigate = useNavigate();

  const cardClasses =
    "bg-white text-zait rounded-lg shadow-lg p-6 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl";
  const iconClasses = "text-zait mb-4";
  const titleClasses = "text-xl font-bold mb-2";
  const textClasses = "text-sm text-gray-700";

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-900 to-gray-350 text-white">
      <Header />

      <main className="p-8 my-8 mb-28">
        <h1 className="text-4xl font-bold text-center mb-12">
          أسماء المرشحين الفائزين{" "}
        </h1>

        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 justify-center">
          <div
            className={cardClasses}
            onClick={() => navigate("/CandidatesList")}
          >
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <FaListUl size={48} className={iconClasses} />
              <h2 className={titleClasses}>قائمة المرشحين</h2>
              <p className={textClasses}>
                استعرض قائمة المرشحين وتعرف على الأسماء المشاركة في الانتخابات
              </p>
            </div>
          </div>

          <div className={cardClasses} onClick={() => navigate("/results")}>
            <div className="p-6 text-center h-full flex flex-col items-center justify-center">
              <FaChartBar size={48} className={iconClasses} />
              <h2 className={titleClasses}>نتائج الانتخابات</h2>
              <p className={textClasses}>
                تابع النتائج الانتخابية واطلع على الفائزين والمقاعد المخصصة
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AllResults;
